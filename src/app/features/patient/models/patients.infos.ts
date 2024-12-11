export interface Patient {
  infos: [
    {
      id: string,
      lastname: string,
      firstname: string,
      email?: string,
      phoneNumber?: string
    }
  ]
}

