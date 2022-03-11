import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarPautasFechadasSindicoPage } from './mostrar-pautas-fechadas-sindico.page';

describe('MostrarPautasFechadasSindicoPage', () => {
  let component: MostrarPautasFechadasSindicoPage;
  let fixture: ComponentFixture<MostrarPautasFechadasSindicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPautasFechadasSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarPautasFechadasSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
