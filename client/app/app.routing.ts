import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: './home/home.module' }
];

export const routing = RouterModule.forRoot(routes);
