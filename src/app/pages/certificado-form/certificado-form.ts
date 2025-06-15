import { Component } from '@angular/core';
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButton, PrimaryButton],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

}
