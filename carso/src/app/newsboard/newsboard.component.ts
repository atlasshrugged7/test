import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-newsboard',
  templateUrl: './newsboard.component.html',
  styleUrls: ['./newsboard.component.scss']
})
export class NewsboardComponent implements OnInit {

  //stories: Story[] = [];
  stories: any[] = [];

  constructor(private newsapi:NewsApiService) {
    this.newsapi.initArticles().subscribe(data => this.stories = data['articles']);

    let dateTime = new Date();
    for(var i of this.stories){
        i.publishedAt = dateTime.getTime() - i.publishedAt.getTime();
    }
  }
  ngOnInit(): void {
  }


}
