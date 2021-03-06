/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-12 13:44:31
 * @version $Id$
 */
import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {HeroService} from './hero.service';

import {Hero} from './hero';


@Component({
	selector:'hero-detail',
	templateUrl:'./app.hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{
	@Input()hero:Hero;
	constructor(
		private heroService:HeroService,
		private route:ActivatedRoute,
		private location:Location

	){};
	ngOnInit():void{
		this.route.paramMap.switchMap((params:ParamMap)=>this.heroService.getHero(+params.get('id'))).subscribe(hero=>this.hero = hero);
	}
}
