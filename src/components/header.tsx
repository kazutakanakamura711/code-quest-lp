import { Menu, Rocket, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navigation } from '../data/content'
import { Logo } from './logo'

type HeaderProps = {
  onMenuChange: (isOpen: boolean) => void
}

export const Header = ({ onMenuChange }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    onMenuChange(isOpen)

    if (!isOpen) return

    const dialog = dialogRef.current
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    focusable?.[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        triggerRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onMenuChange])

  const handleLinkClick = () => {
    closeMenu()
    triggerRef.current?.focus()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/80 bg-white/90 backdrop-blur-xl">
      <div className="page-container flex h-[72px] items-center justify-between gap-5">
        <Logo />

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-6 desktop:flex">
          {navigation.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button-primary hidden shrink-0 px-5 py-3 text-sm desktop:inline-flex"
          href="#trial"
        >
          無料体験はこちら
          <Rocket aria-hidden="true" size={16} />
        </a>

        <button
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label="メニューを開く"
          className="icon-button desktop:hidden"
          onClick={() => setIsOpen(true)}
          ref={triggerRef}
          type="button"
        >
          <Menu aria-hidden="true" size={22} />
        </button>
      </div>

      {isOpen ? (
        <div
          aria-label="モバイルメニュー"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm desktop:hidden"
          role="dialog"
        >
          <button
            aria-label="メニューの外側をクリックして閉じる"
            className="absolute inset-0 cursor-default"
            onClick={handleLinkClick}
            type="button"
          />
          <div
            className="absolute right-0 top-0 flex h-dvh w-[min(88vw,360px)] flex-col rounded-l-[32px] bg-white p-6 shadow-2xl"
            id="mobile-menu"
            ref={dialogRef}
          >
            <div className="mb-10 flex items-center justify-between">
              <Logo />
              <button
                aria-label="メニューを閉じる"
                className="icon-button"
                onClick={handleLinkClick}
                type="button"
              >
                <X aria-hidden="true" size={22} />
              </button>
            </div>
            <nav aria-label="モバイルナビゲーション" className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <a
                  className="flex items-center justify-between rounded-2xl px-4 py-4 font-heading text-lg font-semibold text-ink hover:bg-indigo-50"
                  href={item.href}
                  key={item.href}
                  onClick={handleLinkClick}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className="font-tech text-xs text-brand-blue">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>
            <a
              className="button-primary mt-auto w-full py-4"
              href="#trial"
              onClick={handleLinkClick}
            >
              無料体験はこちら
              <Rocket aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
