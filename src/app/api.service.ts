import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private usuriosvalue = new BehaviorSubject<any[]>([]);

  usuariofinal$ = this.usuriosvalue.asObservable();

  actualizarcliente(Cliente:any[]){
    this.usuriosvalue.next(Cliente);
      localStorage.setItem('clientes',JSON.stringify(Cliente));

  }
  cargarUsuarios(){
    if(typeof localStorage !== 'undefined'){
      const usuarios = localStorage.getItem('clientes');
      if(usuarios){
        this.usuriosvalue.next(JSON.parse(usuarios));
      }
    }
  }
  constructor() {
    this.cargarUsuarios();
   }
}
