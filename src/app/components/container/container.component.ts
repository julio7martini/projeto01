import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  titulo:string = "Cidades do sul";
  descricao:string = "Cidades do Sul do Brasil boas para turistar :"

}
