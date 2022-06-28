import { ComponentFixture, TestBed, waitForAsync, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { WelcomePage } from './welcome.page';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

//const routerSpy = new Jasmine();
describe('WelcomePage', () => {
  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;
  //let mockRouter = TestBed.get(Router);//{ navigate: fixture. };
  let mockRouter: Router;
  //let routerSpy = jasmine.createSpy('Router', ['navigateByUrl']);
  let routerSpy = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
       // RouterTestingModule.withRoutes([])
         RouterTestingModule
      ],
      declarations: [ WelcomePage ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
    mockRouter = TestBed.get(Router);
    fixture.detectChanges();

    //
  }));

  it('should create', () => {
    const navigateSpy = spyOn(mockRouter, 'navigate');
    expect(component).toBeTruthy();
  });

  //it('should navigate to sign-in when button clicked', () => {
  //  //let mockRouter = { navigate: jasmine}
  //  component.gotoSignIn()
  //  expect(component).toBeTruthy();
  //});
});

