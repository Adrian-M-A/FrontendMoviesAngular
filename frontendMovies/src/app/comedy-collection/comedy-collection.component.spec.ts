import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyCollectionComponent } from './comedy-collection.component';

describe('ComedyCollectionComponent', () => {
  let component: ComedyCollectionComponent;
  let fixture: ComponentFixture<ComedyCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
