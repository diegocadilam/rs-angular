import { Component } from '@angular/core';
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";

@Component({
  selector: 'app-certificados',
  imports: [SecundaryButton, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
