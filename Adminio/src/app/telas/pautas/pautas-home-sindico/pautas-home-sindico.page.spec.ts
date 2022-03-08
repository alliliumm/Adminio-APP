import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PautasHomeSindicoPage } from './pautas-home-sindico.page';

describe('PautasHomeSindicoPage', () => {
  let component: PautasHomeSindicoPage;
  let fixture: ComponentFixture<PautasHomeSindicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PautasHomeSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PautasHomeSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
