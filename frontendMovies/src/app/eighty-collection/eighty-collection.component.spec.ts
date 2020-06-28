import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightyCollectionComponent } from './eighty-collection.component';

describe('EightyCollectionComponent', () => {
  let component: EightyCollectionComponent;
  let fixture: ComponentFixture<EightyCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightyCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
