import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './app'

describe('CODE QUEST LP', () => {
  it('renders the core sections and exact hero message', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: /遊びながら、未来をつくる。/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /好きから選べる、5つのコース。/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /よくある質問/ })).toBeInTheDocument()
    expect(screen.getByText('Scratch Adventure')).toBeInTheDocument()
  })

  it('keeps the Why and Courses headings on their intended two lines', () => {
    render(<App />)

    const whyHeading = screen.getByRole('heading', {
      name: /「勉強」じゃないから、夢中になれる。/,
    })
    const coursesHeading = screen.getByRole('heading', {
      name: /好きから選べる、5つのコース。/,
    })

    expect(whyHeading.querySelectorAll('br')).toHaveLength(1)
    expect(coursesHeading.querySelectorAll('br')).toHaveLength(1)
    expect(whyHeading.querySelector('.gradient-text')).toHaveTextContent('夢中になれる。')
    expect(coursesHeading.querySelector('.gradient-text')).toHaveTextContent('5つのコース。')
  })

  it('opens and closes a FAQ item using its button', async () => {
    const user = userEvent.setup()
    render(<App />)

    const trigger = screen.getByRole('button', { name: 'プログラミング未経験でも大丈夫ですか？' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/完全初心者からスタートできる設計/)).toBeInTheDocument()

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })
})
