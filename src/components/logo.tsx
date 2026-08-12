type LogoProps = {
  inverse?: boolean
}

export const Logo = ({ inverse = false }: LogoProps) => (
  <a
    aria-label="CODE QUEST ホーム"
    className="inline-flex items-center gap-2.5 rounded-lg font-heading text-[1.12rem] font-bold tracking-tight focus-visible:outline-offset-4"
    href="#top"
  >
    <span
      aria-hidden="true"
      className="grid size-10 place-items-center rounded-[13px] bg-gradient-to-br from-brand-blue via-brand-violet to-brand-purple text-sm font-extrabold text-white shadow-[0_7px_18px_rgba(91,82,242,0.3)]"
    >
      CQ
    </span>
    <span className={inverse ? 'text-white' : 'text-ink'}>CODE QUEST</span>
  </a>
)
