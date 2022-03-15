import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarComunicadosCondominoPage } from './mostrar-comunicados-condomino.page';

describe('MostrarComunicadosCondominoPage', () => {
  let component: MostrarComunicadosCondominoPage;
  let fixture: ComponentFixture<MostrarComunicadosCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarComunicadosCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarComunicadosCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
