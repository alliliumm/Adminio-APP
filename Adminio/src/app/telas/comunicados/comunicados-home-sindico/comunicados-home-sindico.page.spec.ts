import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicadosHomeSindicoPage } from './comunicados-home-sindico.page';

describe('ComunicadosHomeSindicoPage', () => {
  let component: ComunicadosHomeSindicoPage;
  let fixture: ComponentFixture<ComunicadosHomeSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicadosHomeSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicadosHomeSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
