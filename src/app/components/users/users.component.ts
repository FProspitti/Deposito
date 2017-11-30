import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: Object[];
  selectedUser: Object;
  user: Object = new Object();
  newUser: boolean;
  displayDialog: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessages: FlashMessagesService) {
  }

  ngOnInit() {
    this.cargarTabla();
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = new Object();
    this.displayDialog = true;
  }

  save() {
    console.log("user");
    console.log(this.user);
    if (this.newUser) {
      this.authService.registerUser(this.user).subscribe(data => {
        if (data.success) {
          this.flashMessages.show('Se registro el usuario correctamente', {cssClass: 'alert-success', timeout: 4000})
        } else {
          this.flashMessages.show('No se pudo registrar el usuario', {cssClass: 'alert-danger', timeout: 4000})
        }
      });
    } else {
      this.authService.updateUser(this.user).subscribe(data => {
        if (data.success) {
          this.flashMessages.show('Se borro el usuario correctamente', {cssClass: 'alert-success', timeout: 4000})
        } else {
          this.flashMessages.show('No se pudo borrar el usuario', {cssClass: 'alert-danger', timeout: 4000})
        }
      });

    }
    this.user = null;
    this.displayDialog = false;
    this.cargarTabla();
  }

  delete() {
    this.authService.deleteUser(this.user).subscribe(data => {
      if (data.success) {
        this.flashMessages.show('Se borro el usuario correctamente', {cssClass: 'alert-success', timeout: 4000})
      } else {
        this.flashMessages.show('No se pudo borrar el usuario', {cssClass: 'alert-danger', timeout: 4000})
      }
      this.user = null;
      this.displayDialog = false;
      this.cargarTabla();
    });
  }

  onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneUser(event.data);
    this.displayDialog = true;
  }

  cloneUser(c: Object): Object {
    let user = new Object();
    for (let prop in c) {
      user[prop] = c[prop];
    }
    return user;
  }

  findSelectedUserIndex(): number {
    return this.usuarios.indexOf(this.selectedUser);
  }

  cargarTabla() {
    this.authService.getUsers().subscribe(usuarios => {
      this.usuarios = usuarios;

    }, err => {
      console.log(err);
      return false;
    });
  }

}