import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Testcase }  from './testcase.model'

@Injectable()
export class TestcaseService {

  selectedTestCase: Testcase;
  testCases:Testcase[];

  constructor(private Httpserv:Http ) { }

  

}
