import { Component, inject } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { HttpService } from '../../../services/http.service';
@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './graphics.component.html'
})
export class GraphicsComponent {
  single =[{
    "name": "Completas",
    "value": 0
  },
  {
    "name": "Incompletas",
    "value": 0
  }
  ];
  view: [number,number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  taskList: any[] = [];
  httpService = inject(HttpService);
  colorScheme = {
    domain: ['#5AA454','#C7B42C', '#AAAAAA']
  };

  constructor() {

    //Object.assign(this, { single });
  }

  ngOnInit(){
    this.getAllTasks();
  }

  transformData(data: any[]): { name: string, value: any }[] {
    let completados = data.filter(item => item.completed === true);

    return [
      { 'name': 'Completas', value: completados.length },
      { 'name': 'Incompletas', value: data.length - completados.length }
    ];
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
     this.single = this.transformData(result)
    });
  }


  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
