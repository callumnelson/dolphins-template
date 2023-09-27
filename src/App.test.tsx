import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"

test("it renders correctly", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
})
