import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {
  tabuadaForm = this.formBuilder.group({
    numero: 0
  });

  tabuada = '';

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    for(var i = 0;i<10;i++){
      var numeroAtual = this.tabuadaForm.value.numero;
      var resultado = numeroAtual * i;
      this.tabuada += `${i} x ${numeroAtual} = ${resultado} <br>`
    }
  }

  ngOnInit(): void {
  }

}
