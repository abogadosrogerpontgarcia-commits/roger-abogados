import { Component, Input } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-practice-area-card',
  imports: [NgIconsModule],
  templateUrl: './practice-area-card.component.html',
  styleUrl: './practice-area-card.component.css'
})
export class PracticeAreaCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
