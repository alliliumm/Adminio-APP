import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroSinPage } from './cadastro-sin.page';

describe('CadastroSinPage', () => {
  let component: CadastroSinPage;
  let fixture: ComponentFixture<CadastroSinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroSinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
