import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  cliente = {
    name: '',
    code: '12312312312'
  }

  result = '';

  constructor(private router: Router){
    
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.result = JSON.stringify(this.cliente)
  }

}
