/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestcaseService } from './testcase.service';

describe('TestcaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestcaseService]
    });
  });

  it('should ...', inject([TestcaseService], (service: TestcaseService) => {
    expect(service).toBeTruthy();
  }));
});
