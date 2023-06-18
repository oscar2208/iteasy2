import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteServiciosPage } from './delete-servicios.page';

describe('DeleteServiciosPage', () => {
  let component: DeleteServiciosPage;
  let fixture: ComponentFixture<DeleteServiciosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
