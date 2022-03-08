import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PautasHomeCondominoPage } from './pautas-home-condomino.page';

describe('PautasHomeCondominoPage', () => {
  let component: PautasHomeCondominoPage;
  let fixture: ComponentFixture<PautasHomeCondominoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PautasHomeCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PautasHomeCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
