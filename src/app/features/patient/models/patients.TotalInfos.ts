export interface PatientsTotalInfos{
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  birthDate: Date;
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
