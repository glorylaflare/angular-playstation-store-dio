import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageToggleComponent } from './page-toggle.component';

describe('PageToggleComponent', () => {
  let component: PageToggleComponent;
  let fixture: ComponentFixture<PageToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
