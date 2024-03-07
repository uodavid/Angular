import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  
  contactForm!: FormGroup;
  
  constructor(private fb: FormBuilder){
    
    //formulario sin validaciones

    // this.contactForm = new FormGroup({
    //   nombres: new FormControl(''),
    //   apellidos : new FormControl(''),
    //   correo: new FormControl(''),
    //   telefono: new FormControl('')
    // })   


  }
//formulario con validaciones avanzado
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required]
    })
  }

  handleSubmit(){
    console.log("Is Valid?", this.contactForm.valid)
    console.log("Mostrando form", this.contactForm)
    console.log("Mostrando values",this.contactForm?.value)
    console.log("Mostrando nombres",this.contactForm?.value.nombres)
    console.log("Mostrando apellidos",this.contactForm?.value.apellidos)
    console.log("Mostrando correo",this.contactForm?.value.correo)
    console.log("Mostrando telefono",this.contactForm?.value.telefono)
  }

}
