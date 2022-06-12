import { CopyclipboardComponent } from './component/copyclipboard/copyclipboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxCopyPasteModule } from 'ngx-copypaste';
import { CopytoClipboardHTMLTagComponent } from './component/copyto-clipboard-htmltag/copyto-clipboard-htmltag.component';
import { CopytoclipboardcomplexdivComponent } from './component/copytoclipboardcomplexdiv/copytoclipboardcomplexdiv.component';

const routes: Routes = [
  {path: 'copyclipboardTextbox' , component:CopyclipboardComponent},
  {path: 'copyclipboardhtmltag' , component:CopytoClipboardHTMLTagComponent},
  {path: 'copyclipboardcomplexdiv' , component:CopytoclipboardcomplexdivComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    NgxCopyPasteModule
  ]
})
export class AppRoutingModule { }
