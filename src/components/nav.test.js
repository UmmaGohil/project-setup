import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from './nav'

describe('<component1 />', () => {
  test('renders component and finds text', () => {
    render(<Nav />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Page Two')).toBeInTheDocument()
  })
})
