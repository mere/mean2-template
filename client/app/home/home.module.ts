import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        routing
    ]
})
export class HomeModule { }