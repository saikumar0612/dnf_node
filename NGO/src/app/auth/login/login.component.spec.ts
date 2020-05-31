
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {UserService} from '../../service/user.service';
import {GLOBAL} from '../../service/global';
import { AuthServiceStub } from 'src/app/mocks/AuthServiceStub';
import { ActivatedRouteStub } from 'src/app/mocks/ActivatedRouteStub';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  User } from 'src/app/model/user';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const authServiceStub = new AuthServiceStub();
  const activatedRouteStub = new ActivatedRouteStub();
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: UserService, useValue: AuthServiceStub },
        { provide: ActivatedRoute, useValue: ActivatedRouteStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#ngOnInit', fakeAsync(() => {
    component.ngOnInit();
    tick();
  }));
  it('#onSubmit', fakeAsync(() => {
    component.user = new User("", "", "", "", "", "ROLE_USER","");
    component.onSubmit(component.user);
    tick();
    expect(component.status).toEqual('error');

    component.user.email = "ravi.basolutions@gmail.com";
    component.user.password = "Pass12!@";
    component.user.role = "ROLE_USER";
    component.onSubmit(component.user);
    tick();
    expect(component.status).toEqual('success');
    

  }));

  it('#getToken', fakeAsync(() => {

    component.user.email = "ravi.basolutions@gmail.com";
    component.user.password = "Pass12!@";
    component.user.role = "ROLE_USER";
    component.getToken(component.user,"true");
    tick();
    // expect(component.status).toEqual('success');
    
  }));

});
