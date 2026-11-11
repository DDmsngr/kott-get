import { Send } from 'lucide-react'
import { CONTACT_EMAIL, PROMO_BOT_URL, PROMO_MAIL_URL } from '../config'
import { Stamp, Tape, TornEdge } from './Paper'

const steps = [
  'Установите КОТТ по инструкции выше.',
  'В приложении откройте «Ещё» → «Лицензия» и нажмите «Скопировать» рядом с ID устройства.',
  'Откройте бота в Telegram и отправьте ему этот ID: Premium включится на вашем устройстве.',
]

export default function Free100() {
  return (
    <section aria-labelledby="free-title" className="overflow-x-clip">
      <TornEdge fill="#ECE5D8" />
      <div className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="paper-card relative mx-auto max-w-3xl rotate-[-0.6deg] rounded-sm p-6 sm:p-10">
            <Tape className="-top-3 left-8 -rotate-6" />
            <Stamp className="absolute -top-6 -right-2 size-24 rotate-12 bg-[#FFFDF8] text-[11px] leading-tight sm:-right-8 sm:size-28">
              Premium
              <br />0 ₽
            </Stamp>
            <h2 id="free-title" className="max-w-[78%] font-serif text-4xl leading-tight font-bold sm:text-5xl">
              Первые 100: бесплатно
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed">
              Первые 100 пользователей получают Premium бесплатно, раз и навсегда. Ни сейчас, ни потом платить не нужно. Одно устройство и один Telegram-аккаунт получают Premium один раз.
            </p>

            <ol className="mt-6 space-y-3 text-[16px] leading-relaxed">
              {steps.map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden className="font-serif text-xl leading-none font-bold text-accent-ink">
                    {i + 1}.
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={PROMO_BOT_URL}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-6 text-lg font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                <Send aria-hidden className="size-5" />
                Открыть бота в Telegram
              </a>
              <p className="text-[15px] text-ink-soft">
                Нет Telegram? Напишите на{' '}
                <a href={PROMO_MAIL_URL} className="font-semibold text-ink underline underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <TornEdge fill="#ECE5D8" flip />
    </section>
  )
}
