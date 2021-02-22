import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  form:FormGroup;
  constructor(private FormBuilder:FormBuilder)
  {
    this.form = this.FormBuilder.group({
     id:0,
     titular:['',[Validators.required]],
    numeroTarjeta:['',[Validators.required,Validators.maxLength(16),Validators.minLength(16)]],
    fechaExpiracion:['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]],
    cvv:['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]]
    })
  }
  ngOnInit(): void {
  }
guardarTarjeta()
{
  console.log(this.form);
}
}
