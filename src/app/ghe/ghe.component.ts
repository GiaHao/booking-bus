import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  @Input() ghe: any;
  @Output() gheButton = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleChoice(button: any) {
    if (!button.classList.contains('choiced') && !this.ghe.TrangThai) {
      button.classList.add('choiced');
      button.disabled = true;
      this.gheButton.emit([this.ghe, button]);
    } else {
      button.disabled = false;
      button.classList.remove('choiced');
    }
  }
}
