import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-list-tarjeta-credito',
  templateUrl: './list-tarjeta-credito.component.html',
  styleUrls: ['./list-tarjeta-credito.component.css']
})
export class ListtarjetacreditoComponent implements OnInit {

  constructor(public tarjetaService :TarjetaService,
                     public toastr: ToastrService) { }

  ngOnInit(): void {
    this.tarjetaService.obtenerTarjetas();
  }
  eliminarTarjeta(id:number)
  {
    if(confirm('Esta seguro de eliminar el registro ? '))
    {
      this.tarjetaService.eliminarTarjeta(id).subscribe(data =>{
       this.tarjetaService.obtenerTarjetas(); 
      });
    }
  }
}
