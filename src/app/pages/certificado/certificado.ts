import { Component } from '@angular/core';
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [RouterLink, SecundaryButton],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado {}
