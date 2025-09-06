import id from '@angular/common/locales/id';

export class Endereco {
  constructor(
    public id?: number,
    public rua?: string,
    public numero?: number,
    public complemento?: string,
    public bairro?: string,
    public cep?: string,
    public cidade?: string,
    public estado?: string
  ) {}
}
