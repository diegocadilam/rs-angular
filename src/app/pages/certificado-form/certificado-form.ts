import { Component } from '@angular/core';
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [FormsModule, SecundaryButton, PrimaryButton, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['React', 'Angular', 'Java'];

  campoInvalido(control: NgModel){
    return control.invalid && control.touched;
  }

  formularioValido() {
    return this.atividades.length > 0 && this.nome.length > 0;
  }
}
