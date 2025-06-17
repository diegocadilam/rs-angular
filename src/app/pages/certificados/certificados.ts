import { Component, OnInit } from '@angular/core';

import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado-service';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecundaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit{
  certificados: Certificado[] = [];
  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.certificados = this.certificadoService.certificados;

      console.log('aqui', this.certificados)
  }
}
