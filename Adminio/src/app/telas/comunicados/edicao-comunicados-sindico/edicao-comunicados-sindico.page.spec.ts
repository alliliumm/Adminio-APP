import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdicaoComunicadosSindicoPage } from './edicao-comunicados-sindico.page';

describe('EdicaoComunicadosSindicoPage', () => {
  let component: EdicaoComunicadosSindicoPage;
  let fixture: ComponentFixture<EdicaoComunicadosSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoComunicadosSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdicaoComunicadosSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
