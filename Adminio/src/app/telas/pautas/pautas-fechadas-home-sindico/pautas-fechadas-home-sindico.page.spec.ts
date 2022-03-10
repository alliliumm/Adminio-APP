import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PautasFechadasHomeSindicoPage } from './pautas-fechadas-home-sindico.page';

describe('PautasFechadasHomeSindicoPage', () => {
  let component: PautasFechadasHomeSindicoPage;
  let fixture: ComponentFixture<PautasFechadasHomeSindicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PautasFechadasHomeSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PautasFechadasHomeSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
