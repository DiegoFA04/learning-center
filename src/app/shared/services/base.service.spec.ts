import { BaseService } from './base.service';
import * as http from "node:http";
import {HttpClient} from "@angular/common/http";


describe('BaseService', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new BaseService()).toBeTruthy();
  });
});
