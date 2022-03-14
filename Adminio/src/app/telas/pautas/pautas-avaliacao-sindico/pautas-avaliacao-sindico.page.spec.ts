import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PautasAvaliacaoSindicoPage } from './pautas-avaliacao-sindico.page';

describe('PautasAvaliacaoSindicoPage', () => {
  let component: PautasAvaliacaoSindicoPage;
  let fixture: ComponentFixture<PautasAvaliacaoSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PautasAvaliacaoSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PautasAvaliacaoSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
