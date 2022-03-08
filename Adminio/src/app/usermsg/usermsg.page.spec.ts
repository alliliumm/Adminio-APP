import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsermsgPage } from './usermsg.page';

describe('UsermsgPage', () => {
  let component: UsermsgPage;
  let fixture: ComponentFixture<UsermsgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermsgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsermsgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
