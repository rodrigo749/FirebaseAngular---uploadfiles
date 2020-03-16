import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAxd4YgIwoFEMWaMKWkhjS3mjtS6gpnaJA",
      authDomain: "fir-demo-a919a.firebaseapp.com",
      projectId: "fir-demo-a919a",
      storageBucket: "fir-demo-a919a.appspot.com",
    }),
    AngularFireStorageModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
