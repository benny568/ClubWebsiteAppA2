/**
 * Created by odalybr on 06/04/2016.
 */
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import { Sponsor } from '/app/dao/sponsor';

@Component({
    selector: 'sponsors',
    templateUrl: '/app/htmltemplates/sponsors.component.html',
    directives: [ Slide, Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES ]
})

export class SponsorsComponent {
    sponsors:Array<Sponsor>;
    
    constructor() { }

    ngOnInit(){
        this.sponsors = [ {name:"Enzo's Takeaway", image:"./images/adverts/enzos.png"},
            {name:"Rochford's Pharmacy", image: "./images/adverts/main-sponsor.png"},
            {name:"Ennis Cabs", image: "./images/adverts/ec.png"}
        ];
    }
}