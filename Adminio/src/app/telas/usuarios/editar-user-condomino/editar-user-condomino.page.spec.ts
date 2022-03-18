import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarUserCondominoPage } from './editar-user-condomino.page';

describe('EditarUserCondominoPage', () => {
  let component: EditarUserCondominoPage;
  let fixture: ComponentFixture<EditarUserCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUserCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarUserCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
