import React, { Component } from "react";
import Layout from './components/Layout/Layout';
import {Router} from 'react-router-dom';
import history from './history';


class App extends Component {
  render() {
    return (
      <Router history={history}>
          <Layout></Layout>
     </Router>
	 )
  }
}
export default App;
