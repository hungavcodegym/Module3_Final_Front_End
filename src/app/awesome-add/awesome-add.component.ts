import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../awesome.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Awesome} from '../awesome';

@Component({
  selector: 'app-awesome-add',
  templateUrl: './awesome-add.component.html',
  styleUrls: ['./awesome-add.component.scss']
})
export class AwesomeAddComponent implements OnInit {

  awesomeForm: FormGroup;

  constructor(private awesomeService: AwesomeService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.awesomeForm = this.fb.group({
      id: [''],
      tag: [''],
      url: [''],
      descriptions: ['']
    });
  }

  onSubmit() {
    this.awesomeService.addAwesome(this.awesomeForm.value);
    this.router.navigateByUrl('/');
  }
}
