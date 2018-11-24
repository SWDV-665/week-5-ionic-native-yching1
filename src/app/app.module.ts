import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Home } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';

@NgModule({
  declarations: [
    MyApp,
    Home,
    SplashPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Home, 
    MyApp,
    SplashPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, StatusBar, SplashScreen]
})
export class AppModule {}
