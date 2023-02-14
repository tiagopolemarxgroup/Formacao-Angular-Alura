import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento ={
    id: '1',
    conteudo:'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo3'
  }



  ngOnInit(): void{

  }

  criarPensamento(): void{
    alert("Pensamento criado")
  }

  cancelar(){
    alert("Pensamento Cancelado")
  }


}
