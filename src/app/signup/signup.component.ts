import { Component, OnInit } from '@angular/core';
import { Posts } from '../classes/post';
import { Api } from '../services/Api.compnent';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isOpenSignUp:boolean;
  
  oposts:Posts;
  constructor(private _Api:Api,) { }

  ngOnInit() {
    this.oposts = new Posts();
  }
  onClickSubmit(){
    console.log(this.oposts);
    this._Api.getPost(this.oposts)
    .subscribe(
      data =>{
        console.log(data);
      }
    );
    }
}
