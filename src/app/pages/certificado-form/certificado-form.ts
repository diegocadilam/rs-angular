import { Component } from '@angular/core';
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from "../../interfaces/certificado";

@Component({
  selector: 'app-certificado-form',
  imports: [FormsModule, SecundaryButton, PrimaryButton, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  atividade: string = '';

  certificado: Certificado = {
    nome: '',
    atividades: []
  };

  campoInvalido(control: NgModel){
    return control.invalid && control.touched;
  }

  formularioValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number){
    this.certificado.atividades.splice(index);
  }

  submit() {
    if(!this.formularioValido())
    {
      return;
    }
  }
}
