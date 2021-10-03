import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Creact'
import Layouts from './components/Layouts';

function App() {
  return (
    <>
      <Router>
        <Layouts>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layouts>
      </Router>
    </>
  );
}

export default App;
