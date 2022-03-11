import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PautasAvaliacaoCondominoPage } from './pautas-avaliacao-condomino.page';

describe('PautasAvaliacaoCondominoPage', () => {
  let component: PautasAvaliacaoCondominoPage;
  let fixture: ComponentFixture<PautasAvaliacaoCondominoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PautasAvaliacaoCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PautasAvaliacaoCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
