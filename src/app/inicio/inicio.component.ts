import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  Clientes: any[] = []
 
  constructor(private router: Router, private apiservicios:ApiService, private fb:FormBuilder){
    
    

   
    
    
  }

 

  Clickone(Ruta:string){
    this.router.navigate([Ruta]);
  }

}
