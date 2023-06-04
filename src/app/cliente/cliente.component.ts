import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  disabled = true;

  cliente = {
    name: '',
    code: ''
  }

  result = '';

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['code']) {
        this.disabled = false;
        this.cliente.code = params['code'];
      }
    })
  }

  onSubmit() {
    this.apiService
      .saveData(this.cliente)
      .subscribe(data => console.log(data));
  }

}
