export interface RegisterForm{
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  licenseNumber: string;
  specialization: string;
  role: string;
  password: string;
}

// Il faut une liste dropdown pour la sélection du rôle où chaque nom correspond exactement aux énumérations du back
