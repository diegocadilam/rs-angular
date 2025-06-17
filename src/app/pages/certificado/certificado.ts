import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado-service';
import { Certificado } from "../../interfaces/certificado";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [RouterLink, SecundaryButton],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class CertificadoPage implements OnInit {

  id: string | null = null;
  certificado: Certificado | undefined;
  certificados: Certificado[] = [];

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(item => item.id == this.id);
    })

    console.log('certificado', this.certificado!)
  }

  downloadCertificado(){
    if(this.certificado == undefined){
      return;
    }
    html2canvas(this.certificadoElement.nativeElement, {scale: 2}).then(
      canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('img/png');
        link.download = 'certificado_' + this.certificado?.nome.replaceAll(' ', '_') + ' .png';
        link.click();
      }
    )
  }
}
