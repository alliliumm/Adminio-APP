import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarPautasAvaliacaoCondominoPage } from './mostrar-pautas-avaliacao-condomino.page';

describe('MostrarPautasAvaliacaoCondominoPage', () => {
  let component: MostrarPautasAvaliacaoCondominoPage;
  let fixture: ComponentFixture<MostrarPautasAvaliacaoCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPautasAvaliacaoCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarPautasAvaliacaoCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
