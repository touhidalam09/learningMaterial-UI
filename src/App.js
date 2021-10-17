import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Creact'
import Layouts from './components/Layouts';
import Album from './album/Album';
import { CssBaseline } from '@mui/material';
import Blog from './Blog/Blog';
import IndexEmployee from './employee';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Layouts>
          <Switch>
            {/* If New Route Add or remove Than also Add/remove from menuItem var in Layouts file */}
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/album">
              <Album />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/employee">
              <IndexEmployee />
            </Route>
          </Switch>
        </Layouts>
      </Router>
    </>
  );
}

export default App;
