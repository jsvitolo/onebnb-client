import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private event: KeyboardEvent;
  private query = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  private onEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.query !== '') {
      this.search();
    }
  }

  search() {
    this.route.queryParams.subscribe(params => {
      const parameters = new URLSearchParams();
      for (const f in params) {
        if (f !== 'search') {
          parameters.set(f, params[f]);
        }
      }
      this.router.navigateByUrl(`results?search=${this.query}&${parameters.toString()}`);
    });
  }

}
