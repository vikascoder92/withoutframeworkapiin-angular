import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Posts } from '../classes/post';

@Injectable()
export class Api{
    constructor(private httpclient:HttpClient){

    }

    getcomments():Observable<any>{
        return this.httpclient.get("http://dummy.restapiexample.com/api/v1/employees")
    }

    getcommnetsbtparameter():Observable<any>{
       let params1=new HttpParams().set('id',"1");
       return this.httpclient.get("http://dummy.restapiexample.com/api/v1/employee/117385" ,{params:params1})
    }

    getPost(postData:Posts):Observable<any>{
        return this.httpclient.post("http://dummy.restapiexample.com/api/v1/create",postData);
    }

   

}