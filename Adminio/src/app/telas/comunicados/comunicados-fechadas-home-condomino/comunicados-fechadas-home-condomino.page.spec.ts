import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicadosFechadasHomeCondominoPage } from './comunicados-fechadas-home-condomino.page';

describe('ComunicadosFechadasHomeCondominoPage', () => {
  let component: ComunicadosFechadasHomeCondominoPage;
  let fixture: ComponentFixture<ComunicadosFechadasHomeCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicadosFechadasHomeCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicadosFechadasHomeCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
