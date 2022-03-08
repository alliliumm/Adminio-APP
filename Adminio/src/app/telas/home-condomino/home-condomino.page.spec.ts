import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCondominoPage } from './home-condomino.page';

describe('HomeCondominoPage', () => {
  let component: HomeCondominoPage;
  let fixture: ComponentFixture<HomeCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
