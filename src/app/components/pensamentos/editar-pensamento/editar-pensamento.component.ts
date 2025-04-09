import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { lowerCaseValidator } from '../validators/lowerCaseValidator';

@Component({
  selector: 'app-editar-pensamento',
  standalone: false,
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {
  formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")

    this.formulario = this.formBuilder.group({
      id: [null],
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        lowerCaseValidator
      ])],
      modelo: ['modelo1'],
      favorito: [false]
    })

    this.service.buscar(parseInt(id!)).subscribe((pensamento) => {
      this.formulario.setValue(pensamento)
    })
  }

  editarPensamento() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listar-pensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento'])
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}
