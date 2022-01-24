import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IAtendimento from '../interfaces/Atendimento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }

  public async cadastrar(dados: IAtendimento): Promise<Observable<any>> {
    return this.http.post('http://localhost:3333/atendimentos', dados);
  }

}
