import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillboardComponent } from './billboard/billboard.component' 
import { CollectionsComponent } from "./collections/collections.component"
import { PopularCollectionComponent} from "./popular-collection/popular-collection.component"
import { VotedCollectionComponent} from './voted-collection/voted-collection.component'
import { ComedyCollectionComponent } from "./comedy-collection/comedy-collection.component"


const routes: Routes = [
  {path:"", component:BillboardComponent},
  {path:"collections", component:CollectionsComponent},
  {path:"popularcollection", component:PopularCollectionComponent},
  {path:"votedcollection", component:VotedCollectionComponent},
  {path:"comedycollection", component:ComedyCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
