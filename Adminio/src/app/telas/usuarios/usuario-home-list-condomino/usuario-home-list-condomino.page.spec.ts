import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioHomeListCondominoPage } from './usuario-home-list-condomino.page';

describe('UsuarioHomeListCondominoPage', () => {
  let component: UsuarioHomeListCondominoPage;
  let fixture: ComponentFixture<UsuarioHomeListCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioHomeListCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioHomeListCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
