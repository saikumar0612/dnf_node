import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {GLOBAL} from '../../service/global';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public title: string;
  public url: string;
  public identity;
  public token;
  public page;
  public next_page;
  public prev_page;
  public total;
  public pages;
  public users: User[];
  // public follows;
  // public follow_me;
  public status: string;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
) {
    this.title = 'Conversaciones';
    this.url = GLOBAL.url;
    
}

ngOnInit() {
  console.log('[OK] Component: users.');
  this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

//   this.actualPage();
}

// actualPage() {
//   this._route.params.subscribe(params => {
//       let page = +params['page'];
//       this.page = page;
      
//       if (!params['page']) {
//           page = 1;
//       }
      
//       if (!page) {
//           page = 1;
//       } else {
//           this.next_page = page + 1;
//           this.prev_page = page - 1;
          
//           if (this.prev_page <= 0) {
//               this.prev_page = 1;
//           }
//       }
      
//       this.getUsers();
//   });
// }

getUsers() {
  this._userService.getUsers().subscribe(
      response => {
          if (!response.users) {
              this.status = 'error';
          } else {
              this.total = response.total;
              this.users = response.users;
              this.pages = response.pages;
              // this.follows = response.user_following;
              // this.follow_me = response.user_follow_me;
              // if (page > this.pages) {
              //     this._router.navigate(['/gente', 1]);
              // }
          }
      },
      error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
          
          if (errorMessage != null) {
              this.status = 'error';
          }
      }
  );
}

}
