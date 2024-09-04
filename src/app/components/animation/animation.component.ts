import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, BMCompleteEvent, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  standalone: true,
  imports: [LottieComponent]
})
export class AnimationComponent  implements OnInit {

  @Input() height: string = '350px';
  @Input() width: string = '350px';

  @Input({required: true}) public src!: string;

  @Input() loop?: boolean;

  @Output() onAnimationComplete = new EventEmitter<BMCompleteEvent>();

  options: AnimationOptions = {
    path: '',
    autoplay: false,
    loop: true
  };

  ngOnInit() {
    this.options = {
      ...this.options,
      path: this.src,
      loop: Boolean(this.loop)
    }
  }

  lottieAnimationCreated(animationItem: AnimationItem): void {
    animationItem.play();
  }

  lottieAnimationCompleted(animationItem: BMCompleteEvent) {
    this.onAnimationComplete.emit(animationItem)
  }

  lottieError(event: any) {
    console.error(event);
  }

}
