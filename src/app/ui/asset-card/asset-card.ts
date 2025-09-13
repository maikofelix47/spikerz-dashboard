import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BadgeComponent } from '../badge/badge';
import { BadgeType } from '../badge/type';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { AssetType } from './type';
import { MatDivider } from '@angular/material/divider';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.html',
  styleUrl: './asset-card.scss',
  imports: [
    MatTableModule,
    MatIconModule,
    BadgeComponent,
    MatPaginatorModule,
    MatPaginator,
    MatDivider,
    NgOptimizedImage,
  ],
})
export class AssetCard implements AfterViewInit {
  badgeTypes: BadgeType = BadgeType.Info;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<AssetType>([
    {
      icon: 'storage',
      asset: 'LoremIpsumdolorsit',
      risk: 'critical',
    },
    {
      icon: 'storage',
      asset: 'LoremIpsumdolorsit002',
      risk: 'critical',
    },
    {
      icon: 'storage',
      asset: 'LoremIpsumdolorsit003',
      risk: 'critical',
    },
    {
      icon: 'storage',
      asset: 'LoremIpsumdolorsit004',
      risk: 'critical',
    },
  ]);
  displayedColumns = signal(['icon', 'asset', 'risk']);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
