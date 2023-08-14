import { Component } from '@angular/core';

import { products } from '../products';

import { product } from '../shared/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  // importでとってきた情報を使う
  // products = products;

  products:Product [] = products;

  pro:Product = {
    name: "太郎",
    price: 100,
    description: "小学生" 
  }

  // 変数名:型名で型を宣言できる。型指定した方がエラー出力につながる
  number:number = 5;

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