import { Component } from '@angular/core';
import { DigimonesServices } from './digimones-jagf/digimones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsumirAPI-JAGF';
  digimones:any;

  constructor(public digimon:DigimonesServices) {}

  ngOnInit() {
    this.digimon.getDigimones().subscribe
    (
      (r) => {this.digimones = r; console.log(r) },
      (e) => {console.error(e) }
    )
  }

}
