import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BillboardComponent } from './billboard/billboard.component';
import { CollectionsComponent } from './collections/collections.component';
import { PopularCollectionComponent } from './popular-collection/popular-collection.component';
import { VotedCollectionComponent } from './voted-collection/voted-collection.component';
import { ComedyCollectionComponent } from './comedy-collection/comedy-collection.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EightyCollectionComponent } from './eighty-collection/eighty-collection.component';
import { NinetyCollectionComponent } from './ninety-collection/ninety-collection.component';
import { ZGenerationCollectionComponent } from './z-generation-collection/z-generation-collection.component';
import { SearchedFilmsComponent } from './searched-films/searched-films.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BillboardComponent,
    CollectionsComponent,
    PopularCollectionComponent,
    VotedCollectionComponent,
    ComedyCollectionComponent,
    RegisterComponent,
    LoginComponent,
    EightyCollectionComponent,
    NinetyCollectionComponent,
    ZGenerationCollectionComponent,
    SearchedFilmsComponent,
    AdminComponent,
    ProfileComponent,
    DetailFilmComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
