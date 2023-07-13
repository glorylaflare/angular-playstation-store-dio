import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardLabelComponent } from './components/cards/card-label/card-label.component';
import { PageToggleComponent } from './components/page-toggle/page-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    HeaderComponent,
    CardsComponent,
    FooterComponent,
    CardLabelComponent,
    PageToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
