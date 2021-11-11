import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpurpose',
  templateUrl: './testpurpose.component.html',
  styleUrls: ['./testpurpose.component.css']
})
export class TestpurposeComponent implements OnInit {

  constructor() { }
  componentName = "HelloWorld";
  ngOnInit(): void {
  }
  Sum()
  {
  return 100;
  }
  
}
