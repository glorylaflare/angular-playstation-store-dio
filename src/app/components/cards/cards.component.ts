import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input()
  gameCover:string=""
  @Input()
  gameLabelP5:string=""
  @Input()
  gameLabelP4:string=""
  @Input()
  gameName:string=""
  @Input()
  gamePrice:string=""
  @Input()
  gameStatus:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
