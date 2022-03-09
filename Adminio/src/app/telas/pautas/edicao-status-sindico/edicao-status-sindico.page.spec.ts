import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdicaoStatusSindicoPage } from './edicao-status-sindico.page';

describe('EdicaoStatusSindicoPage', () => {
  let component: EdicaoStatusSindicoPage;
  let fixture: ComponentFixture<EdicaoStatusSindicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoStatusSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdicaoStatusSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
