import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
