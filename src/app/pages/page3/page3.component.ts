import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from '@fullcalendar/core';
import {ConsultationService} from '../../features/calendar/services/ConsultationService';
import {ConsultationForm} from '../../features/calendar/forms/ConsultationForm';

// Plugins FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {BasicInfosPatient} from '../../features/patient/models/patients.BasicInfos';
import {PatientService} from '../../features/patient/services/patientService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutoCompleteCompleteEvent} from 'primeng/autocomplete';
import {environment} from '../../shared/environment/environment';

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


  newEvent!: FormGroup;

  eventToDelete: any = null;
  showModal: boolean = false;
  patients?: BasicInfosPatient[];
  filteredPatients?: BasicInfosPatient[];

  constructor(
    private consultationService: ConsultationService,
    private patientService: PatientService,
    private fb: FormBuilder
  ) {
    this.newEvent = this.fb.group({
      patientid: [null,[Validators.required]],
      dateRdv: [null,[Validators.required]],
      hourRdv: [null,[Validators.required]],
      durationRdv: [null,[Validators.required]],
      statusRdv: [null,[]],
      rdvType: [null,[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.loadConsultations();
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getAllPatients(environment.apiUrl + '/patients').subscribe({
      next: value => {
        this.patients = value;
        this.filteredPatients = this.patients;
      }
    })
  }

  loadConsultations(): void {
    this.consultationService.getAllConsultations().subscribe(consultations => {
      console.log('Consultations loaded:', consultations); // Vérification des données récupérées
      this.calendarOptions.events = consultations.map(consultation => ({
        id: consultation.id,
        title: consultation.rdvType,
        start: `${consultation.dateRdv}T${consultation.hourRdv}`,
        end: `${consultation.dateRdv}T${consultation.durationRdv}`
      }));
    });
  }

  addEvent(): void {
    console.log(this.newEvent.value)
    if(this.newEvent.invalid){

      console.log('Non valid');
      return;
    }
    this.consultationService.createConsultation(this.newEvent.value).subscribe(
      consultation => {
        this.calendarOptions.events = [
          ...(this.calendarOptions.events as any[]),
          {
            id: consultation.id,
            title: consultation.rdvType,
            start: `${consultation.dateRdv}T${consultation.hourRdv}`,
            end: `${consultation.dateRdv}T${consultation.durationRdv}`
          }
        ];
        this.newEvent.reset();
      }
    );
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

  filterPatients(event: AutoCompleteCompleteEvent) {

    let query = event.query.toLowerCase();

    this.filteredPatients = this.patients?.filter(p => p.fullname.toLowerCase().includes(query));
  }

  cancelDelete(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.showModal = false;
    this.eventToDelete = null;
  }
}
