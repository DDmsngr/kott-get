import { CONTACT_EMAIL, CONTACT_URL, FALLBACK_URL, PRIVACY_URL } from '../config'

const link = 'inline-flex min-h-11 items-center underline underline-offset-4'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-3xl font-bold">КОТТ</p>
          <p className="mt-1 text-[15px] text-paper/85">Сделано вместе с художниками</p>
        </div>
        <ul className="flex flex-col gap-1 text-[15px]">
          <li>
            <a href={CONTACT_URL} className={link}>
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <a href={PRIVACY_URL} className={link}>
              Политика конфиденциальности
            </a>
          </li>
          <li>
            <a href={FALLBACK_URL} className={link}>
              Все версии на GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
