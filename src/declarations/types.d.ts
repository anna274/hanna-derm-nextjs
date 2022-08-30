export interface IService {
  id: string | number;
  name: string;
  image: string;
  description: string;
}

export interface IDoctor {
  id: string | number;
  name: string;
  surname: string;
  image: string;
  specialization: string;
}

export interface IUser {
  email: string;
  role: string;
}
