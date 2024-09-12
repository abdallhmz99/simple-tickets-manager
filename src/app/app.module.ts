import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { QRCodeModule } from 'angularx-qrcode';
import { CardComponent } from './componants/card/card.component';
import { ChartComponent } from './componants/chart/chart.component';
import { TableComponent } from './componants/table/table.component';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { NgxEchartsModule } from 'ngx-echarts';
import { TreeSelectModule } from 'primeng/treeselect';

@NgModule({
  declarations: [AppComponent, CardComponent, ChartComponent, TableComponent],
  imports: [
    BrowserModule,
    InputGroupModule,
    TableModule,
    TreeSelectModule,
    InputGroupAddonModule,
    InputGroupModule,
    AppRoutingModule,
    InputIconModule,
    ButtonModule,
    IconFieldModule,
    QRCodeModule,
    CardModule,
    TooltipModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
