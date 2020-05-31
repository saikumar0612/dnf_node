// import { TestBed, async } from '@angular/core/testing';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {UserService} from './service/user.service';
import {GLOBAL} from './service/global';
// import { ActivatedRouteStub } from 'src/app/mocks/ActivatedRouteStub';
import { AuthServiceStub } from 'src/app/mocks/AuthServiceStub';
// import { ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const authServiceStub = new AuthServiceStub();
  // const activatedRouteStub = new ActivatedRouteStub();
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: UserService, useValue: AuthServiceStub }
        // { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DNF'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DNF');
  });

  it('#ngOnInit', fakeAsync(() => {
    component.ngOnInit();
    tick();
  }));

  it('#ngDoCheck', fakeAsync(() => {
    component.ngDoCheck();
    tick();
  }));
  it('#logout', fakeAsync(() => {
    component.logout();
    tick();
  }));
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('NGO app is running!');
  // });
});
 