import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillboardComponent } from './billboard/billboard.component' 
import { CollectionsComponent } from "./collections/collections.component"
import { PopularCollectionComponent} from "./popular-collection/popular-collection.component"
import { VotedCollectionComponent} from './voted-collection/voted-collection.component'
import { ComedyCollectionComponent } from "./comedy-collection/comedy-collection.component"
import { EightyCollectionComponent } from "./eighty-collection/eighty-collection.component"
import { NinetyCollectionComponent } from "./ninety-collection/ninety-collection.component"
import { ZGenerationCollectionComponent } from "./z-generation-collection/z-generation-collection.component"
import { SearchedFilmsComponent } from "./searched-films/searched-films.component"
import { RegisterComponent } from "./register/register.component"
import { LoginComponent} from "./login/login.component"


const routes: Routes = [
  {path:"", component:BillboardComponent},
  {path:"collections", component:CollectionsComponent},
  {path:"popularcollection", component:PopularCollectionComponent},
  {path:"votedcollection", component:VotedCollectionComponent},
  {path:"comedycollection", component:ComedyCollectionComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"eightycollection", component:EightyCollectionComponent},
  {path:"ninetycollection", component:NinetyCollectionComponent},
  {path:"zgenerationcollection", component:ZGenerationCollectionComponent},
  {path:"searchedfilms", component:SearchedFilmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
