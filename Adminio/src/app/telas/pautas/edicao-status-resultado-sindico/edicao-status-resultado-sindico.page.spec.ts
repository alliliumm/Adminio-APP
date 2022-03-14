import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdicaoStatusResultadoSindicoPage } from './edicao-status-resultado-sindico.page';

describe('EdicaoStatusResultadoSindicoPage', () => {
  let component: EdicaoStatusResultadoSindicoPage;
  let fixture: ComponentFixture<EdicaoStatusResultadoSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoStatusResultadoSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdicaoStatusResultadoSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
