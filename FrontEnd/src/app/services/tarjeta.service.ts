import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { TrajetaCredito } from '../models/tarjetacredito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  MyAppUrl = 'https://localhost:44395/';
  MyApiUrl = 'api/TarjetaCredito/';
   list:TrajetaCredito[];
  constructor(private http:HttpClient) { }
  guardarTarjeta(tarjeta:TrajetaCredito):Observable<TrajetaCredito>
  {
   return this.http.post<TrajetaCredito>(this.MyAppUrl + this.MyApiUrl , tarjeta);
  }

  obtenerTarjetas()
  {
    this.http.get(this.MyAppUrl + this.MyApiUrl).toPromise()
                  .then(data => {
                    this.list = data as TrajetaCredito[];
                  })
  }
}
