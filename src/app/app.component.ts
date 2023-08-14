import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  price = 100; //ここでの宣言にはconst, letは必要ない。関数内で必要

  // コンストラクターはこのクラスが定義されたときに呼ばれる関数
  construcer() {
    this.price = this.add100();
  }

  add100() {
    let number = 10;
    number = number + 100;
    return number;
  }

  add10() {
    let number = 10;
    number = number + 10;
    this.price = number;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
