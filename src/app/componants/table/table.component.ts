import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  baseIamgeUrl = '../../assets/images/';
  search: string | null = null;
  onSearch(event: string) {
    if (event == '' || event == null) {
      this.showendata = this.data;
    } else {
      this.showendata = this.data.filter((one: any) => {
        const name: String = one.user;
        return name.includes(event);
      });
    }
  }
  showendata: any[] = [];
  ngOnInit() {
    for (let index = 0; index < 50; index++) {
      this.data.push({
        user: `عبدالله${index}`,
        userImg: 'userImage.jfif',
        ticNo: index + 1,
        tikPrice: Math.round(Math.random() * 200),
        cinemas: [
          'مول العرب',
          'مول الجيزة',
          'مول الاسماعلية',
          'مول الاسكندرية',
          'مول المحلة',
        ],
        noOfPeople: 1,
        noOfBuy: 'مرة واحدة',
        tic: { url: 'url', name: 'userImage.jfif' },
      });
    }
    this.showendata = this.data;
  }
  save(name: string, url: string) {
    const blob = new Blob(['التذكرة'], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, 'التذكرة.txt');
  }
  data: any[] = [];
}
