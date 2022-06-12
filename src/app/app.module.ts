import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyclipboardComponent } from './component/copyclipboard/copyclipboard.component';
import { CopytoClipboardHTMLTagComponent } from './component/copyto-clipboard-htmltag/copyto-clipboard-htmltag.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyclipboardComponent,
    CopytoClipboardHTMLTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
