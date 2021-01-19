import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Reddit from './components/Reddit';
import Error from './components/Error';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen flex">
      <Sidebar /> 
      <main style={{width: `calc(100% - 220px)`}} className="h-full bg-gray-50">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/reddit" component={Reddit} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
