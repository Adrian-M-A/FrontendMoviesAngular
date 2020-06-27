import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCollectionComponent } from './popular-collection.component';

describe('PopularCollectionComponent', () => {
  let component: PopularCollectionComponent;
  let fixture: ComponentFixture<PopularCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
