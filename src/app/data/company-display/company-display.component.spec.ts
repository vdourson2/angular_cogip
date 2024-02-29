import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDisplayComponent } from './company-display.component';

describe('CompanyDisplayComponent', () => {
  let component: CompanyDisplayComponent;
  let fixture: ComponentFixture<CompanyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
