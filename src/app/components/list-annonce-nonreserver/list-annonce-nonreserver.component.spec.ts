import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnnonceNonreserverComponent } from './list-annonce-nonreserver.component';

describe('ListAnnonceNonreserverComponent', () => {
  let component: ListAnnonceNonreserverComponent;
  let fixture: ComponentFixture<ListAnnonceNonreserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAnnonceNonreserverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnnonceNonreserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
