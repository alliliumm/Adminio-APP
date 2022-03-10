import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PautasAvalicacaoSindicoPage } from './pautas-avalicacao-sindico.page';

describe('PautasAvalicacaoSindicoPage', () => {
  let component: PautasAvalicacaoSindicoPage;
  let fixture: ComponentFixture<PautasAvalicacaoSindicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PautasAvalicacaoSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PautasAvalicacaoSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
