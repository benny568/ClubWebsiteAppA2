/**
 * Created by odalybr on 09/04/2016.
 */
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import { SessionDataService }   from '../services/session-data.service';


/*Angular 2 Carousel - Gallery*/
@Component({
    template:`
                    <div class="row">
                      <div class="col-md-12">
                        <carousel [interval]="NextPhotoInterval">
                          <slide *ngFor="#story of _dataService.dsNewsStories">
                          </slide>
                        </carousel>
                      </div>
                    </div>
             `,
    directives: [Slide,Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES],
})
export class Test  {
    //The time to show the next photo
    private NextPhotoInterval:number = 5000;
    //Looping or not
    private noLoopSlides:boolean = true;
    //Photos
    private slides:Array<any> = [];

    private componentName:string = "NewsComponent";

    constructor(private _dataService: SessionDataService) {
        this.addNewSlide();
    }

    ngOnInit() {
        console.log("### " + this.componentName + " -> ngOnInit()")
        this._dataService.loadNewsStories();
    }

    private addNewSlide() {
        this.slides.push(
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg',text:'BMW 1'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'}
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }
}