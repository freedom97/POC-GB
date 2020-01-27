import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-estudio-final-economicos',
  templateUrl: './estudio-final-economicos.component.html'
})
export class EstudioFinalEconomicosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verEstudioFinalFinancieros(){
  this.router.navigate(['estudio-final-financieros']);
}
agregar(){
  var labelvehiculo1:any = document.getElementById('numerov1'); //variable del label
  var labelvehiculo2:any = document.getElementById('numerov2');//variabe del label
  var inputvehiculo1:any = (<HTMLInputElement>document.getElementById('numerovehiculo')).value;
  var inputvehiculo2:any =  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value; 
  labelvehiculo1 = document.getElementById('numerov1').innerHTML = inputvehiculo1;
  labelvehiculo2 = document.getElementById('numerov2').innerHTML = inputvehiculo2;
  (<HTMLInputElement>document.getElementById('numerovehiculo')).value ="";
  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value ="";
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
  var labelvehiculo1:any = document.getElementById('numerov3'); //variable del label
  var labelvehiculo2:any = document.getElementById('numerov4');//variabe del label
  var inputvehiculo1:any = (<HTMLInputElement>document.getElementById('numerovehiculo')).value;
  var inputvehiculo2:any =  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value; 
  labelvehiculo1 = document.getElementById('numerov3').innerHTML = inputvehiculo1;
  labelvehiculo2 = document.getElementById('numerov4').innerHTML = inputvehiculo2;
  (<HTMLInputElement>document.getElementById('numerovehiculo')).value ="";
  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value ="";
  var icon2 = document.getElementById('iconCargar2');
  var span3 = document.getElementById('span3');
  icon2.style.display="none";
  if(document.getElementById('span3').style.display='none'){
    span3.style.display="block";
    }
}

verCarga3(){
  var labelvehiculo1:any = document.getElementById('numerov5'); //variable del label
  var labelvehiculo2:any = document.getElementById('numerov6');//variabe del label
  var inputvehiculo1:any = (<HTMLInputElement>document.getElementById('numerovehiculo')).value;
  var inputvehiculo2:any =  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value; 
  labelvehiculo1 = document.getElementById('numerov5').innerHTML = inputvehiculo1;
  labelvehiculo2 = document.getElementById('numerov6').innerHTML = inputvehiculo2;
  (<HTMLInputElement>document.getElementById('numerovehiculo')).value ="";
  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value ="";
  var icon3 = document.getElementById('iconCargar3');
  var span4 = document.getElementById('span4');
  icon3.style.display="none";
  if(document.getElementById('span3').style.display='none'){
    span4.style.display="block";
    }


}
verCarga4(){
  var labelvehiculo1:any = document.getElementById('numerov7'); //variable del label
  var labelvehiculo2:any = document.getElementById('numerov8');//variabe del label
  var inputvehiculo1:any = (<HTMLInputElement>document.getElementById('numerovehiculo')).value;
  var inputvehiculo2:any =  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value; 
  labelvehiculo1 = document.getElementById('numerov7').innerHTML = inputvehiculo1;
  labelvehiculo2 = document.getElementById('numerov8').innerHTML = inputvehiculo2;
  (<HTMLInputElement>document.getElementById('numerovehiculo')).value ="";
  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value ="";
  var icon4 = document.getElementById('iconCargar4');
  var span5 = document.getElementById('span5');
  icon4.style.display="none";
  if(document.getElementById('span4').style.display='none'){
    span5.style.display="block";
    }
} 
verCarga5(){
  var labelvehiculo1:any = document.getElementById('numerov9'); //variable del label
  var labelvehiculo2:any = document.getElementById('numerov10');//variabe del label
  var inputvehiculo1:any = (<HTMLInputElement>document.getElementById('numerovehiculo')).value;
  var inputvehiculo2:any =  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value; 
  labelvehiculo1 = document.getElementById('numerov9').innerHTML = inputvehiculo1;
  labelvehiculo2 = document.getElementById('numerov10').innerHTML = inputvehiculo2;
  (<HTMLInputElement>document.getElementById('numerovehiculo')).value ="";
  (<HTMLInputElement>document.getElementById('numerovehiculo2')).value ="";
  var icon5 = document.getElementById('iconCargar5');
  icon5.style.display="none";
  if(document.getElementById('span5').style.display='none'){
    
    }





}
}
