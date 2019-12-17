import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private data;

  constructor() {
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    const tmp = this.data;
    this.clearData();
    return tmp;
  }

  private clearData() {
    this.data = undefined;
  }
}
