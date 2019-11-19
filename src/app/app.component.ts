import { Component } from '@angular/core';
import {Api} from './services/Api.compnent';
import { Comments } from './classes/comments';
import { Getparameter } from './classes/getparameter';
import { Posts } from './classes/post';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpenSignUp:boolean;
  constructor(private _Api:Api, private router:Router){
  }
  lstcomments:Comments[];
  lstPosts:Getparameter;
  oposts:Posts;

  ngOnInit(): void { 
    
   this._Api.getcomments()
   .subscribe(
     data=>
     {
       this.lstcomments=data; 
     }

   );

   this._Api.getcommnetsbtparameter()
   .subscribe
   (
     data=>
     {
        this.lstPosts =data;
     }
   );  
   
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

    openComponent(){
      this.isOpenSignUp =true;
    }
    closeComponent(){
      this.isOpenSignUp=false
    }
    
}
