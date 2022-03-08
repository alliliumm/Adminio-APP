import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssembleiaadmPage } from './assembleiaadm.page';

describe('AssembleiaadmPage', () => {
  let component: AssembleiaadmPage;
  let fixture: ComponentFixture<AssembleiaadmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembleiaadmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssembleiaadmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
