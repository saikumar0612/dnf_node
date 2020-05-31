
import {Component, OnInit, DoCheck} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from './service/user.service';
import {GLOBAL} from './service/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  // title = 'NGO';
  public title: string;
  public identity;
  public url: string;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService
  ) {
      this.title = 'DNF';
      this.url = GLOBAL.url;
  }

  ngOnInit() {
      this.identity = this._userService.getIdentity();
  }

  ngDoCheck() {
      this.identity = this._userService.getIdentity();
  }

  logout() {
      localStorage.clear();
      this.identity = null;
      this._router.navigate(['/']);
  }
}
