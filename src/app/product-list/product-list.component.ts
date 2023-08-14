import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // importでとってきた情報を使う
  products = products;

  students = {"太郎","次郎","三郎"};

  // カーリーブレイシスに囲まれたところをjsonオブジェクトという
  more_info_students = [
    {
      name: "太郎",
      gender: "男",
      age: 55
    },
    {
      name: "次郎",
      gender: "男",
      age: 20
    },
    {
      name: "三郎",
      gender: "男",
      age: 15
    }
  ];

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/