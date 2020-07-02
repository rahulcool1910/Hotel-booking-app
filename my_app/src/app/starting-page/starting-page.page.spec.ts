import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartingPagePage } from './starting-page.page';

describe('StartingPagePage', () => {
  let component: StartingPagePage;
  let fixture: ComponentFixture<StartingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
