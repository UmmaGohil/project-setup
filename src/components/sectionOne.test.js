import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SectionOne from './sectionOne'

describe('<component1 />', () => {
  test('renders component and finds text', () => {
    render(<SectionOne />)
  })
})
