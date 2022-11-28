import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css'],
})
export class ClientTableComponent implements OnInit {
  clients: Client[] = [];
  filterString: string = '';

  faEye = faEye;
  faPen = faPen;
  faTrash = faTrash;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.clientService.getClients().subscribe(
      (res) => {
        this.clients = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  deleteClient(id: string) {
    this.popupService
      .openPopup()
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.clientService.deleteClient(id).subscribe((res) => {
            console.log(res);
            this.ngOnInit();
          });
        }
      });
  }
}
