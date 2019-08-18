export default class AuthService {
  public async login(username: string, password: string) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (username === 'admin' && password === 'password') {
      return {
        token: 'token'
      }
    } else {
      return {
        token: ''
      }
    }
  }
}