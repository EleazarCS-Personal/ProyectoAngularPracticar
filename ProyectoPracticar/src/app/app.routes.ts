import { Routes } from '@angular/router';
import { PracticaModule } from './practica/practica.module';
import { PruebasComponent } from './practica/pruebas/pruebas.component';

export const routes: Routes = [
    {
        path:"",
        component:PruebasComponent
    }
];
