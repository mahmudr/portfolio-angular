import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit, ViewChild } from '@angular/core';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

export type ProjectT = {
  name: string;
  shortDesc: string;
  href?: string;
  photoName: string;
}
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonCardContent, IonCard, MatCardModule, MatIconModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent  implements OnInit {
  @Input({required: true}) projects!: Array<ProjectT>;
  windowWidth: number = 1920; // default width is 1920
  private window = window;


  ngOnInit() {
    this.windowWidth = this.window.innerWidth;
  }

  goToLink(href: string) {
    this.window.open(href, '_blank')
  }

  
}
