import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../cliente.interface';

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

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['code']) {
        this.disabled = false;
        this.cliente.code = params['code'];
      }
    })
  }

  showSuccess(data: any) {
    console.log(data.exito);
    this.toastr.success("Proceso Exitoso", data.mensaje);
  }

  showError(data: any){
    console.log(data)
    this.toastr.error('Ocurrio un error', data.mensaje)
  }

  onSubmit() {
    this.apiService
      .saveData(this.cliente)
      .subscribe((response: Cliente) => {
        if(response.exito){
          this.showSuccess(response)
        }else{
          this.showError(response)
        }
      });
  }

}
