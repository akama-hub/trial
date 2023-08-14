import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

// ここで各種セットアップをしていく
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
    // routerLinkのパスを指定する
    RouterModule.forRoot([{ path: 'topbar', component: TopBarComponentComponent }]),
  ],
  // 使用するフォルダの種類
  declarations: [AppComponent, TopBarComponent, ProductListComponent],
  // 一番最初に呼び出すところ
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
