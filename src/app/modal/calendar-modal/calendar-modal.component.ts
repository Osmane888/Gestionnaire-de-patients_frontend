import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrl: './calendar-modal.component.scss'
})
export class CalendarModalComponent {
  isOpen = false;
  @Output() appointmentAdded = new EventEmitter<{ patientName: string; index: number }>();

  patientName = '';
  selectedDay = '';
  selectedTime = '';

  openModal(): void {
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
  }

  addAppointment(): void {
    const index = this.calculateIndex(this.selectedDay, this.selectedTime);
    this.appointmentAdded.emit({ patientName: this.patientName, index });
    this.closeModal();
  }

  private calculateIndex(day: string, time: string): number {
    const dayIndex = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].indexOf(day);
    const timeIndex = ['09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm'].indexOf(time);
    return dayIndex * 9 + timeIndex;
  }
}
