import {Component, OnInit} from '@angular/core';
import {Awesome} from '../awesome';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AwesomeService} from '../awesome.service';
import {Router} from '@angular/router';
import {DataTransferService} from '../data-transfer.service';

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.scss']
})
export class AwesomeEditComponent implements OnInit {
  awesomes: Awesome[];
  awesome: Awesome;
  awesomeForm: FormGroup;

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router,
              private dataTransfer: DataTransferService) {
  }

  ngOnInit() {
    this.awesome = this.dataTransfer.getData();
    this.awesomeForm = this.fb.group({
      id: [this.awesome.id],
      tag: [this.awesome.tag],
      url: [this.awesome.url],
      descriptions: [this.awesome.descriptions],
    });
  }

  loadData() {
    this.awesomes = this.awesomeService.getCurrentAwesomeList();
  }

  onSubmit() {
    this.awesomeService.editAwesome(this.awesomeForm.value);
    this.router.navigateByUrl('/');
  }

  deleteAwesome(item: Awesome) {
    if (confirm('Are you sure?')) {
      this.awesomeService.deleteAwesome(item);
      this.loadData();
    }
  }
}
