import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZGenerationCollectionComponent } from './z-generation-collection.component';

describe('ZGenerationCollectionComponent', () => {
  let component: ZGenerationCollectionComponent;
  let fixture: ComponentFixture<ZGenerationCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZGenerationCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZGenerationCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
