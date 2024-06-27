import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Veichule {
  id_vehicule: string;
  marque: string;
  modele: string;
  etats: any;
}

@Injectable({
  providedIn: 'root'
})
export class VeichuleService {
  private apiUrl = 'YOUR_BACKEND_API_URL'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getVeichules(): Observable<Veichule[]> {
    return this.http.get<Veichule[]>(`${this.apiUrl}/veichules`);
  }

  deleteVeichule(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/veichules/${id}`);
  }

  updateVeichule(veichule: Veichule): Observable<Veichule> {
    return this.http.put<Veichule>(`${this.apiUrl}/veichules/${veichule.id_vehicule}`, veichule);
  }
}
