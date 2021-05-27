import { LoginComponent } from './../../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
    height: '400px',
    width: '600px',
  });
  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  });
  }

}
