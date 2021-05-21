import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA ,MatDialogConfig} from '@angular/material/dialog';
import { ProductComponent } from './product/product.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private dialog: MatDialog) {

  }
  ngOnInit() {

  }
  title = 'ang-popup';
  name:any = "";
  productData:any = {
    "product_name":"",
    "product_code": ""
  }
  addProdcut() {
// this.dialog.open(ProductComponent,{width: '250px'})
// const dialogRef = this.dialog.open(ProductComponent, {
//   width: '250px',
// });

// dialogRef.afterClosed().subscribe(result => {
//   console.log('The dialog was closed');
// });
    this.name = "Add"
      // dialogConfig
        this.dialog.open(ProductComponent, {width: '250px',
        data: {name: this.name, product_name: this.productData.product_name,product_code:this.productData.product_code}});
  }

  updateProduct() {
    this.productData = {
      "product_name":"update Product Name",
      "product_code": "update Product Code"
    }
    this.name = "Update"
    this.dialog.open(ProductComponent, {width: '300px',
    data: {name: this.name, product_name: this.productData.product_name,product_code:this.productData.product_code}});
  }
}
