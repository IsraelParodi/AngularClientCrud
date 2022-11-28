import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../components/popup/popup.component";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private popup: MatDialog) {
  }

  openPopup() {
    return this.popup.open(PopupComponent, {
      width: '300px', panelClass: 'confirmation-dialog-container',
      disableClose: true
    })
  }
}
