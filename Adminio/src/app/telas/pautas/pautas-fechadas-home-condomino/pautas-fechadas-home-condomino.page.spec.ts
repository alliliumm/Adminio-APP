import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PautasFechadasHomeCondominoPage } from './pautas-fechadas-home-condomino.page';

describe('PautasFechadasHomeCondominoPage', () => {
  let component: PautasFechadasHomeCondominoPage;
  let fixture: ComponentFixture<PautasFechadasHomeCondominoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PautasFechadasHomeCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PautasFechadasHomeCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
