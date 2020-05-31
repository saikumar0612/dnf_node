import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {GLOBAL} from '../../service/global';
import { ActivatedRouteStub } from 'src/app/mocks/ActivatedRouteStub';
import { AuthServiceStub } from 'src/app/mocks/AuthServiceStub';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  const authServiceStub = new AuthServiceStub();
  const activatedRouteStub = new ActivatedRouteStub();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponent ],
      imports:[
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
    fixture = TestBed.createComponent(ViewComponent);
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
