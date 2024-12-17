import {Component, OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

// Plugins FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {ConsultationService} from '../../features/calendar/services/ConsultationService';
import {ConsultationForm} from '../../features/calendar/forms/ConsultationForm';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
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
    slotMinTime: '09:00:00',
    slotMaxTime: '19:00:00',
    allDaySlot: false,
  };

  newEvent: ConsultationForm = {
    patientid: '',
    dateRdv: '',
    hourRdv: '',
    durationRdv: '',
    statusRdv: '',
    rdvType: ''
  };

  eventToDelete: any = null;
  showModal: boolean = false;

  constructor(private consultationService: ConsultationService) {}

  ngOnInit(): void {
    this.loadConsultations();
  }

  loadConsultations(): void {
    this.consultationService.getAllConsultations().subscribe(consultations => {
      this.calendarOptions.events = consultations.map(consultation => ({
        id: consultation.id,
        title: consultation.rdvType,
        start: `${consultation.dateRdv}T${consultation.hourRdv}`,
        end: `${consultation.dateRdv}T${consultation.durationRdv}`
      }));
    });
  }

  addEvent(): void {
    if (this.newEvent.patientid && this.newEvent.dateRdv && this.newEvent.hourRdv && this.newEvent.durationRdv && this.newEvent.statusRdv && this.newEvent.rdvType) {
      this.consultationService.createConsultation(this.newEvent).subscribe(consultation => {
        this.calendarOptions.events = [
          ...(this.calendarOptions.events as any[]),
          {
            id: consultation.id,
            title: consultation.rdvType,
            start: `${consultation.dateRdv}T${consultation.hourRdv}`,
            end: `${consultation.dateRdv}T${consultation.durationRdv}`
          }
        ];
        this.newEvent = { patientid: '', dateRdv: '', hourRdv: '', durationRdv: '', statusRdv: '', rdvType: '' };
      });
    }
  }

  handleEventClick(clickInfo: any): void {
    this.eventToDelete = clickInfo.event;
    this.showModal = true;
  }

  confirmDelete(): void {
    if (this.eventToDelete) {
      this.consultationService.deleteConsultation(this.eventToDelete.id).subscribe(() => {
        this.eventToDelete.remove();
        this.closeModal();
      });
    }
  }

  cancelDelete(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.showModal = false;
    this.eventToDelete = null;
  }
}
