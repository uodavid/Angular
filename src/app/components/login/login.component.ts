import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public correo:string = "";
  public clave: string = "";

  constructor(private _loginService: LoginService){

  }

  handleSubmit(){

    const payload = {
      correo: this.correo,
      clave: this.clave
    }

    this._loginService.methodPost(payload).subscribe({
      next: (response: any)=>{
        console.log("Mostrando la respuesta", response)
        localStorage.setItem('token', JSON.stringify(response))
      },
      error: (error: any)=>{
        console.log("Mostrando error", error)
      },
      complete: ()=>{
        console.log("Se completó la suscripción")
      }
    })

  }

}
