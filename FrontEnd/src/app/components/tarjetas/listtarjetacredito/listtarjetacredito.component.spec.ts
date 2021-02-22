import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtarjetacreditoComponent } from './listtarjetacredito.component';

describe('ListtarjetacreditoComponent', () => {
  let component: ListtarjetacreditoComponent;
  let fixture: ComponentFixture<ListtarjetacreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtarjetacreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtarjetacreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
