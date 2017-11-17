/**{}
 * @authors Your Name (you@example.org)
 * @date    2017-11-14 13:06:06
 * @version $Id$
 */

import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service'

@Component({
	selector:'my-dashboard',
	templateUrl:'./dashboard.component.html'
})

export class DashboardComponent implements OnInit {
	heroes:Hero[];

	constructor(private heroService :HeroService){};

	ngOnInit():void{
		this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5));
	}
}