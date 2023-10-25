import Calendar from "./components/Calendar.jsx";
import Select from "./components/Select.jsx";
import moment from 'moment-timezone';
import {useState} from 'react'

function App() {
  const [events, setEvents] = useState([]);
  const [events2, setEvents2] = useState([]);
  const [firstTimezone, setFirstTimezone] = useState('America/Lima');
  const [secondTimezone, setSecondTimezone] = useState('America/Santiago');


  const today = moment();
  const mondayDayNumber = today.clone().startOf('week').add(1, 'day').date();
  const sundayDayNumber = today.clone().endOf('week').add(1, 'day').date();



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

    const originDate = moment.tz(fecha, tzOrigen);
    const destinationDate = originDate.tz(tzDestino);

    const destinationDayNumber = parseInt(destinationDate.format('DD'));

    if (destinationDayNumber > sundayDayNumber) destinationDate.date(mondayDayNumber)

    if (destinationDayNumber < mondayDayNumber) destinationDate.date(sundayDayNumber)

    return destinationDate;
  }

  return (
    <>
      <h1 className="text-xl font-bold text-center pt-8 md:text-2xl lg:text-3xl">
        Conversor de Horario Multi-TimeZone
      </h1>
      <div className="p-8">
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
          <Select options={options} value={firstTimezone} onChange={handleSelectChange}/>
          <Select options={options} value={secondTimezone} onChange={handleSelectChange2}/>
        </div>
        <div className="flex items-center justify-center gap-4 py-4">
          <button className="btn btn-accent" onClick={convertWeekTimezone}>Convertir</button>
          <button className="btn btn-ghost" onClick={clearEvents}>Limpiar</button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Calendar className="column" events={events} setEvents={setEvents} timezone={firstTimezone}></Calendar>
          <Calendar className="column" events={events2} setEvents={setEvents2} timezone={secondTimezone}></Calendar>
        </div>
      </div>
    </>
  )
}

export default App
