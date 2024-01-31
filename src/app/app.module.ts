import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './Header/header.component';
import { RecipeDetailComponent } from './Recipe Book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Recipe Book/recipe-item/recipe-item.component';
import { RecipeListComponent } from './Recipe Book/recipe-list/recipe-list.component';
import { EditShoppinglistComponent } from './Shopping List/edit-shoppinglist/edit-shoppinglist.component';
import { ShoppingListComponent } from './Shopping List/shopping-list/shopping-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    EditShoppinglistComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
