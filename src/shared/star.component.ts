import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'pm-star',
  templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked = new EventEmitter<string>();

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`the rating |${this.rating}`);
  }
}
