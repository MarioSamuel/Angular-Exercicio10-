import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  /* <-- Practica  crear un url   */

    url: string = 'https://totidiversidade.com.br/';
    urlImagem: string = 'https://picsum.photos/400';
    nome_curso: string = 'Introduçao e Angular';
    
    getValor(): number {
      return 1;
    }


   /* Practica  crear un url  --> */

  constructor() { }

  ngOnInit(): void {
  }

}
