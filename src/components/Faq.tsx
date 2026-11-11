import { Plus } from 'lucide-react'

const faq = [
  {
    q: 'Это безопасно?',
    a: 'Файл скачивается со страницы выпусков КОТТ на GitHub, там лежит каждая версия. Телефон предупреждает только потому, что приложения пока нет в Google Play. Сверить файл можно по контрольной сумме SHA-256, она указана под кнопкой «Скачать».',
  },
  {
    q: 'Где хранятся мои данные?',
    a: 'В вашем телефоне. Резервную копию всех данных можно сохранить одним файлом и держать там, где удобно. Вход в приложение закрывается PIN-кодом.',
  },
  {
    q: 'Работает без интернета?',
    a: 'Да, работы и документы хранятся в телефоне. Интернет нужен, чтобы скачать обновление или активировать код Premium.',
  },
  { q: 'Нужен ли аккаунт?', a: 'Нет. Регистрации в КОТТ нет.' },
  { q: 'А на iPhone?', a: 'Пока нет. КОТТ работает только на Android.' },
]

export default function Faq() {
  return (
    <section aria-labelledby="faq-title" className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-24">
      <h2 id="faq-title" className="font-serif text-4xl font-bold sm:text-5xl">
        Вопросы
      </h2>
      <div className="mt-8 divide-y divide-dashed divide-ink/25 border-y border-dashed border-ink/25">
        {faq.map(({ q, a }) => (
          <details key={q} className="group">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {q}
              <Plus
                aria-hidden
                className="size-5 shrink-0 text-accent-ink transition-transform group-open:rotate-45 motion-reduce:transition-none"
              />
            </summary>
            <p className="pb-5 text-[16px] leading-relaxed text-ink-soft">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
