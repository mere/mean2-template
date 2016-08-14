import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { appRouting, appRoutingProviders } from './app.routing';

// Application Features
import { AppComponent } from './app.component';
import { HomeModule } from './home';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule, BrowserModule, FormsModule, RouterModule, HttpModule,
        HomeModule,
        appRouting
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }