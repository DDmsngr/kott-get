import { m } from 'motion/react'
import { FileText, Images, Layers, ListChecks, LockKeyhole } from 'lucide-react'
import { PhoneFrame, Tape } from './Paper'

const base = import.meta.env.BASE_URL

const items = [
  { icon: ListChecks, title: 'Реестр и статусы', text: 'У каждой работы номер, статус и журнал: на выставке, на руках, продана, подарена.' },
  { icon: Layers, title: 'Серии', text: 'Работы собираются в серии, сразу видно, какая куда входит.' },
  { icon: FileText, title: 'Документы за минуту', text: 'Сертификат подлинности, договор и акт из карточки работы.' },
  { icon: Images, title: 'Выставки и продажи', text: 'Где и когда показывали работу, кому и за сколько продали.' },
  { icon: LockKeyhole, title: 'Данные у вас', text: 'Всё хранится в телефоне. Резервная копия одним файлом и PIN на вход.' },
]

const shots = [
  { src: '1_reestr', alt: 'Реестр работ: список с номерами, размерами и статусами', caption: 'Реестр', tilt: -3 },
  { src: '3_serii', alt: 'Работы, сгруппированные по сериям', caption: 'Серии', tilt: 2 },
  { src: '4_sertifikat', alt: 'Готовый сертификат подлинности произведения', caption: 'Сертификат', tilt: -1.5 },
]

export default function Features() {
  return (
    <section aria-labelledby="features-title" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-24">
      <h2 id="features-title" className="font-serif text-4xl font-bold sm:text-5xl">
        Что внутри
      </h2>

      <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-dashed border-accent text-accent-ink">
              <Icon aria-hidden className="size-6" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-0.5 text-[16px] leading-relaxed text-ink-soft">{text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pt-4 pb-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:px-0 lg:gap-14">
        {shots.map((s, i) => (
          <m.figure
            key={s.src}
            initial={{ rotate: 0, y: 20 }}
            whileInView={{ rotate: s.tilt, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 70, damping: 15, delay: i * 0.08 }}
            className="relative w-[62vw] max-w-64 shrink-0 snap-center sm:w-auto sm:max-w-none"
          >
            <Tape className={`-top-3 z-10 ${i % 2 ? 'right-6 rotate-6' : 'left-6 -rotate-6'}`} />
            <PhoneFrame src={`${base}${s.src}.webp`} alt={s.alt} />
            <figcaption className="mt-4 text-center font-serif text-lg font-bold">{s.caption}</figcaption>
          </m.figure>
        ))}
      </div>
    </section>
  )
}
