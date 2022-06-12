import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopytoclipboardcomplexdivComponent } from './copytoclipboardcomplexdiv.component';

describe('CopytoclipboardcomplexdivComponent', () => {
  let component: CopytoclipboardcomplexdivComponent;
  let fixture: ComponentFixture<CopytoclipboardcomplexdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopytoclipboardcomplexdivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopytoclipboardcomplexdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
