import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecategoryComponent } from './sidecategory.component';

describe('SidecategoryComponent', () => {
  let component: SidecategoryComponent;
  let fixture: ComponentFixture<SidecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
