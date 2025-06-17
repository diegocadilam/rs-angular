import { Component, ViewChild } from '@angular/core';
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from "../../interfaces/certificado";
import { CertificadoService } from '../../_services/certificado-service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [FormsModule, SecundaryButton, PrimaryButton, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

  constructor(private certificadoService: CertificadoService, private route: Router){

  }

  @ViewChild('form') form!: NgForm;

  atividade: string = '';
  certificado: Certificado = {
    id: '',
    nome: '',
    atividades: [],
    dataEmissao: ''
  };

  campoInvalido(control: NgModel){
    return control.invalid && control.touched;
  }

  formularioValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
    if(this.atividade.length == 0)
    {
      return;
    }

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

    this.certificado.id = uuidv4();
    this.certificado.dataEmissao = this.dataAtual();

    this.certificadoService.adicionarCertificado(this.certificado);

    this.route.navigate(['certificados', this.certificado.id]);

    // this.certificado = this.estadoInicialCertificado();
    // this.form.resetForm();
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;

    return dataFormatada;
  }

  estadoInicialCertificado(): Certificado {
    return {
      id: '',
      nome: '',
      atividades: [],
      dataEmissao: ''
    }
  }
}
