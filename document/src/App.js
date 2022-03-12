import Home from './Screens/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './styles.css';

function App() {
  return (
    <div className="main-container">
      <Router>
      <Header/>
      <main>
     <Routes>
    <Route path='/' element={<Home/>} exact />
    </Routes>
    </main>
    </Router>
    </div>
  );
}

export default App;
