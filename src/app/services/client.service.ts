import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  BACKEND_URL: string = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.BACKEND_URL}/clients`);
  }

  getClient(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.BACKEND_URL}/clients/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.BACKEND_URL}/clients`, client);
  }

  updateClient(id: string, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.BACKEND_URL}/clients/${id}`, client);
  }

  deleteClient(id: string): Observable<Client> {
    return this.http.delete<Client>(`${this.BACKEND_URL}/clients/${id}`);
  }
}
