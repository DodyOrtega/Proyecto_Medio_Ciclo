import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-form-p',
    templateUrl: './form-p.component.html',
    styleUrls: ['./form-p.component.css']
})
export class FormPComponent {
    Clientes: any[] = [];
    usuario1: FormGroup;

    constructor(private router: Router, private apiservicios: ApiService, private fb: FormBuilder) {
        this.usuario1 = this.fb.group({
            nombre: ['', Validators.required],
            correo: ['', Validators.required],
            numero: ['', Validators.required],
            concierto: ['', Validators.required],
            entradas: ['', Validators.required],
            fecha: ['', Validators.required]
        });

        this.apiservicios.usuariofinal$.subscribe(Clientes => {
            this.Clientes = Clientes;
        });
    }

    guardar() {
        if (this.usuario1.valid) {
            const nuevoCliente = {
                nombre: this.usuario1.get('nombre')?.value,
                correo: this.usuario1.get('correo')?.value,
                numero: this.usuario1.get('numero')?.value,
                concierto: this.usuario1.get('concierto')?.value,
                entradas: this.usuario1.get('entradas')?.value,
                fecha: this.usuario1.get('fecha')?.value
            };
            this.Clientes.push(nuevoCliente);
            this.apiservicios.actualizarcliente(this.Clientes);
            this.usuario1.reset();
            this.router.navigate(['boleto']); // Cambia la ruta si es necesario
        } else {
            alert('Todos los campos son obligatorios y deben ser válidos');
        }
    }

    Clickone(Ruta: string) {
        this.router.navigate([Ruta]);
    }
}
