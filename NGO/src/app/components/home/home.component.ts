import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {GLOBAL} from '../../service/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string;
    public identity;
 
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService
    ) {
        this.title = 'DNF';
    }

    ngOnInit() {
        console.log('[OK] Component: home.');
        console.log('App Version: 0.1.0');
        this.identity = this._userService.getIdentity();
    }
}
