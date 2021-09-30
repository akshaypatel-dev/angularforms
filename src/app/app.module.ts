import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {RouterModule, Routes} from '@angular/router';

const approute: Routes = [
  {path: 'templatedriven',
    component: TemplatedrivenComponent},
  {path: 'reactive',
    component: ReactiveComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
