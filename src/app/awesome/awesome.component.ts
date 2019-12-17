import {Component, OnInit} from '@angular/core';
import {Awesome} from '../awesome';
import {AwesomeService} from '../awesome.service';
import {Router} from '@angular/router';
import {DataTransferService} from '../data-transfer.service';

@Component({
  selector: 'app-awesome',
  templateUrl: './awesome.component.html',
  styleUrls: ['./awesome.component.scss']
})
export class AwesomeComponent implements OnInit {

  awesomes: Awesome[];

  constructor(private awesomeService: AwesomeService,
              private router: Router,
              private dataTransfer: DataTransferService) {
  }

  ngOnInit() {
    if (this.awesomeService.getCurrentAwesomeList() !== undefined) {
      this.loadData();
    } else {
      this.awesomeService.getAwesomeList().subscribe(data => {
        this.awesomeService.setAwesomeList(data);
        this.loadData();
      });
    }
  }

  loadData() {
    this.awesomes = this.awesomeService.getCurrentAwesomeList();
  }

  goToEdit(item: Awesome) {
    this.dataTransfer.setData(item);
    this.router.navigateByUrl('/edit');
  }
}
