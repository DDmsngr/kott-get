import type { ReactNode } from 'react'
import { ShieldCheck } from 'lucide-react'
import { TornEdge } from './Paper'

function Dialog({ title, text, buttons, hint }: { title?: string; text: string; buttons: [string, string]; hint?: string }) {
  return (
    <figure className="rounded-2xl bg-white p-4 text-[14px] leading-snug shadow-[0_6px_18px_-10px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
      {title && <p className="mb-1.5 font-semibold">{title}</p>}
      <p className="text-ink-soft">{text}</p>
      <div className="mt-3 flex justify-end gap-5 text-[13px] font-semibold text-[#1A5BB5]">
        <span>{buttons[0]}</span>
        <span>{buttons[1]}</span>
      </div>
      {hint && <figcaption className="mt-3 border-t border-dashed border-black/15 pt-2.5 text-[13px] text-ink">{hint}</figcaption>}
    </figure>
  )
}

function Step({ n, title, children, tilt }: { n: number; title: string; children: ReactNode; tilt: string }) {
  return (
    <li className={`paper-card relative rounded-sm p-5 sm:p-6 ${tilt}`}>
      <div className="flex items-baseline gap-3">
        <span aria-hidden className="font-serif text-5xl leading-none font-bold text-accent-ink">
          {n}
        </span>
        <h3 className="font-serif text-2xl leading-tight font-bold">
          <span className="sr-only">Шаг {n}. </span>
          {title}
        </h3>
      </div>
      <div className="mt-4 space-y-4 text-[16px] leading-relaxed">{children}</div>
    </li>
  )
}

export default function Install() {
  return (
    <section id="install" aria-labelledby="install-title" className="scroll-mt-4">
      <TornEdge fill="#ECE5D8" />
      <div className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-20">
          <h2 id="install-title" className="font-serif text-4xl font-bold sm:text-5xl">
            Как установить
          </h2>
          <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
            Три шага, пара минут. Телефон несколько раз переспросит, это нормально.
          </p>

          <ol className="mt-8 grid gap-6 lg:grid-cols-3 lg:items-start lg:gap-8">
            <Step n={1} title="Скачайте файл" tilt="lg:-rotate-1">
              <p>
                Нажмите «Скачать для Android». Браузер может предупредить, что файл опасен: так он отвечает на любой файл
                приложения. Нажмите «Скачать».
              </p>
              <Dialog
                text="Файл может нанести вред устройству. Всё равно скачать app-release.apk?"
                buttons={['Отмена', 'Скачать']}
              />
            </Step>

            <Step n={2} title="Откройте и разрешите" tilt="lg:rotate-[0.6deg]">
              <p>
                Откройте файл из уведомления или из папки «Загрузки». Телефон попросит разрешение: нажмите «Настройки»,
                включите «Разрешить из этого источника», вернитесь назад и нажмите «Установить».
              </p>
              <Dialog
                text="Из соображений безопасности на телефоне запрещена установка неизвестных приложений из этого источника."
                buttons={['Отмена', 'Настройки']}
              />
            </Step>

            <Step n={3} title="Если вмешается Play Защита" tilt="lg:-rotate-[0.4deg]">
              <p>
                Google Play Защита может остановить установку. Слова в окне на разных телефонах разные, выберите вариант,
                который даёт установить. Например:
              </p>
              <Dialog
                title="Заблокировано Play Защитой"
                text="Это приложение может быть опасным."
                buttons={['Подробнее', 'ОК']}
                hint="Нажмите «Подробнее», затем «Всё равно установить»."
              />
              <Dialog
                title="Отправить приложение на проверку?"
                text="Google проверит приложение на безопасность."
                buttons={['Не отправлять', 'Отправить']}
                hint="Подходит любой вариант, установка продолжится."
              />
              <p className="text-[15px] text-ink-soft">
                Ещё бывает «Установить всё равно» или «Установить без проверки». Ищите кнопку со словом «установить».
              </p>
            </Step>
          </ol>

          <aside className="mt-10 flex max-w-3xl gap-4 rounded-sm border-l-4 border-accent bg-paper/70 p-5">
            <ShieldCheck aria-hidden className="mt-0.5 size-7 shrink-0 text-accent-ink" />
            <div>
              <p className="font-serif text-xl font-bold">Почему телефон переспрашивает</p>
              <p className="mt-1.5 text-[16px] leading-relaxed text-ink-soft">
                КОТТ пока нет в Google Play. Приложения не из магазина телефон проверяет строже и каждый раз уточняет,
                уверены ли вы. Это обычные вопросы при установке файла, они не значат, что с файлом что-то не так.
              </p>
            </div>
          </aside>
        </div>
      </div>
      <TornEdge fill="#ECE5D8" flip />
    </section>
  )
}
