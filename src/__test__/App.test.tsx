import { render, screen } from '@testing-library/react'
import App from '../App'

test('should render app component', () => {
  render(<App />)
  const linkElement = screen.getByText(/app component/i)
  expect(linkElement).toBeInTheDocument()
})
