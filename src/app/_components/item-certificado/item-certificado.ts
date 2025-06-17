import { Component, Input } from '@angular/core';
import { SecundaryButton } from "../secundary-button/secundary-button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';
  @Input() id: string = '';

  constructor(private router: Router){

  }

  redirecionaCertificado() {
    //this.router.navigateByUrl("/certificados/2");
    this.router.navigate(['/certificados', this.id]);
  }
}
