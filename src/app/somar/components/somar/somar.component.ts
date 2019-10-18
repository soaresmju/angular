import { Component, OnInit } from '@angular/core';
import { SomarService } from '../../service';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {

  constructor(private somarService: SomarService) { }
  private valor: number;
  private lanche: number;
  private bebida: number;
  private doce: number;

  ngOnInit() {
    this.valor = 0;
    this.lanche = 0;
    this.bebida = 0;
    this.doce = 0;
  }

    calcula(valorRecebido:number, visorMostra:number){
      this.valor = this.somarService.somar(this.valor, valorRecebido);
      if(visorMostra==1){
        this.lanche = this.lanche + 1;
      }
      if(visorMostra==2){
        this.bebida = this.bebida + 1;
      }
      if(visorMostra==3){
        this.doce = this.doce + 1;
      }
    }

    get pegaValor(){
      return this.valor;
    }

    get visorLanche(){
      return this.lanche;
    }

    get visorBebida(){
      return this.bebida;
    }

    get visorDoce(){
      return this.doce;
    }
}
