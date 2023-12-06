import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from "@emotion/react"
import { screen } from  '@testing-library/dom'
// import { screen } from '@testing-library/user-event'
import '@testing-library/jest-dom'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme="light">  
      {children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/jest-dom'
export * from '@testing-library/dom'
export * from '@testing-library/react'
export { customRender as render }