import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarPautasCondominoPage } from './mostrar-pautas-condomino.page';

describe('MostrarPautasCondominoPage', () => {
  let component: MostrarPautasCondominoPage;
  let fixture: ComponentFixture<MostrarPautasCondominoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPautasCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarPautasCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
