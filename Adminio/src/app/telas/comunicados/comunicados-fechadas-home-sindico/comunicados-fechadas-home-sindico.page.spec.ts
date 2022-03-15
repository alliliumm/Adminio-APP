import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicadosFechadasHomeSindicoPage } from './comunicados-fechadas-home-sindico.page';

describe('ComunicadosFechadasHomeSindicoPage', () => {
  let component: ComunicadosFechadasHomeSindicoPage;
  let fixture: ComponentFixture<ComunicadosFechadasHomeSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicadosFechadasHomeSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicadosFechadasHomeSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
