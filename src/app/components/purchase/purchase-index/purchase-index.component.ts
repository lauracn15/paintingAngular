import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { MatTableDataSource } from '@angular/material';
import { Purchase } from 'src/app/models/Purchase'


@Component({
  selector: 'app-purchase-index',
  templateUrl: './purchase-index.component.html',
  styleUrls: ['./purchase-index.component.css']
})
export class PurchaseIndexComponent implements OnInit {
  constructor(private _purchaseService: PurchaseService) { }
  

  columnNames = ['details', 'Title', 'Price', 'BuyerName', 'BuyerEmail', 'StreetAddress', 'AptNumber', 'City', 'State', 'Zip'];
  dataSource: MatTableDataSource<Purchase>

  
  ngOnInit() {
    this._purchaseService.getPurchases().subscribe((purchase: Purchase[]) => {
      this.dataSource = new MatTableDataSource<Purchase>(purchase);
    });
  }
}
