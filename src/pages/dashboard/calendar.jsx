import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import FullCalendar from "@fullcalendar/react";
// The import order DOES MATTER here. If you change it, you'll get an error!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid';
import { useRef } from "react";

const events = [
  {
    id: 1,
    title: 'Salle 1',
    start: '2023-03-01T10:00:00',
    end: '2023-03-01T12:00:00',
  },
  {
    id: 2,
    title: 'salle 2',
    start: '2023-02-28T13:00:00',
    end: '2022-02-28T18:00:00',
  },
  {
    id: 3,
    title: 'event 3',
    start: '2023-03-02',
    backgroundColor: '#fc0320',
    end: '2023-03-11' },
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
