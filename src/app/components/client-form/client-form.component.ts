import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  client: Client = {
    name: '',
    lastname_father: '',
    lastname_mother: '',
    document_number: '',
    password: '',
    gender: '',
  };

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  edit: Boolean = false;

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.clientService.getClient(params['id']).subscribe((res) => {
        console.log(res);
        this.client = res;
        this.edit = true;
      });
    }
  }

  submitForm() {
    this.clientService.createClient(this.client).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/client']);
      },
      (err) => console.log(err)
    );
  }

  updateClient() {
    this.clientService
      .updateClient(this.client.id ?? '', this.client)
      .subscribe((res) => {
        this.client = res;
        this.router.navigate(['/client']);
        // this.edit = false;
      });
  }
}
