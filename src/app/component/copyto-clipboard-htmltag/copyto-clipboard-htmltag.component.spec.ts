import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopytoClipboardHTMLTagComponent } from './copyto-clipboard-htmltag.component';

describe('CopytoClipboardHTMLTagComponent', () => {
  let component: CopytoClipboardHTMLTagComponent;
  let fixture: ComponentFixture<CopytoClipboardHTMLTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopytoClipboardHTMLTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopytoClipboardHTMLTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
