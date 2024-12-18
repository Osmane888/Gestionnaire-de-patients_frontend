export interface ConsultationForm {
  patientid: string;        // UUID du patient
  dateRdv: string;          // Date de RDV (format ISO)
  hourRdv: string;          // Heure de RDV (format HH:MM)
  durationRdv: string;      // Durée du RDV
  statusRdv: string;        // Statut du RDV
  rdvType: string;          // Type de rendez-vous
}
