import {Routes, Route} from 'react-router-dom';
import DisplayGrid from './Components/DisplayGrid';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<DisplayGrid />} />
      </Routes>
    </div>
  );
}

export default App;
