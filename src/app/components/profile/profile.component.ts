import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonCard, IonCardContent, IonChip, } from "@ionic/angular/standalone";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider'

export type LinksT = {
  href: string,
  name: string
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule, MatDividerModule, IonChip, IonCardContent, IonCard]
})
export class ProfileComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) jobTitle!: string;
  @Input({ required: true }) location!: string;
  @Input({ required: true }) links!: Array<LinksT>;
  @Input({ required: true }) about_me!: string;
  // @Input({ required: true }) skills!: Array<string>;

  window = window;
  time?: string;

  constructor() {
    setInterval(() =>{
      const currentDate = new Date();
      this.time = currentDate.toLocaleTimeString("en-ZA", { hour12: true });
    }, 1000);
  }

  ngOnInit() {

  }

}
