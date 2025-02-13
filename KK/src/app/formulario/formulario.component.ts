import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
 selector: 'app-formulario',
 templateUrl: './formulario.component.html',
 imports: [CommonModule,IonicModule],
 styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {


 constructor() { }


 ngOnInit() {}


 events: {
   id: number;
   Name: string;
   Year: string;
   Productor: string;
   Casa: string;
   Prota: string;
 }[] = [];


 addEvent(Name: string, Year: string, Productor: string, Casa: string, Prota: string) {
   if(Name.trim()&& Year.trim() && Productor.trim() && Casa.trim() && Prota.trim() ){
     const newEvent = {
       id: this.events.length + 1,
       Name,
       Year,
       Productor,
       Casa,
       Prota,
    
     };
     this.events.push(newEvent);


   }
  
 }


}


