import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssembleiaPage } from './assembleia.page';

describe('AssembleiaPage', () => {
  let component: AssembleiaPage;
  let fixture: ComponentFixture<AssembleiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembleiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssembleiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
