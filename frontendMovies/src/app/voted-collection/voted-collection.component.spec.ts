import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedCollectionComponent } from './voted-collection.component';

describe('VotedCollectionComponent', () => {
  let component: VotedCollectionComponent;
  let fixture: ComponentFixture<VotedCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotedCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
