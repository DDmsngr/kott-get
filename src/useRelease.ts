import { useEffect, useState } from 'react'
import { FALLBACK_URL, MANIFEST_URL, RELEASES_API } from './config'

export type Release = {
  status: 'loading' | 'ready' | 'fallback'
  url: string
  version?: string
  build?: number
  sizeMb?: number
  sha256?: string
}

type Manifest = { versionName: string; versionCode: number; apkUrl: string; sha256?: string }

export function useRelease(): Release {
  const [release, setRelease] = useState<Release>({ status: 'loading', url: FALLBACK_URL })

  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        const res = await fetch(MANIFEST_URL, { cache: 'no-store' })
        if (!res.ok) throw new Error(String(res.status))
        const m = (await res.json()) as Manifest
        if (!m.apkUrl) throw new Error('no apkUrl')
        if (!alive) return
        setRelease({ status: 'ready', url: m.apkUrl, version: m.versionName, build: m.versionCode, sha256: m.sha256 })

        // В манифесте нет размера — берём его у ассета релиза, тег вытаскиваем из apkUrl.
        const tag = m.apkUrl.match(/\/download\/([^/]+)\//)?.[1]
        if (!tag) return
        const rel = await fetch(RELEASES_API + tag)
        if (!rel.ok) return
        const data = (await rel.json()) as { assets?: { name: string; size: number; browser_download_url: string }[] }
        const asset = data.assets?.find((a) => a.browser_download_url === m.apkUrl) ?? data.assets?.find((a) => a.name.endsWith('.apk'))
        if (asset && alive) setRelease((r) => ({ ...r, sizeMb: Math.round(asset.size / 1e6) }))
      } catch {
        if (alive) setRelease({ status: 'fallback', url: FALLBACK_URL })
      }
    })()
    return () => {
      alive = false
    }
  }, [])

  return release
}
