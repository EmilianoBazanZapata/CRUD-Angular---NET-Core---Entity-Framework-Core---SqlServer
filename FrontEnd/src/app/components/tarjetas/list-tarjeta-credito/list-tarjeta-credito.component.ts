import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-tarjeta-credito',
  templateUrl: './list-tarjeta-credito.component.html',
  styleUrls: ['./list-tarjeta-credito.component.css']
})
export class ListtarjetacreditoComponent implements OnInit {

  constructor(public tarjetaService :TarjetaService,
                     public toastr: ToastrService,
                     private modalService: NgbModal) { }
                     closeResult: string;
                     eliminado: boolean = false;
  ngOnInit(): void {
    this.tarjetaService.obtenerTarjetas();
  }
  eliminarTarjeta(id:number)
  {
    if(confirm('Esta seguro de eliminar el registro ? '))
    {
      this.eliminado = true;
      this.tarjetaService.eliminarTarjeta(id).subscribe(data =>{
       this.tarjetaService.obtenerTarjetas(); 
      });
    }
  }
  editar(tarjeta)
  {
    this.tarjetaService.actualizar(tarjeta);
  }
  
  open(content) {
    if(this.eliminado === true)
    {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

        this.closeResult = `Closed with: ${result}`;
  
      }, (reason) => {
  
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  
      });
    }
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

