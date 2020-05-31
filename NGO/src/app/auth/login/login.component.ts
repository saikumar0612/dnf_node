import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string;
  public user: User;
  public status: string;
  public identity;
  public token;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService
  ) {
      this.title = 'Inicia Sesión';
      this.user = new User("", "", "", "", "", "", "ROLE_USER");
  }

  ngOnInit() {
      console.log('[OK] Component: login.');
  }

  onSubmit(user) {
      this._userService.signup(user).subscribe(
          response => {
              this.identity = response.user;
              if (!this.identity || !this.identity._id) {
                  this.status = 'error';
              } else {
                  this.status = 'success';
                  localStorage.setItem('identity', JSON.stringify(this.identity));
                  this.getToken(user,'true');
              }
          },
          error => {
              console.log(<any> error);
              var errorMessage = <any> error;
              if (errorMessage != null) {
                  this.status = 'error';
              }
          }
      );
  }

  getToken(user,flag) {
      this._userService.signup(user,flag).subscribe(
          response => {
              this.token = response.token;
              if (this.token.length <= 0) {
                  this.status = 'error';
              } else {
                  localStorage.setItem('token', JSON.stringify(this.token));
                //   this.getCounters();
              }
          },
          error => {
              console.log(<any> error);
              var errorMessage = <any> error;
              if (errorMessage != null) {
                  this.status = 'error';
              }
          }
      );
  }

//   getCounters() {
//       this._userService.getCounter().subscribe(
//           response => {
//               localStorage.setItem('stats', JSON.stringify(response));
//               this.status = "success";
//               this._router.navigate(['/home']);
//           },
//           error => {
//               console.log(<any> error);
//           }
//       );
//   }

}
