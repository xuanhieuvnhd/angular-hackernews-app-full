import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'Dự báo thời tiết',
      url: 'https://vtv.vn/truyen-hinh-truc-tuyen/vtv1/du-bao-thoi-tiet-0.htm'
    },
    {
      title: 'Báo 24h',
      url: 'https://www.24h.com.vn/'
    },
    {
      title: 'Facebook',
      url: 'https://facebook.com/'
    },
    {
      title: 'CodeGym',
      url: 'https://codegym.vn/'
    },
    {
      title: 'youtube',
      url: 'https://youtube.com/'
    },
    {
      title: 'Hoàng Hiêu Shop',
      url: 'https://xuanhieuvnhd.github.io/shop/'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }
}
