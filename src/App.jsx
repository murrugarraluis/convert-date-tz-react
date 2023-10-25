import Calendar from "./components/Calendar.jsx";
import Select from "./components/Select.jsx";
import moment from 'moment-timezone';
import {useState} from 'react'
import './App.css'

function App() {
  const [events, setEvents] = useState([]);
  const [events2, setEvents2] = useState([]);
  const [firstTimezone, setFirstTimezone] = useState('America/Lima');
  const [secondTimezone, setSecondTimezone] = useState('America/Santiago');
  const options = [
    {value: 'Europe/London', label: 'Europe/London'},
    {value: 'Europe/Paris', label: 'Europe/Paris'},
    {value: 'Europe/Athens', label: 'Europe/Athens'},
    {value: 'Europe/Moscow', label: 'Europe/Moscow'},
    {value: 'Europe/Istanbul', label: 'Europe/Istanbul'},
    {value: 'America/New_York', label: 'America/New_York'},
    {value: 'America/Mexico_City', label: 'America/Mexico_City'},
    {value: 'America/Lima', label: 'America/Lima'},
    {value: 'America/Santiago', label: 'America/Santiago'},
    {value: 'America/Argentina/Buenos_Aires', label: 'America/Argentina/Buenos_Aires'},
  ];

  const convertWeekTimezone = () => {
    const convertedEvents = events.map((event) => {
      const startMoment = convertTimezone(event.start,firstTimezone,secondTimezone)
      const endMoment = convertTimezone(event.end,firstTimezone,secondTimezone)
      return {
        ...event,
        start: startMoment.format('YYYY-MM-DD HH:mm:ss'),
        end: endMoment.format('YYYY-MM-DD HH:mm:ss'),
      };
    });
    setEvents2(convertedEvents);
  };
  const clearEvents = () => {
    setEvents([]);
    setEvents2([])
  }

  const handleSelectChange = (value) => {
    setFirstTimezone(value);
  }
  const handleSelectChange2 = (value) => {
    setSecondTimezone(value);
  }
  function convertTimezone(fecha, tzOrigen, tzDestino) {
    const fechaOrigen = moment.tz(fecha, tzOrigen);
    return fechaOrigen.tz(tzDestino);
  }

  return (
    <>
      <div className="dates-container">
        <Select options={options} value={firstTimezone} onChange={handleSelectChange}/>
        <Select options={options} value={secondTimezone} onChange={handleSelectChange2}/>
      </div>
      <div className="dates-container">
        <Calendar className="column" events={events} setEvents={setEvents} timezone={firstTimezone}></Calendar>
        <Calendar className="column" events={events2} setEvents={setEvents2} timezone={secondTimezone}></Calendar>
      </div>
      <div>
        <button onClick={convertWeekTimezone}>Convert</button>
        <button onClick={clearEvents}>Clear</button>
      </div>
      <br/>
    </>
  )
}

export default App
