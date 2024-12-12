export interface PatientsTotalInfos{
  id: string;
  lastname: string;
  firstname: string;
  email?: string;
  phoneNumber?: string;
  birthdate: Date;
  mutuelle?: string;
  info_supplement?: string;
  address: Address
}

export interface Address{
  street: string;
  city: string;
  streetNumber: string;
  zipCode: string;
}
