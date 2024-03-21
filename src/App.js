import './App.css';
import EventTable  from './components/EventTable.jsx';
import {EVENTS_ARRAY} from './event_data.js';

function App() {
  return (
    <div className="App">
      <EventTable events={EVENTS_ARRAY} />
    </div>
  );
}

export default App;
