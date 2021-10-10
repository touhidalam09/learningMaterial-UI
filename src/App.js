import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Creact'
import Layouts from './components/Layouts';
import Album from './album/Album';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
    <CssBaseline />
      <Router>
        <Layouts>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/album">
                <Album />
            </Route>
          </Switch>
        </Layouts>
      </Router>
    </>
  );
}

export default App;
