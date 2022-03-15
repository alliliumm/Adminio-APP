import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdicaoStatusComunicadosSindicoPage } from './edicao-status-comunicados-sindico.page';

describe('EdicaoStatusComunicadosSindicoPage', () => {
  let component: EdicaoStatusComunicadosSindicoPage;
  let fixture: ComponentFixture<EdicaoStatusComunicadosSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoStatusComunicadosSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdicaoStatusComunicadosSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
