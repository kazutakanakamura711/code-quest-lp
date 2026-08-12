import { ArrowRight, CheckCircle2, Gamepad2, Rocket, Sparkles, Star, Terminal } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.span
      aria-hidden="true"
      animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 4, 0] }}
      className={className}
      transition={{ duration: 4.2, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export const Hero = () => (
  <section className="hero-grid relative overflow-hidden pb-20 pt-12 tablet:pb-28 tablet:pt-20" id="top">
    <FloatingShape className="absolute left-[6%] top-28 size-5 rotate-12 rounded-md bg-brand-yellow/80" />
    <FloatingShape className="absolute right-[8%] top-32 size-6 rounded-full border-[5px] border-brand-purple/50" delay={0.5} />
    <FloatingShape className="absolute bottom-14 left-[44%] size-5 rotate-45 bg-brand-mint/80" delay={1} />

    <div className="page-container grid items-center gap-14 desktop:grid-cols-[1.04fr_0.96fr] desktop:gap-16">
      <div className="relative z-10 text-center desktop:text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-bold text-brand-blue shadow-sm">
          <Sparkles aria-hidden="true" className="text-brand-yellow" fill="currentColor" size={16} />
          小学1年生〜6年生対象
        </div>
        <h1 className="font-heading text-[clamp(2.7rem,7vw,5.35rem)] font-bold leading-[1.06] tracking-[-0.045em] text-ink">
          遊びながら、
          <br />
          <span className="gradient-text">未来をつくる。</span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base font-medium leading-8 text-slate-600 tablet:text-lg desktop:mx-0">
          ゲームをつくる。Webサイトをつくる。
          <br className="hidden tablet:block" />
          アイデアを、自分の手でカタチにしよう。
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row desktop:justify-start">
          <a className="button-primary px-7 py-4" href="#trial">
            無料体験を申し込む
            <Rocket aria-hidden="true" size={18} />
          </a>
          <a className="button-secondary px-7 py-4" href="#courses">
            コースを見る
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
        <div className="mt-9 flex items-center justify-center gap-3 desktop:justify-start">
          <div aria-hidden="true" className="flex -space-x-2">
            {[Gamepad2, Terminal, CheckCircle2].map((Icon, index) => (
              <span
                className="grid size-9 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-blue-100 to-purple-100 text-brand-blue"
                key={index}
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
          <div>
            <div aria-label="5つ星" className="flex gap-0.5 text-brand-yellow">
              {[0, 1, 2, 3, 4].map((item) => (
                <Star aria-hidden="true" fill="currentColor" key={item} size={13} />
              ))}
            </div>
            <p className="mt-0.5 text-xs font-medium text-slate-500">300名以上が受講中！</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-[min(100%,590px)]">
        <div className="absolute -inset-5 -z-10 rotate-3 rounded-[40px] bg-gradient-to-br from-brand-purple/20 to-brand-blue/10" />
        <div className="overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-[0_30px_80px_rgba(91,82,242,0.22)]">
          <img
            alt="プログラミングを楽しむ子ども"
            className="aspect-[4/3] h-auto w-full object-cover"
            fetchPriority="high"
            height="525"
            src="/images/hero.jpg"
            width="700"
          />
        </div>
        <div className="absolute -left-2 top-8 rounded-2xl border-2 border-yellow-200 bg-white px-4 py-3 shadow-xl sm:-left-7 tablet:top-14">
          <p className="text-[0.67rem] font-semibold text-slate-500">受講者満足度</p>
          <p className="font-tech text-2xl font-bold text-amber-700">98%</p>
        </div>
        <div className="absolute -bottom-5 right-1 rounded-2xl border-2 border-emerald-200 bg-white px-4 py-3 shadow-xl sm:-right-6 tablet:bottom-10">
          <p className="text-[0.67rem] font-semibold text-slate-500">開講コース</p>
          <p className="font-tech text-2xl font-bold text-emerald-700">5コース</p>
        </div>
      </div>
    </div>
  </section>
)
