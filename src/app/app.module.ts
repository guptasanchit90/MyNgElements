import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AboutMeComponent } from './about-me/about-me.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AboutMeComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const appAboutMe = createCustomElement(AboutMeComponent, { injector });
    customElements.define('app-about-me', appAboutMe);
  }

  ngDoBootstrap() { }
}
