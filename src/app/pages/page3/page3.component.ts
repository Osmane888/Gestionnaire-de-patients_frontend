import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

// Plugins FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    selectable: true,
    editable: true,
    events: [],
    eventClick: this.handleEventClick.bind(this),

    // **Ajout des tranches horaires**
    slotMinTime: '09:00:00', // Heure de début
    slotMaxTime: '19:00:00', // Heure de fin
    allDaySlot: false,      // Supprimer l'affichage "Toute la journée"
  };


  newEvent = {
    title: '',
    date: '',
    startTime: '',
    endTime: ''
  };

  eventToDelete: any = null;
  showModal: boolean = false;

  // Ajouter un événement
  addEvent() {
    if (this.newEvent.title && this.newEvent.date && this.newEvent.startTime && this.newEvent.endTime) {
      const newCalendarEvent = {
        id: Math.random().toString(),
        title: this.newEvent.title,
        start: `${this.newEvent.date}T${this.newEvent.startTime}`,
        end: `${this.newEvent.date}T${this.newEvent.endTime}`
      };

      this.calendarOptions.events = [
        ...(this.calendarOptions.events as any[]),
        newCalendarEvent
      ];

      this.newEvent = { title: '', date: '', startTime: '', endTime: '' };
    }
  }

  // Ouvre le modal de confirmation
  handleEventClick(clickInfo: any) {
    this.eventToDelete = clickInfo.event;
    this.showModal = true;
  }

  // Supprimer l'événement après confirmation
  confirmDelete() {
    if (this.eventToDelete) {
      this.eventToDelete.remove();
    }
    this.closeModal();
  }

  // Annuler la suppression
  cancelDelete() {
    this.closeModal();
  }

  // Fermer le modal
  closeModal() {
    this.showModal = false;
    this.eventToDelete = null;
  }
}
