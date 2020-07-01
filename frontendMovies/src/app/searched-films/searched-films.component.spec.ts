import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedFilmsComponent } from './searched-films.component';

describe('SearchedFilmsComponent', () => {
  let component: SearchedFilmsComponent;
  let fixture: ComponentFixture<SearchedFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
