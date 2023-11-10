// @ts-nocheck
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {message} from "../../shared/utils/message";
import {Message} from "../../interfaces/Message.interface";
import {Swal} from 'sweetalert2';
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  protected readonly message: Message = message;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
  }

  registerForm: FormGroup = this.fb.group({
    role: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  toogleRole(role: 'dev' | 'client') {
    this.registerForm.get('role')?.setValue(role);
  }

  register() {
    if (this.registerForm.valid) {
      let payload = this.registerForm.value;

      this.registerService.saveUser(payload).subscribe((reponse) => {
        Swal.fire({
          title: 'Bom Trabalho!',
          text: 'Cadastrado com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.setItem('userName', response.fullName);
            localStorage.setItem('role', response.role === 'dev' ? 'Desenvolvedor' : 'Cliente');
            localStorage.setItem('idClient', response.id);

            window.location.href = 'list.html';
          }
        })
      }, (error) => {
        console.log(error);
      })
    } else {
      this.registerForm.markAllAsTouched();
    }

    /*

    //calling api

    fetch("https://localhost:7282/api/users", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'accept': '*!/!*',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => response.json())
      .then(response => {

      .catch(error => {
        throw new Error(error)
      })
*/
  }

  isValid(inputName: string, validatorName: string): boolean {
    const formControl: any = this.registerForm.get(inputName);
    if (formControl.errors !== null) {
      return formControl.errors[validatorName] && formControl.touched;
    }

  }
}
