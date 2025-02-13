import { Component } from '@angular/core';
import { ExamenService } from '../examen.service';


@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
 standalone: false,
})
export class HomePage {


 constructor(private servicio: ExamenService) {}


 quote: any;


 ngOnInit(){
   this.servicio.try().subscribe((data)=>{this.quote=data});


 }


}






