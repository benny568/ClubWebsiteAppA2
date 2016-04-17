System.register(['angular2/core', 'angular2/router', './services/session-data.service', './components/viewTeam.component', "./components/home.component", "./components/far.component", "./components/findUs.component", "./components/messageUs.component", "./components/contactUs.component", "./components/downloads.component", "./components/links.component", "./components/academyHome.component", "./components/clubHistory.component", "./components/merchandise.component", './components/test.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, session_data_service_1, viewTeam_component_1, home_component_1, far_component_1, findUs_component_1, messageUs_component_1, contactUs_component_1, downloads_component_1, links_component_1, academyHome_component_1, clubHistory_component_1, merchandise_component_1, test_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (viewTeam_component_1_1) {
                viewTeam_component_1 = viewTeam_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (far_component_1_1) {
                far_component_1 = far_component_1_1;
            },
            function (findUs_component_1_1) {
                findUs_component_1 = findUs_component_1_1;
            },
            function (messageUs_component_1_1) {
                messageUs_component_1 = messageUs_component_1_1;
            },
            function (contactUs_component_1_1) {
                contactUs_component_1 = contactUs_component_1_1;
            },
            function (downloads_component_1_1) {
                downloads_component_1 = downloads_component_1_1;
            },
            function (links_component_1_1) {
                links_component_1 = links_component_1_1;
            },
            function (academyHome_component_1_1) {
                academyHome_component_1 = academyHome_component_1_1;
            },
            function (clubHistory_component_1_1) {
                clubHistory_component_1 = clubHistory_component_1_1;
            },
            function (merchandise_component_1_1) {
                merchandise_component_1 = merchandise_component_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_dataService, _router) {
                    this._dataService = _dataService;
                    this._router = _router;
                    this.componentName = 'AppComponent';
                    this.logHdr = "#### " + this.componentName + ": ";
                }
                /**********************************************************
                 * Name:		goHome()
                 * Description:	Navigate to the home page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.goHome = function () {
                    console.log(this.logHdr + "->" + "goHome()");
                    //this._dataService.loadNewsStories();
                    this._dataService.loadCurrentSponsors();
                    //console.log(this.logHdr + "News: " + this._dataService.dsNewsStories );
                    console.log(this.logHdr + "Sponsors: " + this._dataService.dsSponsors);
                    this._router.navigate(['Home', {}]);
                };
                AppComponent.prototype.viewTeam = function (tname) {
                    console.log("#### " + this.componentName + "->" + "viewTeam(" + tname + ")");
                    this._dataService.getTeams();
                    this._dataService.loadCurrentTeamMembersByName(tname);
                    this._router.navigate(['ViewTeam', { team: tname }]);
                };
                /**********************************************************
                 * Name:		goHome()
                 * Description:	Navigate to the home page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.farView = function (tname) {
                    console.log("#### " + this.componentName + "->" + "farView(" + tname + ")");
                    this._dataService.getTeams();
                    this._dataService.loadCurrentTeamMembersByName(tname);
                    this._router.navigate(['FarView', { team: tname }]);
                };
                /**********************************************************
                 * Name:		findUs()
                 * Description:	Navigate to the location page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.findUs = function () {
                    console.log("#### " + this.componentName + "->" + "findUs()");
                    this._router.navigate(['FindUs', {}]);
                };
                /**********************************************************
                 * Name:		messageUs()
                 * Description:	Navigate to the email page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.messageUs = function () {
                    console.log("#### " + this.componentName + "->" + "messageUs()");
                    this._router.navigate(['MessageUs', {}]);
                };
                /**********************************************************
                 * Name:		contactUs()
                 * Description:	Navigate to the contacts page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.contactUs = function () {
                    console.log("#### " + this.componentName + "->" + "contactUs()");
                    this._router.navigate(['ContactUs', {}]);
                };
                /**********************************************************
                 * Name:		downloads()
                 * Description:	Navigate to the downloads page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.downloads = function () {
                    console.log("#### " + this.componentName + "->" + "downloads()");
                    this._router.navigate(['Downloads', {}]);
                };
                /**********************************************************
                 * Name:		links()
                 * Description:	Navigate to the downloads page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.links = function () {
                    console.log("#### " + this.componentName + "->" + "links()");
                    this._router.navigate(['Links', {}]);
                };
                /**********************************************************
                 * Name:		academyHome()
                 * Description:	Navigate to the downloads page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.academyHome = function () {
                    console.log("#### " + this.componentName + "->" + "academyHome()");
                    this._router.navigate(['AcademyHome', {}]);
                };
                /**********************************************************
                 * Name:		clubHistory()
                 * Description:	Navigate to the downloads page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.clubHistory = function () {
                    console.log("#### " + this.componentName + "->" + "clubHistory()");
                    this._router.navigate(['ClubHistory', {}]);
                };
                /**********************************************************
                 * Name:		merchandise()
                 * Description:	Navigate to the downloads page
                 * Scope:		Internally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                AppComponent.prototype.merchandise = function () {
                    console.log("#### " + this.componentName + "->" + "merchandise()");
                    this._router.navigate(['Merchandise', {}]);
                };
                AppComponent.prototype.test = function () {
                    console.log("#### " + this.componentName + "->" + "test()");
                    this._router.navigate(['Test', {}]);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/htmltemplates/nav.component.html',
                        styles: ["\n            .header\n            {\n                background-image: url(\"/images/banner.png\");\n                background-size: cover;\n                min-height:110px;\n                position:relative;\n                margin-top:5px;\n            }\n            .t2\n            {\n                position:absolute;\n                top:0px;\n                left:0px;\n                height:110px;\n            }\n            "],
                        //stylesUrl: '/app/styles/nav.component.css',
                        directives: [router_1.ROUTER_DIRECTIVES, test_component_1.Test],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/viewTeam:team', name: 'ViewTeam', component: viewTeam_component_1.ViewTeam },
                        { path: '/farView:team', name: 'FarView', component: far_component_1.FarViewComponent },
                        { path: '/findUs', name: 'FindUs', component: findUs_component_1.FindUsComponent },
                        { path: '/messageUs', name: 'MessageUs', component: messageUs_component_1.MessageUsComponent },
                        { path: '/contactUs', name: 'ContactUs', component: contactUs_component_1.ContacteUsComponent },
                        { path: '/downloads', name: 'Downloads', component: downloads_component_1.DownloadsComponent },
                        { path: '/links', name: 'Links', component: links_component_1.LinksComponent },
                        { path: '/academyHome', name: 'AcademyHome', component: academyHome_component_1.AcademyHomeComponent },
                        { path: '/clubHistory', name: 'ClubHistory', component: clubHistory_component_1.ClubHistoryComponent },
                        { path: '/merchandise', name: 'Merchandise', component: merchandise_component_1.MerchandiseComponent },
                        { path: '/test', name: 'Test', component: test_component_1.Test }
                    ]), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService, router_2.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map