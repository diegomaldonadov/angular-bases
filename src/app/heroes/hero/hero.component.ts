import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getHeroDescription(): string {
    return `The super hero is ${ this.name } and is  ${ this.age } years old.`
  }

  changeHero(name?: string, age?: number) {
    this.name = 'spiderman';
    this.age = 25;
  }

  resetDefaultHero():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
