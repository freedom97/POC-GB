import { Component, Directive } from "@angular/core";
import { Router } from "@angular/router";
import { AutenticacionService } from "../../servicios/autentication.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `
  ]
})
export class HomeComponent {
  constructor(private auth: AutenticacionService, private router: Router) {
    this.auth.getToken();
  }
  verFamilias() {
    this.router.navigate(["familias"]);
  }
  validarIngreso() {
    var usuario: any = (<HTMLInputElement>document.getElementById("usuario"))
      .value;
    var password = (<HTMLInputElement>document.getElementById("password"))
      .value;
    // var miembro;

    if (usuario == "jfnanez" && password == "jfnanez1") {
      alert("Bienvenido " + usuario);
      this.router.navigate(["/familias"]);
    } else {
      if (usuario == "catemolina" && password == "catemolina2") {
        alert("Bienvenida " + usuario);
        this.router.navigate(["/familias"]);
      } else {
        if (usuario == "pausanchez" && password == "pausanchez3") {
          alert("Bienvenida " + usuario);
          this.router.navigate(["/familias"]);
        } else {
          if (usuario == "caromonroy" && password == "caromonroy5") {
            alert("Bienvenida " + usuario);
            this.router.navigate(["/familias"]);
          } else {
            if (usuario == "solgiraldo" && password == "solgiraldo6") {
              alert("Bienvenida " + usuario);
              this.router.navigate(["/familias"]);
            } else {
              if (usuario == "julianarcila" && password == "julianarcila7") {
                alert("Bienvenido " + usuario);
                this.router.navigate(["/familias"]);
              } else {
                if (usuario == "saracard" && password == "saracard9") {
                  alert("Bienvenida " + usuario);
                  this.router.navigate(["/familias"]);
                } else {
                  if (usuario == "yfino" && password == "yfino10") {
                    alert("Bienvenida " + usuario);
                    this.router.navigate(["familias"]);
                  } else {
                    if (usuario == "dir_oba" && password == "123456789") {
                      alert("Bienvenido " + usuario);
                      this.router.navigate(["/familias"]);
                    } else {
                      if (usuario == "pgomezz" && password == "pgomezz4") {
                        alert("Bienvenido " + usuario);
                        this.router.navigate(["/familias"]);
                      } else {
                        if (usuario == "cmfm" && password == "cmfm") {
                          alert("Bienvenido " + usuario);
                          this.router.navigate(["/familias"]);
                        } else {
                          alert("¡Verifique los datos!");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
