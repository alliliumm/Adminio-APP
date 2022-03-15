import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarComunicadosSindicoPage } from './mostrar-comunicados-sindico.page';

describe('MostrarComunicadosSindicoPage', () => {
  let component: MostrarComunicadosSindicoPage;
  let fixture: ComponentFixture<MostrarComunicadosSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarComunicadosSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarComunicadosSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
