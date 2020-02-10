import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-estudio-manual-referencias',
  templateUrl: './estudio-manual-referencias.component.html'
})
export class EstudioManualReferenciasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verFamilias(){
  this.router.navigate(['familias']);
}
agregar(){
  var labelvehiculo1:any = document.getElementById('numerov1'); //variable del label
  var labelvehiculo2:any = document.getElementById('numerov2');//variabe del label
  var labelvehiculo3:any = document.getElementById('numerov3'); //variable del label
  var labelvehiculo4:any = document.getElementById('numerov4');//variabe del label
  var inputvehiculo1:any = (<HTMLInputElement>document.getElementById('nombre')).value;
  var inputvehiculo2:any =  (<HTMLInputElement>document.getElementById('telefono')).value; 
  var inputvehiculo3:any =  (<HTMLInputElement>document.getElementById('ciudad')).value; 
  var inputvehiculo4:any =  (<HTMLInputElement>document.getElementById('departamento')).value; 
  labelvehiculo1 = document.getElementById('numerov1').innerHTML = inputvehiculo1;
  labelvehiculo2 = document.getElementById('numerov2').innerHTML = inputvehiculo2;
  labelvehiculo3 = document.getElementById('numerov3').innerHTML = inputvehiculo3;
  labelvehiculo4 = document.getElementById('numerov4').innerHTML = inputvehiculo4;
  (<HTMLInputElement>document.getElementById('nombre')).value ="";
  (<HTMLInputElement>document.getElementById('telefono')).value ="";
  (<HTMLInputElement>document.getElementById('ciudad')).value ="";
  (<HTMLInputElement>document.getElementById('departamento')).value ="Departamento de residencia de la referencia";
  var icon1 = document.getElementById('iconCargar1');
  var span2 = document.getElementById('span2');
  icon1.style.display="none";
  var marca = document.getElementById('marca');
  var modelo = document.getElementById('modelo');
  if(document.getElementById('span2').style.display='none'){
  span2.style.display="block";
  }
}
verCarga2(){
  var labelvehiculo5:any = document.getElementById('numerov5'); //variable del label
  var labelvehiculo6:any = document.getElementById('numerov6');//variabe del label
  var labelvehiculo7:any = document.getElementById('numerov7'); //variable del label
  var labelvehiculo8:any = document.getElementById('numerov8');//variabe del label
  var inputvehiculo5:any = (<HTMLInputElement>document.getElementById('nombre')).value;
  var inputvehiculo6:any =  (<HTMLInputElement>document.getElementById('telefono')).value; 
  var inputvehiculo7:any =  (<HTMLInputElement>document.getElementById('ciudad')).value; 
  var inputvehiculo8:any =  (<HTMLInputElement>document.getElementById('departamento')).value; 
  labelvehiculo5 = document.getElementById('numerov5').innerHTML = inputvehiculo5;
  labelvehiculo6 = document.getElementById('numerov6').innerHTML = inputvehiculo6;
  labelvehiculo7 = document.getElementById('numerov7').innerHTML = inputvehiculo7;
  labelvehiculo8 = document.getElementById('numerov8').innerHTML = inputvehiculo8;
  (<HTMLInputElement>document.getElementById('nombre')).value ="";
  (<HTMLInputElement>document.getElementById('telefono')).value ="";
  (<HTMLInputElement>document.getElementById('ciudad')).value ="";
  (<HTMLInputElement>document.getElementById('departamento')).value ="Departamento de residencia de la referencia";
  var icon2 = document.getElementById('iconCargar2');
  var span3 = document.getElementById('span3');
  icon2.style.display="none";
  if(document.getElementById('span3').style.display='none'){
    span3.style.display="block";
    }
}

verCarga3(){
  var labelvehiculo9:any = document.getElementById('numerov9'); //variable del label
  var labelvehiculo10:any = document.getElementById('numerov10');//variabe del label
  var labelvehiculo11:any = document.getElementById('numerov11'); //variable del label
  var labelvehiculo12:any = document.getElementById('numerov12');//variabe del label
  var inputvehiculo9:any = (<HTMLInputElement>document.getElementById('nombre')).value;
  var inputvehiculo10:any =  (<HTMLInputElement>document.getElementById('telefono')).value; 
  var inputvehiculo11:any = (<HTMLInputElement>document.getElementById('ciudad')).value;
  var inputvehiculo12:any =  (<HTMLInputElement>document.getElementById('departamento')).value; 
  labelvehiculo9 = document.getElementById('numerov9').innerHTML = inputvehiculo9;
  labelvehiculo10 = document.getElementById('numerov10').innerHTML = inputvehiculo10;
  labelvehiculo11 = document.getElementById('numerov11').innerHTML = inputvehiculo11;
  labelvehiculo12 = document.getElementById('numerov12').innerHTML = inputvehiculo12;
  (<HTMLInputElement>document.getElementById('nombre')).value ="";
  (<HTMLInputElement>document.getElementById('telefono')).value ="";
  (<HTMLInputElement>document.getElementById('ciudad')).value ="";
  (<HTMLInputElement>document.getElementById('departamento')).value ="Departamento de residencia de la referencia";
  var icon3 = document.getElementById('iconCargar3');
  var span4 = document.getElementById('span4');
  icon3.style.display="none";
  if(document.getElementById('span3').style.display='none'){
    span4.style.display="block";
    }
}
verCarga4(){
    var labelvehiculo13:any = document.getElementById('numerov13'); //variable del label
    var labelvehiculo14:any = document.getElementById('numerov14');//variabe del label
    var labelvehiculo15:any = document.getElementById('numerov15'); //variable del label
    var labelvehiculo16:any = document.getElementById('numerov16');//variabe del label
    var inputvehiculo13:any = (<HTMLInputElement>document.getElementById('nombre')).value;
    var inputvehiculo14:any =  (<HTMLInputElement>document.getElementById('telefono')).value;
    var inputvehiculo15:any = (<HTMLInputElement>document.getElementById('ciudad')).value;
    var inputvehiculo16:any =  (<HTMLInputElement>document.getElementById('departamento')).value;  
    labelvehiculo13 = document.getElementById('numerov13').innerHTML = inputvehiculo13;
    labelvehiculo14 = document.getElementById('numerov14').innerHTML = inputvehiculo14;
    labelvehiculo15 = document.getElementById('numerov15').innerHTML = inputvehiculo15;
    labelvehiculo16 = document.getElementById('numerov16').innerHTML = inputvehiculo16;
    (<HTMLInputElement>document.getElementById('nombre')).value ="";
    (<HTMLInputElement>document.getElementById('telefono')).value ="";
    (<HTMLInputElement>document.getElementById('ciudad')).value ="";
    (<HTMLInputElement>document.getElementById('departamento')).value ="Departamento de residencia de la referencia";
    var icon4 = document.getElementById('iconCargar4');
    var span5 = document.getElementById('span5');
    icon4.style.display="none";
    if(document.getElementById('span4').style.display='none'){
        span5.style.display="block";
      }
    } 
}
