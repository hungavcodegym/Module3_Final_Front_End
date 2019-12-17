import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Awesome} from './awesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  private awesomeList: Awesome[];

  constructor(private httpClient: HttpClient) {
  }

  setAwesomeList(awesomes: Awesome[]) {
    this.awesomeList = awesomes;
  }

  getCurrentAwesomeList() {
    return this.awesomeList;
  }

  getAwesomeList(): Observable<Awesome[]> {
    return this.httpClient.get<Awesome[]>('http://localhost:3000/awesomes');
  }

  // addAwesome(awesome: Awesome) {
  //   return this.httpClient.post('http://localhost:3000/awesomes', awesome);
  // }
  //
  // editAwesome(awesome: Awesome) {
  //   return this.httpClient.put('http://localhost:3000/awesomes', awesome);
  // }
  //
  // deleteAwesome(id: number) {
  //   return this.httpClient.delete('http://localhost:3000/awesomes/' + id);
  // }

  addAwesome(awesome: Awesome) {
    this.awesomeList.push(awesome);
  }

  editAwesome(awesome: Awesome) {
    for (const item of this.awesomeList) {
      if (item.id === awesome.id) {
        item.tag = awesome.tag;
        item.url = awesome.url;
        item.descriptions = awesome.descriptions;
      }
    }
  }

  deleteAwesome(awesome: Awesome) {
    const tmp = [];
    for (const item of this.awesomeList) {
      if (item.id !== awesome.id) {
        tmp.push(item);
      }
    }
    this.awesomeList = tmp;
  }
}
