import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{
  
  constructor(private api: NewsapiService) {}
  topHeadlinesData: any[] = [];

  ngOnInit(): void {
    this.api.topHeadlines().subscribe((result: any) => {
      console.log(result);
      this.topHeadlinesData = result.articles;
    })
  }

}
