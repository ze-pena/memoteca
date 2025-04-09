import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  standalone: false,
  templateUrl: './botao-carregar-mais.component.html',
  styleUrl: './botao-carregar-mais.component.css'
})
export class BotaoCarregarMaisComponent {
  @Input() haMaisPensamentos: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
