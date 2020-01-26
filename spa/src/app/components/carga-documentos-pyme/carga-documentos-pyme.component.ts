import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/core/src/render3/util';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
function readBase64(file): Promise<any> {
  var reader  = new FileReader();
  var future = new Promise((resolve, reject) => {
    reader.addEventListener("load", function () {
      resolve(reader.result);
    }, false);

    reader.addEventListener("error", function (event) {
      reject(event);
    }, false);

    reader.readAsDataURL(file);
  });
  return future;
}
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';



@Component({
  selector: 'app-carga-documentos-pyme',
  templateUrl: './carga-documentos-pyme.component.html'
})
export class CargaDocumentosPymeComponent {

  
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }


  verEnvioDocumentosPyme() {
    this.router.navigate(['/envio-documentos-pyme']);
  }
  verFamiliaAgregacion() {
    this.router.navigate(['familia-agregacion']);
  }
  verCargaDocumentosPyme() {
    this.router.navigate(['/carga-documentos-pyme']);
  }


  public uploader:FileUploader = new FileUploader({
    url: URL, 
    disableMultipart:true
    });

  fileObject: any;
  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];

    console.log(file);

    readBase64(file)
      .then(function(data) {
      
    })

  }

}
  