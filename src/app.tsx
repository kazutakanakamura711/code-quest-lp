import {
  ArrowRight,
  Blocks,
  Box,
  Camera,
  Check,
  ChevronDown,
  Code2,
  Gamepad2,
  Lightbulb,
  Monitor,
  PlayCircle,
  Play,
  Rocket,
  Share2,
  Sparkles,
  Star,
  Trophy,
} from 'lucide-react'
import { useId, useState } from 'react'
import type { CSSProperties } from 'react'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Logo } from './components/logo'
import { Reveal } from './components/reveal'
import {
  courses,
  faqs,
  features,
  journey,
  navigation,
  prices,
  skills,
  supportPoints,
  works,
} from './data/content'

const marqueeItems = [
  'Scratch',
  'Minecraft',
  'Roblox',
  'Web制作',
  'JavaScript',
  '作品発表会',
  '受講者満足度98%',
] as const

const courseIcons = {
  blocks: Blocks,
  box: Box,
  gamepad: Gamepad2,
  monitor: Monitor,
  code: Code2,
} as const

const journeyIcons = [Play, Lightbulb, Code2, Share2, Trophy] as const
const journeyColors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ea580c'] as const
const journeyTextColors = ['#1d4ed8', '#6d28d9', '#047857', '#a16207', '#c2410c'] as const
const workImages = [
  '/images/work-maze.jpg',
  '/images/work-city.jpg',
  '/images/work-web.jpg',
  '/images/work-roblox.jpg',
] as const
const skillImages = [
  '/images/skill-logic.jpg',
  '/images/skill-solve.jpg',
  '/images/skill-create.jpg',
  '/images/skill-present.jpg',
  '/images/skill-explore.jpg',
] as const
const skillDescriptions = [
  '順序立てて考える力',
  'エラーを自分で直す力',
  'ゼロから作り出す力',
  '作品を人に伝える力',
  '自分で調べて学ぶ力',
] as const

const SectionHeading = ({
  eyebrow,
  title,
  accent,
  description,
  breakBeforeAccent = false,
}: {
  eyebrow: string
  title: string
  accent: string
  description?: string
  breakBeforeAccent?: boolean
}) => (
  <Reveal className="mx-auto mb-12 max-w-3xl text-center tablet:mb-16">
    <p className="section-eyebrow">{eyebrow}</p>
    <h2 className="section-title">
      {title}
      {breakBeforeAccent ? <br /> : null}
      <span className="gradient-text">{accent}</span>
    </h2>
    {description ? (
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">{description}</p>
    ) : null}
  </Reveal>
)

const Marquee = () => (
  <div aria-label="学べる内容" className="overflow-hidden border-y border-indigo-100 bg-white py-4">
    <div className="marquee-track flex w-max items-center">
      {[...marqueeItems, ...marqueeItems].map((item, index) => (
        <div
          aria-hidden={index >= marqueeItems.length}
          className="flex items-center"
          key={`${item}-${index}`}
        >
          <span className="whitespace-nowrap px-6 font-tech text-sm font-bold uppercase tracking-wider text-slate-600 tablet:px-9">
            {item}
          </span>
          <Sparkles
            aria-hidden="true"
            className="text-brand-yellow"
            fill="currentColor"
            size={14}
          />
        </div>
      ))}
    </div>
  </div>
)

const WhySection = () => (
  <section className="section-space overflow-hidden bg-white" id="about">
    <div className="page-container">
      <SectionHeading
        accent="夢中になれる。"
        breakBeforeAccent
        eyebrow="WHY CODE QUEST"
        title="「勉強」じゃないから、"
      />
      <div className="grid gap-6 tablet:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal className="h-full" delay={index * 0.08} key={feature.number}>
            <article className="feature-card group h-full">
              <div className="relative h-48 overflow-hidden rounded-[22px]">
                <img
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  height="434"
                  loading="lazy"
                  src={`/images/why-${['play', 'create', 'grow'][index]}.jpg`}
                  width="900"
                />
                <span className="absolute left-3 top-3 rounded-xl bg-white/90 px-3 py-1.5 font-tech text-xs font-bold text-brand-blue shadow-sm">
                  {feature.number}
                </span>
              </div>
              <div className="px-1 pb-1 pt-6">
                <h3 className="font-tech text-xl font-bold tracking-wide text-ink">
                  {feature.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const CoursesSection = () => (
  <section className="section-space bg-blue-mist" id="courses">
    <div className="page-container">
      <SectionHeading
        accent="5つのコース。"
        breakBeforeAccent
        eyebrow="COURSES"
        title="好きから選べる、"
      />
      <div className="grid gap-5 tablet:grid-cols-2 desktop:grid-cols-3">
        {courses.map((course, index) => {
          const Icon = courseIcons[course.icon]
          return (
            <Reveal className="h-full" delay={(index % 3) * 0.06} key={course.title}>
              <article
                className="course-card h-full"
                style={{ '--course-accent': course.accent } as CSSProperties}
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span
                    className="grid size-14 place-items-center rounded-2xl text-white shadow-lg"
                    style={{ background: course.accent }}
                  >
                    <Icon aria-hidden="true" size={26} />
                  </span>
                  <span
                    className="rounded-full px-3 py-1.5 font-tech text-[0.65rem] font-bold tracking-wider"
                    style={{ background: course.surface, color: course.accent }}
                  >
                    {course.eyebrow}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-ink">{course.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{course.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          )
        })}
        <Reveal className="h-full" delay={0.12}>
          <aside className="flex h-full min-h-72 flex-col items-center justify-center rounded-[28px] border-2 border-dashed border-brand-blue/30 bg-white/70 p-7 text-center">
            <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-lg">
              <Rocket aria-hidden="true" size={26} />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-ink">どのコースか迷ったら</h3>
            <p className="mt-2 text-sm text-slate-500">無料体験で実際に試してみよう！</p>
            <a className="button-primary mt-5 px-6 py-3 text-sm" href="#trial">
              無料体験を見る
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </aside>
        </Reveal>
      </div>
    </div>
  </section>
)

const JourneySection = () => (
  <section className="section-space overflow-hidden bg-white" id="learning">
    <div className="page-container">
      <SectionHeading
        accent="CODE QUESTの学び方。"
        eyebrow="LEARNING JOURNEY"
        title="できた！が増える、"
      />
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-[10%] right-[10%] top-12 hidden border-t-2 border-dashed border-indigo-200 tablet:block"
        />
        <ol className="relative grid gap-4 tablet:grid-cols-5 tablet:gap-0">
          {journey.map((item, index) => {
            const Icon = journeyIcons[index]
            const color = journeyColors[index]
            const textColor = journeyTextColors[index]
            return (
              <li className="relative" key={item.step}>
                <Reveal className="h-full" delay={index * 0.08}>
                  <div className="flex h-full items-center gap-4 rounded-[24px] border border-indigo-100 bg-white p-4 text-left shadow-sm tablet:flex-col tablet:border-0 tablet:bg-transparent tablet:px-2 tablet:text-center tablet:shadow-none">
                    <span
                      className="relative z-10 grid size-20 shrink-0 place-items-center rounded-full border-[7px] border-white text-white shadow-lg"
                      style={{ background: color }}
                    >
                      <Icon aria-hidden="true" size={26} />
                    </span>
                    <div>
                      <p className="font-tech text-[0.65rem] font-bold tracking-wider text-slate-400">
                        STEP {item.step}
                      </p>
                      <h3
                        className="font-tech text-base font-bold tracking-wide"
                        style={{ color: textColor }}
                      >
                        {item.label}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  </section>
)

const WorksSection = () => (
  <section className="section-space bg-blue-mist">
    <div className="page-container">
      <SectionHeading
        accent="作品。"
        description="生徒たちが実際に作ったオリジナル作品の一部をご紹介！"
        eyebrow="STUDENT WORKS"
        title="みんなの"
      />
      <div className="grid gap-5 sm:grid-cols-2 desktop:grid-cols-4">
        {works.map((work, index) => (
          <Reveal className="h-full" delay={index * 0.06} key={work.title}>
            <article className="work-card group h-full">
              <div className="h-44 overflow-hidden bg-slate-100">
                <img
                  alt={`${work.title}の作品画面`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  height="506"
                  loading="lazy"
                  src={workImages[index]}
                  width="900"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base font-bold text-ink">{work.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{work.author}</p>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-3 py-1 font-tech text-[0.62rem] font-bold text-white">
                    {work.course}
                  </span>
                  <span aria-label="5つ星" className="flex text-brand-yellow">
                    {[0, 1, 2, 3, 4].map((item) => (
                      <Star aria-hidden="true" fill="currentColor" key={item} size={11} />
                    ))}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const ParentsSection = () => (
  <section className="section-space bg-slate-50">
    <div className="page-container grid items-center gap-12 desktop:grid-cols-[0.9fr_1.1fr] desktop:gap-16">
      <Reveal>
        <p className="section-eyebrow text-left">FOR PARENTS</p>
        <h2 className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.18] tracking-tight text-ink">
          楽しむだけじゃない。
          <br />
          これから必要な力が、
          <br />
          <span className="gradient-text">自然と身につく。</span>
        </h2>
        <p className="mt-6 text-sm leading-7 text-slate-600 tablet:text-base">
          プログラミング教育は、コードを覚えることだけが目的ではありません。試行錯誤しながら作品を完成させる体験が、これからの時代に必要な思考力・表現力・行動力を育てます。
        </p>
        <ul className="mt-7 space-y-3">
          {supportPoints.map((point) => (
            <li className="flex items-start gap-3 text-sm font-medium text-slate-700" key={point}>
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                <Check aria-hidden="true" size={13} strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="grid grid-cols-2 gap-3 tablet:gap-4">
        {skills.map((skill, index) => (
          <Reveal
            className={index === 4 ? 'col-span-2 tablet:col-span-1' : ''}
            delay={index * 0.05}
            key={skill}
          >
            <article
              className="min-h-40 overflow-hidden rounded-[24px] border border-slate-200 bg-white bg-cover bg-right p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.98), rgba(255,255,255,.9) 58%, rgba(255,255,255,.18)), url(${skillImages[index]})`,
              }}
            >
              <span className="inline-flex min-w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple px-2 py-2 font-tech text-xs font-bold text-white">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-heading font-bold text-ink">{skill}</h3>
              <p className="mt-1 text-xs text-slate-500">{skillDescriptions[index]}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const PricingSection = () => (
  <section className="section-space bg-white" id="pricing">
    <div className="page-container">
      <SectionHeading
        accent="料金。"
        description="入会金 11,000円（初回のみ）・無料体験あり"
        eyebrow="COURSE & PRICE"
        title="わかりやすい、"
      />
      <div className="mx-auto grid max-w-4xl gap-6 tablet:grid-cols-2">
        {prices.map((price, index) => (
          <Reveal className="h-full" delay={index * 0.08} key={price.title}>
            <article
              className={`relative h-full rounded-[30px] p-7 tablet:p-9 ${price.featured ? 'border-2 border-brand-purple bg-indigo-50 shadow-[0_24px_70px_rgba(91,82,242,.2)]' : 'border-2 border-slate-200 bg-white shadow-lg'}`}
            >
              {price.featured ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-2 font-tech text-xs font-bold text-white shadow-md">
                  人気！
                </span>
              ) : null}
              <h3 className="text-center font-heading text-xl font-bold text-ink">{price.title}</h3>
              <p className="mt-4 text-center font-tech text-5xl font-bold tracking-tight text-ink">
                <span className="mr-1 text-xl">¥</span>
                {price.price}
                <span className="ml-1 text-sm text-slate-500">/月</span>
              </p>
              <ul className="mt-7 space-y-3 border-t border-slate-200 pt-7">
                {price.items.map((item) => (
                  <li className="flex items-center gap-3 text-sm text-slate-600" key={item}>
                    <Check
                      aria-hidden="true"
                      className="text-emerald-500"
                      size={17}
                      strokeWidth={3}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                className={
                  price.featured
                    ? 'button-primary mt-8 w-full py-4'
                    : 'button-secondary mt-8 w-full py-4'
                }
                href="#trial"
              >
                無料体験で試す
                <ArrowRight aria-hidden="true" size={17} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const FaqItem = ({ faq, index }: { faq: (typeof faqs)[number]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false)
  const id = useId()

  return (
    <Reveal delay={index * 0.04}>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-200">
        <h3>
          <button
            aria-label={faq.question}
            aria-controls={id}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between gap-4 p-5 text-left tablet:p-6"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            <span className="flex items-start gap-3 font-heading text-sm font-semibold text-ink tablet:text-base">
              <span className="font-tech font-bold text-brand-blue">Q</span>
              {faq.question}
            </span>
            <ChevronDown
              aria-hidden="true"
              className={`shrink-0 text-brand-blue transition-transform ${isOpen ? 'rotate-180' : ''}`}
              size={20}
            />
          </button>
        </h3>
        <div className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`} id={id}>
          <div>
            <p className="border-t border-slate-100 px-5 pb-6 pt-5 text-sm leading-7 text-slate-600 tablet:px-6">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

const FaqSection = () => (
  <section className="section-space bg-slate-50" id="faq">
    <div className="page-container max-w-4xl">
      <SectionHeading accent="質問" eyebrow="FAQ" title="よくある" />
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FaqItem faq={faq} index={index} key={faq.question} />
        ))}
      </div>
    </div>
  </section>
)

const TrialSection = () => {
  const [showNotice, setShowNotice] = useState(false)

  return (
    <section className="overflow-hidden bg-white px-4 py-14 tablet:px-6 tablet:py-24" id="trial">
      <Reveal className="mx-auto max-w-6xl">
        <div className="trial-panel relative overflow-hidden rounded-[36px] px-6 py-14 text-center text-white tablet:px-12 tablet:py-20">
          <span
            aria-hidden="true"
            className="absolute -left-10 -top-12 size-40 rounded-full border-[28px] border-white/10"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-16 -right-8 size-52 rotate-12 rounded-[50px] bg-brand-yellow/20"
          />
          <div className="relative z-10">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-tech text-xs font-bold tracking-wide">
              <Sparkles aria-hidden="true" size={15} />
              完全無料 · いつでもキャンセルOK
            </p>
            <h2 className="mt-6 font-heading text-[clamp(2rem,6vw,4.1rem)] font-bold leading-tight tracking-tight">
              まずは、ゲームを
              <br className="tablet:hidden" />
              つくってみよう。
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-indigo-100 tablet:text-base">
              無料体験では、実際にゲームや作品づくりを体験できます。プログラミングが初めてでも大丈夫！
            </p>
            <button className="button-trial mt-8" onClick={() => setShowNotice(true)} type="button">
              無料体験を申し込む
              <Rocket aria-hidden="true" size={19} />
            </button>
            <p className="mt-5 text-xs font-medium text-indigo-100">
              所要時間 60分 · 保護者の同席歓迎
            </p>
            {showNotice ? (
              <p
                aria-live="polite"
                className="mx-auto mt-5 max-w-xl rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm"
              >
                お申し込み窓口は現在準備中です。公開後のお問い合わせ先をご確認ください。
              </p>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-ink px-5 pb-8 pt-14 text-indigo-100">
    <div className="page-container">
      <div className="grid gap-10 border-b border-white/10 pb-10 tablet:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-sm text-sm leading-7 text-indigo-200">
            遊びながら、未来をつくる。子どもたちが楽しくプログラミングを学べるスクールです。
          </p>
        </div>
        <div>
          <h2 className="font-tech text-xs font-bold tracking-widest text-white">MENU</h2>
          <nav aria-label="フッターナビゲーション" className="mt-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <a
                className="w-fit text-sm text-indigo-200 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="font-tech text-xs font-bold tracking-widest text-white">FOLLOW US</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-indigo-200">
            <span className="flex items-center gap-2">
              <Camera aria-hidden="true" size={17} /> Instagram
            </span>
            <span className="flex items-center gap-2">
              <PlayCircle aria-hidden="true" size={18} /> YouTube
            </span>
          </div>
        </div>
      </div>
      <p className="pt-7 text-center font-tech text-[0.68rem] tracking-wide text-indigo-300">
        © 2024 CODE QUEST. All rights reserved.
      </p>
    </div>
  </footer>
)

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へスキップ
      </a>
      <Header onMenuChange={setIsMenuOpen} />
      <main id="main-content" inert={isMenuOpen || undefined}>
        <Hero />
        <Marquee />
        <WhySection />
        <CoursesSection />
        <JourneySection />
        <WorksSection />
        <ParentsSection />
        <PricingSection />
        <FaqSection />
        <TrialSection />
      </main>
      <div inert={isMenuOpen || undefined}>
        <Footer />
      </div>
    </>
  )
}
