
import './App.css';
import Navbar from './components/Navbar';
import Register from './pages/register';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
