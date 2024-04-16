import { Component } from '@angular/core';
import { User } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'createdAt'];
  users: User [] = [
    {
      id : 1,
      nombre: 'ola',
      apellido: 'aas',
      email: 'ola@test.com',
      createdAt: new Date
    },

    {
      id : 2,
      nombre: 'ola',
      apellido: 'aas',
      email: 'ola@test.com',
      createdAt: new Date
    },

    {
      id : 3,
      nombre: 'ola',
      apellido: 'aas',
      email: 'ola@test.com',
      createdAt: new Date
    }

  ]

  constructor (private matDialog: MatDialog) {}

  openDialog (): void {
    this.matDialog.open(UserDialogComponent);
  }
}
