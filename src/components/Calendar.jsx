import {useState, useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import esLocale from '@fullcalendar/core/locales/es';
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment-timezone';

// eslint-disable-next-line react/prop-types
const Calendar = ({events, setEvents, timezone}) => {
  moment.tz.setDefault('UTC');
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateSelect = (selectInfo) => {
    // Convierte las fechas a objetos Moment.js
    const start = moment(selectInfo.start);
    const end = moment(selectInfo.end);

    // Formatea las fechas en el formato "YYYY-MM-DD HH:mm" (UTC)
    const startUTC = start.format('YYYY-MM-DD HH:mm');
    const endUTC = end.format('YYYY-MM-DD HH:mm');
    setSelectedDates([startUTC, endUTC]);
  };

  const handleCreateEvent = () => {
    if (selectedDates.length === 2) {
      const newEvent = {
        title: 'Nuevo Evento',
        start: selectedDates[0],
        end: selectedDates[1],
      };

      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    setSelectedDates([]);
  };

  useEffect(() => {
    if (selectedDates.length === 2) {
      handleCreateEvent();
    }
  }, [selectedDates]);

  return (
    <div>
      <h2>{timezone}</h2>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale={esLocale}
        headerToolbar={{
          start: '',
          center: '',
          end: '',
        }}
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          omitZeroMinute: false
        }}
        allDaySlot={false}
        dayHeaderFormat={{weekday: 'short'}}
        editable={true}
        eventDurationEditable={true}
        selectable={true}
        select={handleDateSelect}
        events={events}
        timeZone='UTC'
      />
    </div>
  )

}
export default Calendar;