import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
import { TrajetaCredito } from 'src/app/models/tarjetacredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})

export class TarjetaCreditoComponent implements OnInit {
  form:FormGroup;
  closeResult: string;
  constructor(private FormBuilder:FormBuilder ,
              private tarjetaService: TarjetaService,
              public toastr: ToastrService,
              private modalService: NgbModal)
  {
    this.form = this.FormBuilder.group({
     id:0,
     titular:['',[Validators.required]],
    numeroTarjeta:['',[Validators.required,Validators.maxLength(16),Validators.minLength(16)]],
    fechaExpiracion:['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]],
    cvv:['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]]
    })
  }
  ngOnInit(): void {
  }
  guardarTarjeta()
  {
    const tarjeta: TrajetaCredito={
      titular:this.form.get('titular').value,
      numeroTarjeta:this.form.get('numeroTarjeta').value,
      fechaExpiracion:this.form.get('fechaExpiracion').value,
      Cvv:this.form.get('cvv').value
    }
    this.tarjetaService.guardarTarjeta(tarjeta).subscribe(data => 
      {
        this.tarjetaService.obtenerTarjetas();
        this.form.reset();
      })
  }
  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }
  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    } else {

      return  `with: ${reason}`;

    }

  }
}
