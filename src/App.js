import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Register from "./components/register";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Register />
        </Provider>
      </div>
    );
  }
}

export default App;
