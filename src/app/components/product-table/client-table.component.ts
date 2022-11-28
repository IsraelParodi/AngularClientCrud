import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/client.service';
import { Product } from '../../models/Client';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];
  filterString: string = '';

  faEye = faEye;
  faPen = faPen;
  faTrash = faTrash;

  constructor(
    private productService: ProductService,
    private router: Router,
    private popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getClients().subscribe(
      (res) => {
        this.products = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  // deleteProduct(id: string) {
  //   this.popupService.openPopup().afterClosed().subscribe(res => {
  //     if (res) {
  //       console.log(res)
  //       this.productService.deleteProduct(id).subscribe(res => {
  //         console.log(res)
  //         this.ngOnInit()
  //       });
  //     }
  //   })
  // alert("Esta seguro de eliminar este registro?")
  // this.productService.deleteProduct(id).subscribe(
  //   res => {
  //     console.log(res);
  //     this.ngOnInit();
  //   },
  //   err => console.log(err)
  // )
  // }

  // moneyFormat(amount: Number) {
  //   return `S/ ${amount.toFixed(2)}`
  // }
}
