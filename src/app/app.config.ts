import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyD6IvqXK5hkDlpNH0hKyPXqIUToHTNfplY",
      authDomain: "prueba-e6a3b.firebaseapp.com",
      projectId: "prueba-e6a3b",
      storageBucket: "prueba-e6a3b.firebasestorage.app",
      messagingSenderId: "1006969518231",
      appId: "1:1006969518231:web:95247384b6ac63cf3391d2"
    })),
    provideFirestore(() => getFirestore()),
  ]
};

