System.register(['angular2/core', 'angular2/common', './slide.component', './carousel.component', '../services/session-data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, slide_component_1, carousel_component_1, session_data_service_1;
    var Test;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (slide_component_1_1) {
                slide_component_1 = slide_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            }],
        execute: function() {
            /*Angular 2 Carousel - Gallery*/
            Test = (function () {
                function Test(_dataService) {
                    this._dataService = _dataService;
                    //The time to show the next photo
                    this.NextPhotoInterval = 5000;
                    //Looping or not
                    this.noLoopSlides = true;
                    //Photos
                    this.slides = [];
                    this.componentName = "NewsComponent";
                    this.addNewSlide();
                }
                Test.prototype.ngOnInit = function () {
                    console.log("### " + this.componentName + " -> ngOnInit()");
                    this._dataService.loadNewsStories();
                };
                Test.prototype.addNewSlide = function () {
                    this.slides.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
                };
                Test.prototype.removeLastSlide = function () {
                    this.slides.pop();
                };
                Test = __decorate([
                    core_1.Component({
                        template: "\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <carousel [interval]=\"NextPhotoInterval\">\n                          <slide *ngFor=\"#story of _dataService.dsNewsStories\">\n                          </slide>\n                        </carousel>\n                      </div>\n                    </div>\n             ",
                        directives: [slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], Test);
                return Test;
            }());
            exports_1("Test", Test);
        }
    }
});
//# sourceMappingURL=test.component.js.map