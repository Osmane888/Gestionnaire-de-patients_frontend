export interface UserTokenDTO{
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  }
}
