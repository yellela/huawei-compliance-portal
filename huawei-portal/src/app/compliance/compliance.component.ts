import { Component, OnInit, ViewChild, OnDestroy, Input,HostListener,AfterViewInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { Architecture } from '../archicture';
import { DataTableDirective } from 'angular-datatables';
//import { TestcaseService } from '../services/testcase.service';



import { Subject } from 'rxjs';

import { Observable } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.css'],
  //providers:[TestcaseService]
})
export class ComplianceComponent implements OnDestroy, OnInit  {

@ViewChild(DataTableDirective)
dtElement: DataTableDirective;

constructor(private router:Router, private route:ActivatedRoute, private httpserv:Http ) { }

@Input('productArchitecture') productArchitecture: Architecture;


selectedIndex = -1;

showDiv(index) {
  this.selectedIndex = index;
}

showArchicture1=true;


  

  //// getting product archicture Details

  ArchictureDetails = [];

  getArchictureDetails = function(){
    this.httpserv.get("data/Architecture.json").subscribe(
      (res:Response) => {
        this.ArchictureDetails = res.json();

      }
    )
  }




  dtOptions: DataTables.Settings = {};


  dtTrigger: Subject<any> = new Subject();


  @ViewChild('addTestcaseForm') addTestcaseForm: NgForm;

  

  id:number;


  private headers = new Headers({'Content-Type':'application/json'});

 /***GetAlltestcases ***/
  TestCases = [];

  getTestcase = function(){
    this.httpserv.get("http://localhost:3000/Testcases").subscribe(
      (res:Response) => {
        this.TestCases = res.json();

        this.dtTrigger.next();
      }
    )
  }
  /****Deletetestcase****/
  deleteTestcase = function(id){
    if(confirm("Are sure sure ?")){
      const url = `${"http://localhost:3000/Testcases"}/${id}`;
      return this.httpserv.delete(url, {headers: this.headers}).toPromise().then(
        () => {
          this.getTestcase();
        }
      )
    }
  }

  //////////Addtestcase///////////////

  TestcaseObj: any

  addNewTestcase =  function(data){
    this.TestcaseObj = {
      "id": data.id,
      "Desc":data.Desc,
      "Case": data.testcase
    }
    this.httpserv.post("http://localhost:3000/Testcases",this.TestcaseObj).subscribe( (res:Response) => {
      console.log(res);
    }  )

    this.addTestcaseForm.reset()
  }

  ///////////////Update Testcase/////////////////

  pastData:any;
  testcase = [];
  exist = false;
  testcaseUpdateObj:any;

  upDateTestcases(test){
    this.testcaseUpdateObj = {
      "Case": test.testcase,
      "Desc":test.Desc
    };
    const url = `${"http://localhost:3000/Testcases"}/${this.id}`;
    this.httpserv.put(url, JSON.stringify(this.testcaseUpdateObj), {headers: this.headers})
    .toPromise().then(
      () => {
     console.log(this.testcaseUpdateObj);
      }
    )
}


  ngOnInit() {

  

  //For loading product1 Archicture1

  this.selectedIndex = 1

  ///////For paginaton /////////
  
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

   // calling testcase Details onload
  
    this.getTestcase();

  // calling Archicture Details onload

    this.getArchictureDetails();

   // list Test case details in form

    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });
    this.httpserv.get("http://localhost:3000/Testcases").subscribe(
      (res:Response) => {
        this.testcase = res.json();
        for(var i = 0; i< this.testcase.length; i++){
          if(parseInt(this.testcase[i].id) === this.id){
            this.exist = true;
            this.pastData = this.testcase[i];
            break;
          }
          else{
              this.exist = false;
          }
        }

      }

    )
  }

  

  // Remove the Table Details

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}
