import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { UserCalendar } from "@/components/dashboard/UserCalendar";
import FullCalendar from "@fullcalendar/react";
// The import order DOES MATTER here. If you change it, you'll get an error!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid';
import { useRef } from "react";

const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2022-11-07T10:00:00',
    end: '2022-11-07T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2022-11-08T13:00:00',
    end: '2022-11-08T18:00:00',
  },
  { 
    id: 3, 
    title: 'event 3', 
    start: '2022-11-17', 
    backgroundColor: '#fc0320',
    end: '2022-11-20' },
];

export default function Calendar() {
  const calendarRef = useRef(null);

  return (
    <>
      <DashboardLayout current="Calendar">
      <FullCalendar
      innerRef={calendarRef}
      plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
      events={events}
      eventColor="#fb923c"
      headerToolbar={{
        center: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      eventChange={(e) => console.log(e)}
      dateClick={(e) => console.log(e.dateStr)}
      height="auto"
      editable
      selectable
      nowIndicator
    />
      </DashboardLayout>
    </>
  )
}
