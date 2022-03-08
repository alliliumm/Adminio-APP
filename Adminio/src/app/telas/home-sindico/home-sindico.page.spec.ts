import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeSindicoPage } from './home-sindico.page';

describe('HomeSindicoPage', () => {
  let component: HomeSindicoPage;
  let fixture: ComponentFixture<HomeSindicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSindicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSindicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
