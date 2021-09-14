import './App.css';
import { Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar';
import Error from './components/Error';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Reddit = lazy(() => import('./components/Reddit'));

function App() {
  return (
    <div className="h-screen flex">
      <Sidebar /> 
      <main style={{width: `calc(100% - 220px)`}} className="h-full bg-gray-50 overflow-y-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/reddit" component={Reddit} />
            <Route component={Error} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
