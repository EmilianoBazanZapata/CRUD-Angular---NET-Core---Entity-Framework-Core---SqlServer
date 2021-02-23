import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { TrajetaCredito } from '../models/tarjetacredito';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  MyAppUrl = 'https://localhost:44395/';
  MyApiUrl = 'api/TarjetaCredito/';
   list:TrajetaCredito[];
   private actualizarFormulario = new BehaviorSubject<TrajetaCredito>({} as any);
  constructor(private http:HttpClient) { }
  eliminarTarjeta(id:number):Observable<TrajetaCredito>
  {
    return this.http.delete<TrajetaCredito>(this.MyAppUrl + this.MyApiUrl + id);
  }
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
  actualizarTarjeta(id:number, tarjeta:TrajetaCredito):Observable<TrajetaCredito>
  {
    return this.http.put<TrajetaCredito>(this.MyAppUrl + this.MyApiUrl + id , tarjeta);
  }
  actualizar(tarjeta)
  {
    this.actualizarFormulario.next(tarjeta);
  }
  obtenerTajeta$(): Observable<TrajetaCredito>
  {
    return this.actualizarFormulario.asObservable();
  }
}
