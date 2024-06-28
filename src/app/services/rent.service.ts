import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Rent {
  dateDebut: Date,
  dateFin: Date,
  type:any
}

@Injectable({
  providedIn: 'root'
})
export class RentService {
  private apiUrl = 'http://localhost:5000/reservations'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  Renting(rent: Rent): Observable<Rent> {
    return this.http.post<Rent>(`${this.apiUrl}/addReservations`, rent);
  }
}
