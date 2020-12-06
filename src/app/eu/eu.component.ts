import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  /* <-- Ejercicio crear un url   */

  Nome:string= "Mario Samuel Penaranda Q.";
  Idade:number= 30;
  Gosto:string="de comer cocholate, gosto de pintar e disenhar,eu gosto de compatir com amigos Medfund  de ayudar os mininos/as de bajos recusros economicos  (mejor es dar que resever)";
  Nacionalidade:string="Bolivia";
  moro:string="no Brasil, Rio de Janeiro bairro da Ilha do Governador" ;
  

  /* 
  getValor(): number {
    return 1;
  }
   */
  /* --> Ejercicio crear un url   */


  constructor() { }

  ngOnInit(): void {
  }

}
