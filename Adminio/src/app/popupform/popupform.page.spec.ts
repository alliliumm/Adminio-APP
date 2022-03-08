import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupformPage } from './popupform.page';

describe('PopupformPage', () => {
  let component: PopupformPage;
  let fixture: ComponentFixture<PopupformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
