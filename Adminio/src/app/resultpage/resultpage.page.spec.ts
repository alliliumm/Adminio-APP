import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultpagePage } from './resultpage.page';

describe('ResultpagePage', () => {
  let component: ResultpagePage;
  let fixture: ComponentFixture<ResultpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
