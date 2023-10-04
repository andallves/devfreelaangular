// @ts-nocheck
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  checkIfAnyRoleIsChecked() {
    let list = document.getElementsByName("role");
    let counter = 0;

    for (let radioButton of list) {
      if (radioButton.checked === false) {
        counter++;
      }
    }
    return counter !== list.length;
  }

  register() {
    //dados do form
    if (this.checkIfAnyRoleIsChecked() === false) {
      Swal.fire(
        'Algo de errado...',
        'Marque algum perfil!',
        'error'
      )
      return;
    }

    let payload = {
      role: document.getElementsByName("role")[0].checked == true ? 'freelancer' : 'client',
      fullName: document.querySelector("#fullName").value,
      birthDate: document.querySelector("#birthDate").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value
    }
    console.log(payload)

    //calling api

    fetch("https://localhost:7282/api/users", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => response.json())
      .then(response => {
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

            window.location.href =  'list.html';
          }
        })
      })
      .catch(error => {
        throw new Error(error)
      })

  }
}
