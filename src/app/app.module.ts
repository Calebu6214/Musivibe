import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
// Routing 
import { AppRoutingModule } from './app-routing.module';

  // Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { TrackComponent } from './components/track/track.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './services/apiservice.service';
import { FooterComponent } from './components/footer/footer.component';
import { GenreComponent } from './components/genre/genre.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidenavComponent,
    RegisterComponent,
    LoginComponent,
    AboutpageComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    FooterComponent,
    GenreComponent,
    ContactComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    



  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }