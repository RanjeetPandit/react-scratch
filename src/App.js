import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './pages/Header';
import Footer from './pages/Footer';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </Router>
        <Footer/>
      </React.Fragment>

    );
  }
}
export default App;
