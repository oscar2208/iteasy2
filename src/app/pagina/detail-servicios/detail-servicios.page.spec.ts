import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailServiciosPage } from './detail-servicios.page';

describe('DetailServiciosPage', () => {
  let component: DetailServiciosPage;
  let fixture: ComponentFixture<DetailServiciosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
