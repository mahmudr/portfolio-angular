import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
@Component({
  selector: 'education-and-work-history',
  templateUrl: './education-and-work-history.component.html',
  styleUrls: ['./education-and-work-history.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, IonCardSubtitle, IonCardTitle, IonCardContent, IonCardHeader, IonCard]
})
export class EducationAndWorkHistoryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
