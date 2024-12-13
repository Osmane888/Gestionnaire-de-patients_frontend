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
  selectedDay = 'Lundi'; // Par défaut
  selectedTime = '09:00 am'; // Par défaut


  openModal(): void {
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
  }

  addAppointment(): void {
    const index = this.calculateIndex(this.selectedDay, this.selectedTime);
    if (index === -1) {
      alert('Veuillez sélectionner un jour et une heure valides.');
      return;
    }
    this.appointmentAdded.emit({ patientName: this.patientName, index });
    this.closeModal();
  }


  private calculateIndex(day: string, time: string): number {
    const dayIndex = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].indexOf(day);
    const timeIndex = [
      '09:00 am', '10:00 am', '11:00 am', '12:00 pm',
      '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm'
    ].indexOf(time);

    if (dayIndex === -1 || timeIndex === -1) {
      console.error('Invalid day or time selected:', { day, time });
      return -1; // Retourne un index invalide pour éviter les erreurs
    }

    return dayIndex * 9 + timeIndex;
  }

}
