import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatecComponent } from './privatec.component';

describe('PrivatecComponent', () => {
  let component: PrivatecComponent;
  let fixture: ComponentFixture<PrivatecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivatecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
