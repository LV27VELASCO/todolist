import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './page-title.component.html'
})
export class PageTitleComponent {
  @Input() total:number=0;
  dateNow=new Date();
}
