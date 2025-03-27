import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // ✅ Configurando o cliente HTTP
    importProvidersFrom(FormsModule), // ✅ Importando FormsModule para funcionar o [(ngModel)]
    provideRouter([{ path: '', component: AppComponent }]) // ✅ Rota do login
  ]
}).catch(err => console.error(err));
