import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private httpserv:Http) { }

  id:number;

  private headers = new Headers({'Content-Type':'application/json'});

  @ViewChild('report') report: NgForm;

  reports = [];

  getReport = function(){
    this.httpserv.get("http://localhost:4000/reports").subscribe(
      (res:Response) => {
        this.reports = res.json();
      }
    )
  }

  ReportObj: any

  newReport =  function(data){
    this.ReportObj = {
      "id": data.id,
      "product": data.product,
      "Testcase": data.testcase,
      "Address": data.address
    }
    this.httpserv.post("http://localhost:4000/reports",this.ReportObj).subscribe( (res:Response) => {
      console.log(res);

    this.report.reset()
    this.getReport()
    }  )

  }

  ngOnInit() {
    this.getReport()
  }

}
