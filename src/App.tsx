import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import LandingPage from './LandingPage';

function App() {



    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage></LandingPage>}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
