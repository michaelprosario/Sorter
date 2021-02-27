import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorterEntryComponent } from './sorter-entry.component';

describe('SorterEntryComponent', () => {
  let component: SorterEntryComponent;
  let fixture: ComponentFixture<SorterEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorterEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
