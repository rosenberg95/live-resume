import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ResumeModule } from "./resume/resume.module";
import { PageNotFoundRoutingModule } from "./404/page-not-found-routing.module";
import { PageNotFoundModule } from "./404/page-not-found.module";
import { CoreModule } from "./core/core.module";

// sprog ting
import localeEn from "@angular/common/locales/en";
import localeDk from "@angular/common/locales/da";
import localeDkExtra from "@angular/common/locales/extra/da";

// Firebase ting
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { environment } from "../environments/environment";

import { HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import * as Hammer from "hammerjs";

export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any> {
        swipe: { direction: Hammer.DIRECTION_ALL },
    };
}

registerLocaleData(localeEn, "en");
registerLocaleData(localeDk, "da-GL", localeDkExtra);

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ResumeModule,
    PageNotFoundModule,
    PageNotFoundRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule,
    HammerModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ]
})

export class AppModule {}