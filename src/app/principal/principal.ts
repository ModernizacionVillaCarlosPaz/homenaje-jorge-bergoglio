import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  imports: [],
  templateUrl: './principal.html',
  styleUrl: './principal.scss',
})
export class Principal {
  downloadPdf() {
    window.open('pdf.pdf', '_blank');
  }
}
