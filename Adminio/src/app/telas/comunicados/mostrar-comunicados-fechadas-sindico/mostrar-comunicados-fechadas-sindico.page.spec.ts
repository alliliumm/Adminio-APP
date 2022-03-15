import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarComunicadosFechadasSindicoPage } from './mostrar-comunicados-fechadas-sindico.page';

describe('MostrarComunicadosFechadasSindicoPage', () => {
  let component: MostrarComunicadosFechadasSindicoPage;
  let fixture: ComponentFixture<MostrarComunicadosFechadasSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarComunicadosFechadasSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarComunicadosFechadasSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
