import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Projects from './components/Projects.jsx'
// import MainPageTwo from './components/MainPageTwo';
// import Projects from './components/Projects';
// import Deckard from './components/Deckard';
// import Wanderlust from './components/Wanderlust';
// import Johnju from './components/Johnju';

class App extends React.Component {
  render() {
    return (<div>
      <BrowserRouter className="app-router">
        <div className="routes">
          <Route exact path="/" component={LandingPage} />
          <Route path="/projects" component={Projects} />
          {/* <Route path="/terminal" component={MainPage} />
          <Route path="/deckard" component={Deckard} />
          <Route path="/wanderlust" component={Wanderlust} />
          <Route path="/johnju" component={Johnju} /> */} 
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));