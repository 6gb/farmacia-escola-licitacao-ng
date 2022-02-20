export class Usuario {
  constructor(
    public nome: string,
    public senha: string,
    public permissao: string,
    public token: string
  ) {
  }
}
