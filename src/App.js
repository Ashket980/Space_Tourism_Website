import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {
  Header,
  Home,
  Destination,
  Crew,
  Technology,
  Error,
} from "./components"

function App() {
  return (
    <Router>
      <main>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="/crew">
            <Crew />
          </Route>
          <Route path="/technology">
            <Technology />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
