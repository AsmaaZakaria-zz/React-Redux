import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import history from '../history';
import StreamsList from './streams/StreamList';
import StreamsCreate from './streams/StreamCreate';
import StreamsEdit from './streams/StreamEdit';
import StreamsDelete from './streams/StreamDelete';
import StreamsShow from './streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamsList}/>
            <Route path="/streams/new" component={StreamsCreate}/>
            <Route path="/streams/edit/:id" exact component={StreamsEdit}/>
            <Route path="/streams/delete/:id" exact component={StreamsDelete}/>
            <Route path="/streams/show/:id" exact component={StreamsShow}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
