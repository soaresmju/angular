import { Component, OnInit } from '@angular/core';
import { SomarService } from '../../service';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {

  constructor(private somarService: SomarService) { }
  private valor: number;

  ngOnInit() {
  this.valor = 0;
  }

    calcula(valorRecebido:number){
      this.valor = this.somarService.somar(this.valor, valorRecebido);
    }

    get pegaValor(){
      return this.valor;
    }

}
