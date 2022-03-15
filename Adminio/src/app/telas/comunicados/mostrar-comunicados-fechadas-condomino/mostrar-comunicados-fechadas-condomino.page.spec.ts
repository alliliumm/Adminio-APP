import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarComunicadosFechadasCondominoPage } from './mostrar-comunicados-fechadas-condomino.page';

describe('MostrarComunicadosFechadasCondominoPage', () => {
  let component: MostrarComunicadosFechadasCondominoPage;
  let fixture: ComponentFixture<MostrarComunicadosFechadasCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarComunicadosFechadasCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarComunicadosFechadasCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
