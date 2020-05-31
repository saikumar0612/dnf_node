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
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const authServiceStub = new AuthServiceStub();
  const activatedRouteStub = new ActivatedRouteStub();
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
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
  // localStorage.setItem('identity', JSON.stringify({"_id":"5ecd5421ed684c53d078e72c","name":"Ravi","surname":"Varma","nick":"Teppala","email":"ravi.basolutions@gmail.com","role":"ROLE_USER","image":null,"__v":0}));
  // localStorage.setItem('token', JSON.stringify("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZWNkNTQyMWVkNjg0YzUzZDA3OGU3MmMiLCJuYW1lIjoiUmF2aSIsInN1cm5hbWUiOiJWYXJtYSIsIm5pY2siOiJUZXBwYWxhIiwiZW1haWwiOiJyYXZpLmJhc29sdXRpb25zQGdtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJpbWFnZSI6bnVsbCwiaWF0IjoxNTkwNzcyNTY0LCJleHBpcmVkIjoxNTkxMDMxNzY0fQ.jEI22J4l_2utrpgQqFAx2rZipTmVRaSoce_3W7zh10w"));
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
});
