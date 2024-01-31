import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShoppinglistComponent } from './edit-shoppinglist.component';

describe('EditShoppinglistComponent', () => {
  let component: EditShoppinglistComponent;
  let fixture: ComponentFixture<EditShoppinglistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditShoppinglistComponent]
    });
    fixture = TestBed.createComponent(EditShoppinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
