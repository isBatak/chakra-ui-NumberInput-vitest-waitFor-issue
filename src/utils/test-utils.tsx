/* eslint-disable import/export */
import { render } from '@testing-library/react'
import { Provider } from '../components/ui/provider';

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <Provider>{children}</Provider>,
    ...options,
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
