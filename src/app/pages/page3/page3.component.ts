import { Component, ViewChild } from '@angular/core';
import {CalendarModalComponent} from '../../modal/calendar-modal/calendar-modal.component';
// Mets ici le bon chemin

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component {
  @ViewChild('calendarModal') calendarModal!: CalendarModalComponent;

  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
  timeSlots = [
    '09:00 am', '10:00 am', '11:00 am', '12:00 pm',
    '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm'
  ];
  calendarCells = Array(this.days.length * this.timeSlots.length).fill(null);
  appointments: ({ patientName: string; index: number } | undefined)[] = [];

  openModal(): void {
    this.calendarModal.openModal(); // Appelle directement la méthode du composant modal
  }

  addAppointment(appointment: { patientName: string; index: number }): void {
    this.appointments[appointment.index] = appointment;
  }

  deleteAppointment(index: number, event: Event): void {
    event.stopPropagation();
    this.appointments[index] = undefined;
  }

  editCell(index: number): void {
    console.log(`Cell clicked at index: ${index}`);
  }
}
