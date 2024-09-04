import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Chart, ChartModule } from 'angular-highcharts';
import { Options, SeriesOptionsType } from 'highcharts';

export type Skill_ExpT = {
  category: 'Backend Development' | 'Frontend Development' | 'Database and Deployment';
  technologies: Array<string>;
}

type highlightedCategory = {
  category?: string;
  color?: string;
};

@Component({
  selector: 'skills-and-experience',
  templateUrl: './skills-and-experience.component.html',
  styleUrls: ['./skills-and-experience.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, MatCardModule, ChartModule]
})
export class SkillsAndExperienceComponent  implements OnInit {
  @Input({required: true}) skills_exp!: Array<Skill_ExpT>;
  @Input({required: true}) description!: string;

  selectedCategory: highlightedCategory = {};

  chartOptions: Options = {
    chart: {
      plotShadow: false,
      type: 'pie'
    },
    
    title: {
      text: ''
    },
    accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          borderRadius: 5,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
              distance: -50,
              filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 4
              }
          }
      }
  },
    series: []
  };

  chart: Chart = new Chart();

  ngOnInit() {
    this.setPieChartData();
  }

  

  private setPieChartData() {
    const chartOptions = {...this.chartOptions};
    const totalTech = this.skills_exp.flatMap(x => x.technologies).length;
    let data: Array<object> = [];
 
    this.skills_exp.forEach((x) => {
      const percentage = (x.technologies.length / totalTech) * 100;

      data.push({
        name: x.category,
        y: percentage
      })
    });

    chartOptions.series = [
      {
        name: 'Percentage',
        colorByPoint: true,
        data: data,
        point:{
          events:{
              click: (event) => {
                if(event.point.name !== this.selectedCategory.category)  this.selectedCategory = {category: event.point.name, color: String(event.point.color)};
                else this.selectedCategory = {};
              }
          }
        }            
      } as SeriesOptionsType
    ];

    this.chart = new Chart(chartOptions);
  };


}
