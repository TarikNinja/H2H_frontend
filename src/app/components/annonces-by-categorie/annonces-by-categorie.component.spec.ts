import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesByCategorieComponent } from './annonces-by-categorie.component';

describe('AnnoncesByCategorieComponent', () => {
  let component: AnnoncesByCategorieComponent;
  let fixture: ComponentFixture<AnnoncesByCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnoncesByCategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoncesByCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
