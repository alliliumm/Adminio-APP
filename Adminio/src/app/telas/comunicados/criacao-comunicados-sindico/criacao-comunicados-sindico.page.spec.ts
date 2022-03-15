import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriacaoComunicadosSindicoPage } from './criacao-comunicados-sindico.page';

describe('CriacaoComunicadosSindicoPage', () => {
  let component: CriacaoComunicadosSindicoPage;
  let fixture: ComponentFixture<CriacaoComunicadosSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriacaoComunicadosSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriacaoComunicadosSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
