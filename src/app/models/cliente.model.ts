interface ClienteInterface {
  id: string;
  email: string;
  nome: string;
  endereco: string;
  phone: string;
}

export class Cliente implements ClienteInterface {
  public id: string;
  public email: string;
  public nome: string;
  public endereco: string;
  public phone: string;

  constructor({
    id,
    email,
    nome,
    endereco,
    phone
  }: {
    id?: string;
    email?: string;
    nome?: string;
    endereco?: string;
    phone?: string;
  }) {
    this.id = id;
    this.email = email;
    this.nome = nome;
    this.endereco = endereco;
    this.phone = phone;
  }
}
