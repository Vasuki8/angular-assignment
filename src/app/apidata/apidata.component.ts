import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apidata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.scss'],
})
export class ApidataComponent implements OnInit {
  constructor(private dataService: ApiDataService) {}

  articles: any[] = [];

  ngOnInit(): void {
    this.dataService.getItems('technology').subscribe((data) => { // Example query parameter
      this.articles = data.articles.slice(0, 10);
      console.log('Data ==> ', this.articles);
    });
  }
}
