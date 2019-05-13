import { Component, OnInit , ViewChild} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild('addNewsForm') addNewsForm: NgForm;

  constructor( private httpserv:Http) { }

   /***Getnews ***/
   News = [];

   getNews = function(){
     this.httpserv.get("http://localhost:8000/news").subscribe(
       (res:Response) => {
         this.News = res.json();
       }
     )
   }

  //AddNews

  NewsObj: any

  addNews =  function(data){
    this.NewsObj = {
      "id": data.id,
      "title":data.title,
      "news": data.news
    }
    this.httpserv.post("http://localhost:8000/news",this.NewsObj).subscribe( (res:Response) => {
      console.log(res);
    }  )

    this.NewsObj.reset()
  }

  ngOnInit() {
    this.getNews();
  }

}
