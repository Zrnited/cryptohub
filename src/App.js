import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import { DataContextProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
        </Router>
      </DataContextProvider>
    </div>
  );
}

export default App;
