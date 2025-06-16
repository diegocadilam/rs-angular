import { Component } from '@angular/core';

import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [RouterLink, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
