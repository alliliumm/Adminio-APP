import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarPautasAvaliacaoSindicoPage } from './mostrar-pautas-avaliacao-sindico.page';

describe('MostrarPautasAvaliacaoSindicoPage', () => {
  let component: MostrarPautasAvaliacaoSindicoPage;
  let fixture: ComponentFixture<MostrarPautasAvaliacaoSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPautasAvaliacaoSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarPautasAvaliacaoSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
