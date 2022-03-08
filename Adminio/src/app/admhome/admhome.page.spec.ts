import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmhomePage } from './admhome.page';

describe('AdmhomePage', () => {
  let component: AdmhomePage;
  let fixture: ComponentFixture<AdmhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
