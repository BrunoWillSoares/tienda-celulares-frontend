import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {SuccessComponent} from './success/success.component'
import { FailComponent } from "./fail/fail.component";
import { PendingComponent } from "./pending/pending.component";

const routes: Routes = [
    {path:'Success', component: SuccessComponent},
    {path:'success.html', component: SuccessComponent},
    {path:'Fail', component: FailComponent},
    {path:'Pending', component: PendingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}