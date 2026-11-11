import { m } from 'motion/react'
import { ArrowDown, Download, Send } from 'lucide-react'
import { CONTACT_EMAIL, PROMO_BOT_URL, PROMO_MAIL_URL } from '../config'
import type { Release } from '../useRelease'
import { PhoneFrame, Stamp, Tape } from './Paper'

const base = import.meta.env.BASE_URL

export function DownloadButton({ release }: { release: Release }) {
  const meta =
    release.status === 'ready'
      ? ['Версия ' + release.version, release.sizeMb ? `${release.sizeMb} МБ` : null, 'файл APK'].filter(Boolean).join(' · ')
      : release.status === 'loading'
        ? 'Загружаем данные о версии…'
        : 'Откроется страница с последней версией'

  return (
    <div>
      <a
        href={release.url}
        className="group inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-accent px-6 text-xl font-bold text-white shadow-[0_6px_0_0_#8E3A28] transition-transform active:translate-y-[3px] active:shadow-[0_3px_0_0_#8E3A28] sm:w-auto sm:min-w-80"
      >
        <Download aria-hidden className="size-6 transition-transform group-hover:translate-y-0.5" strokeWidth={2.5} />
        Скачать для Android
      </a>
      <p className="mt-3 text-sm text-ink-soft" aria-live="polite">
        {meta}
      </p>
      {release.sha256 && (
        <p className="mt-1 text-[11px] leading-snug break-all text-ink-soft">
          SHA-256 для проверки файла: <span className="font-mono">{release.sha256}</span>
        </p>
      )}
    </div>
  )
}

export default function Hero({ release }: { release: Release }) {
  return (
    <header className="relative overflow-x-clip">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-7 pb-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-16 lg:pb-20">
        <div className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase">Приложение для художников</p>
          <h1 className="mt-3 font-serif text-[4.25rem] leading-[0.95] font-bold tracking-tight sm:text-8xl">КОТТ</h1>
          <p className="mt-2 font-serif text-xl leading-snug sm:text-2xl">Книга учёта творческих работ</p>
          <p className="mt-4 max-w-md text-[17px] text-balance leading-relaxed text-ink-soft">
            Где работа, у кого, за сколько, какие документы. Всё в телефоне.
          </p>
          <div className="mt-6">
            <DownloadButton release={release} />
          </div>

          <div className="paper-card relative mt-7 max-w-md rounded-sm p-4 sm:p-5">
            <Tape className="-top-3 right-6 rotate-3" />
            <p className="font-serif text-xl font-bold">Первые 100: Premium бесплатно</p>
            <p className="mt-1 text-[15px] leading-snug text-ink-soft">Раз и навсегда. Одно устройство и один Telegram-аккаунт получают Premium один раз.</p>
            <ol className="mt-3 space-y-1 text-[15px] leading-snug">
              <li>1. Установите приложение.</li>
              <li>2. В приложении откройте «Ещё» → «Лицензия» и скопируйте ID устройства.</li>
              <li>3. Отправьте этот ID боту в Telegram: Premium включится.</li>
            </ol>
            <a
              href={PROMO_BOT_URL}
              className="mt-4 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-5 text-[17px] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <Send aria-hidden className="size-5" />
              Открыть бота в Telegram
            </a>
            <p className="mt-2 text-[13px] text-ink-soft">
              Нет Telegram? Напишите на{' '}
              <a href={PROMO_MAIL_URL} className="font-semibold text-ink underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <a
            href="#install"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold underline decoration-accent decoration-2 underline-offset-4"
          >
            Как установить: 3 шага
            <ArrowDown aria-hidden className="size-4" />
          </a>

          <div className="paper-card relative mt-10 hidden max-w-md -rotate-1 items-center gap-5 rounded-sm p-4 pr-6 lg:flex">
            <Tape className="-top-3 -left-4 -rotate-12" />
            <img src={`${base}kott-qr.svg`} alt="QR-код этой страницы" width={112} height={112} className="size-28 shrink-0" />
            <div>
              <p className="font-serif text-xl font-bold">Откройте на телефоне</p>
              <p className="mt-1 text-[15px] leading-snug text-ink-soft">
                Приложение ставится на Android. Наведите камеру телефона на код, и эта страница откроется там.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem] lg:max-w-[19rem]">
          <m.div
            initial={{ rotate: 0, y: 24 }}
            animate={{ rotate: -4, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 14 }}
            className="relative"
          >
            <Tape className="-top-3 left-1/2 z-10 -translate-x-1/2 rotate-3" />
            <PhoneFrame src={`${base}2_karta_top.webp`} alt="Карточка работы в КОТТ: год, техника, размеры, цена и серия" eager />
          </m.div>
          <Stamp className="absolute -bottom-4 -left-6 z-20 size-28 -rotate-12 bg-paper shadow-sm text-[10px] leading-tight sm:-left-12">
            Первые 100
            <br />
            бесплатно
          </Stamp>
        </div>
      </div>
    </header>
  )
}
