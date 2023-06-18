import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddServiciosPage } from './add-servicios.page';

describe('AddServiciosPage', () => {
  let component: AddServiciosPage;
  let fixture: ComponentFixture<AddServiciosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
