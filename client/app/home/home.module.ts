import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        homeRouting
    ]
})
export class HomeModule { }