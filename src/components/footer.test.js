import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from './footer'

describe('<component1 />', () => {
  test('renders component and finds text', () => {
    render(<Footer />)

    expect(screen.getByText('Help')).toBeInTheDocument()
    expect(screen.getByText('My Account')).toBeInTheDocument()
  })
})
