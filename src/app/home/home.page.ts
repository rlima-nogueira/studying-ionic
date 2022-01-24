import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IAtendimento from '../interfaces/Atendimento';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public formAgendamento: FormGroup;
  public dataPreenchida: Date;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
  ) {}

  public ngOnInit(): void {
    this.iniciarFormulario();
  }

  public async cadastrarAgendamento(): Promise<void> {
    const agendamento: IAtendimento = {
      cliente: this.formAgendamento.value.cliente,
      pet: this.formAgendamento.value.pet,
      servico: this.formAgendamento.value.servico,
      data: this.formAgendamento.value.data,
      status: this.formAgendamento.value.status,
      observacoes: this.formAgendamento.value.observacao
    };

    (await this.homeService.cadastrar(agendamento)).subscribe((teste) => {
      console.log(teste);
    });
  }

  private iniciarFormulario(): void {
    this.formAgendamento = this.formBuilder.group({
      cliente: ['', Validators.required],
      pet: [''],
      servico: ['', Validators.required],
      data: ['', Validators.required],
      dataEditada: [''],
      status: ['', Validators.required],
      observacao: ['']
    });
  }



}
