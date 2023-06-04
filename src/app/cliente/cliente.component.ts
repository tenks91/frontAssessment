import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  disabled = false;

  cliente = {
    name: '',
    code: this.disabled
  }

  result = '';

  constructor(private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(!params['code']){
        this.disabled = true;
        console.log("entro");
        console.log(params['code']);
      }
    })
  }

  onSubmit() {
    this.result = JSON.stringify(this.cliente)
  }

}
