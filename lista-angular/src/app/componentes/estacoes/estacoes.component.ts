import { Component, OnInit } from '@angular/core';

import { FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-estacoes',
  templateUrl: './estacoes.component.html',
  styleUrls: ['./estacoes.component.css']
})
export class EstacoesComponent implements OnInit {

  estacoesForm = this.formBuilder.group({
    mes: 0
  });

  estacao = '';

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    var mes = this.estacoesForm.value.mes
    if(mes != null)
    this.estacao = mes?.toString()
    {
      if(mes == 1 || mes == 2 || mes == 12){
        this.estacao = "Você está no Inverno"
      } else if (mes == 3 || mes == 4 || mes == 5){
        this.estacao = "Você está na Primavera"
      }else if (mes == 6 || mes == 7 || mes == 8){
        this.estacao = "Você está no Verão"
      } else if (mes == 9 || mes == 10 || mes == 1){
        this.estacao = "Você está no Outono"
      } else {
        this.estacao = "Você inseriu um mês invalido"
      }
    }
  }
  ngOnInit(): void {
  }

}
