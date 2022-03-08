import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriacaoPautasSindicoPage } from './criacao-pautas-sindico.page';

describe('CriacaoPautasSindicoPage', () => {
  let component: CriacaoPautasSindicoPage;
  let fixture: ComponentFixture<CriacaoPautasSindicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CriacaoPautasSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriacaoPautasSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
