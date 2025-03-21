import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging()),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBA9KBrmY4BUTI3fEHIC6S2QBLe8TcgCfw",

      authDomain: "friendlychat-d91e8.firebaseapp.com",
    
      projectId: "friendlychat-d91e8",
    
      storageBucket: "friendlychat-d91e8.firebasestorage.app",
    
      messagingSenderId: "315840568404",
    
      appId: "1:315840568404:web:9ddb32dbf534e0f58ea1c1"
    })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
