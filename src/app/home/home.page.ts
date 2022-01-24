import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ) {}

  public ngOnInit(): void {
    this.iniciarFormulario();
  }

  public cadastrarAgendamento(): void {
    console.log(this.formAgendamento.value.data);
  }

  private iniciarFormulario(): void {
    this.formAgendamento = this.formBuilder.group({
      cliente: ['', Validators.required],
      pet: [''],
      servico: ['', Validators.required],
      data: ['', Validators.required],
      status: ['', Validators.required],
      observacao: ['']
    });
  }



}
