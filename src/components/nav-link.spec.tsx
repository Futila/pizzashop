import { render } from '@testing-library/react'
import { NavLink } from './nav-link'
import { MemoryRouter } from 'react-router-dom'

describe('NavLink', () => {
  it('should highlight the nav link when is the current link', () => {
    const wrapper = render(
      <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    // wrapper.debug()
    expect(wrapper.getByText('About').dataset.current).toEqual('true')
    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
  })
})
