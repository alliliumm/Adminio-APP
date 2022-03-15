import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicadosHomeCondominoPage } from './comunicados-home-condomino.page';

describe('ComunicadosHomeCondominoPage', () => {
  let component: ComunicadosHomeCondominoPage;
  let fixture: ComponentFixture<ComunicadosHomeCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicadosHomeCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicadosHomeCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
