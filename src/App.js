import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import React from 'react';
import User from './pages/User';
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <User />
      </div>
    );
  }
}
export default App;
