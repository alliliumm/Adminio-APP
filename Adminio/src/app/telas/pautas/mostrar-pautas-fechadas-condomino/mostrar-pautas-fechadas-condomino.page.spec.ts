import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarPautasFechadasCondominoPage } from './mostrar-pautas-fechadas-condomino.page';

describe('MostrarPautasFechadasCondominoPage', () => {
  let component: MostrarPautasFechadasCondominoPage;
  let fixture: ComponentFixture<MostrarPautasFechadasCondominoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPautasFechadasCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarPautasFechadasCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
