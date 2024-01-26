import Main from './components/Main';
import './App.css';
import '../src/assets/js/script.js'

import ReactGA from 'react-ga';
const TRACKING_ID = "G-Y97Z1XJD6V"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => <Main className="hidden-section"/>;

export default App;
