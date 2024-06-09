import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.css']   
})
export class BoletoComponent implements OnInit {
  usuario1: any[] = [];
  constructor(private apiservicios: ApiService, private router: Router) {}
  ngOnInit() {
    this.apiservicios.usuariofinal$.subscribe(usuario_service => {
      this.usuario1 = usuario_service;
    });
  }
  Clickone(Ruta: string) {
    this.router.navigate([Ruta]);
  }
}
