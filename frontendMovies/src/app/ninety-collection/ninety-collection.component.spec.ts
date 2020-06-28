import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinetyCollectionComponent } from './ninety-collection.component';

describe('NinetyCollectionComponent', () => {
  let component: NinetyCollectionComponent;
  let fixture: ComponentFixture<NinetyCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinetyCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinetyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
