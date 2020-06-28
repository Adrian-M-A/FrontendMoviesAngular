import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
