System.register(['angular2/core', '../dao/team'], function(exports_1, context_1) {
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
    var core_1, team_1;
    var ServerDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (team_1_1) {
                team_1 = team_1_1;
            }],
        execute: function() {
            ServerDataService = (function () {
                function ServerDataService() {
                    this.serviceName = 'ServerDataService';
                    this.loghdr = '==> ' + this.serviceName;
                }
                ServerDataService.prototype.ngOnInit = function () {
                    console.log("### " + this.serviceName + "->" + "ngOnInit()");
                };
                /**********************************************************
                 * Name:		getTeams()
                 * Description:	Retrieve list of teams from Server
                 * Scope:		Externally accessible
                 * Params in:	None
                 * Return:		The array of teams
                 **********************************************************/
                ServerDataService.prototype.getTeams = function () {
                    console.log("### " + this.serviceName + "->" + "getTeams()");
                    var sdsTeams;
                    return sdsTeams;
                };
                /**********************************************************
                 * Name:		getNewsStories()
                 * Description:	Retrieve list of news from Server
                 * Scope:		Externally accessible
                 * Params in:	None
                 * Return:		The array of news stories
                 **********************************************************/
                ServerDataService.prototype.getNewsStories = function (_home) {
                    console.log("### " + this.serviceName + "->" + "getNewsStories() from: " + _home);
                    var sdsNewsStories; // = new Array<NewsStory>();
                    // TODO: Get this data from the server
                    // var csrf = $("meta[name='_csrf']").attr("content");
                    // console.log(this.loghdr + "->getNewsStories() csrf token is: ",csrf);
                    // this._http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
                    // this._http.defaults.xsrfCookieName = 'CSRF-TOKEN';
                    // this._http.defaults.headers.post["Content-Type"] = "application/json";
                    // this._http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
                    // this._http.get( 'http://localhost:8080/clubRegisterApp/news')
                    //     .map(res => res.json )
                    //     .map((stories: Array<any>) =>
                    //     {
                    //         let result:Array<NewsStory> = [];
                    //         if (stories)
                    //         {
                    //             stories.forEach( (story) =>
                    //             {
                    //                 result.push(new NewsStory(  story.nsid,
                    //                                             story.category,
                    //                                             story.title,
                    //                                             story.description,
                    //                                             story.story,
                    //                                             story.image
                    //                                         ));
                    //             });
                    //         }
                    //         return result;
                    //     });
                    ///////////////////////////////////////
                    // var ns = new NewsStory( 1,
                    //     'G',
                    //     "This is the first story",
                    //     "The first test story.",
                    //     "Today, in Ennis, I created a test news story on my laptop. This is the first one.",
                    //     '/images/actionshots/1.jpg'
                    // );
                    // sdsNewsStories.push(ns);
                    // ns = new NewsStory( 1,
                    //     'G',
                    //     "This is the second story",
                    //     "The second test story.",
                    //     "Today, in Ennis, I created a second test news story on my laptop. This is the second one.",
                    //     '/images/actionshots/2.jpg'
                    // );
                    // sdsNewsStories.push(ns);
                    //s)
                    //return sdsNewsStories;
                };
                /**********************************************************
                 * Name:		getTeamDetailsByName()
                 * Description:	Retrieve details of a team from Server
                 * Scope:		Externally accessible
                 * Params in:	None
                 * Return:		The team details
                 **********************************************************/
                ServerDataService.prototype.getTeamDetailsByName = function (teamName) {
                    console.log("### " + this.serviceName + "->" + "getTeamDetailsByName(" + teamName + ")");
                    var sdsCurrentTeam = new team_1.Team();
                    if (teamName == 'U18') {
                        sdsCurrentTeam.id = 20;
                        sdsCurrentTeam.lrcode = 601128628;
                        sdsCurrentTeam.lrFixturesCode = 76715525;
                        sdsCurrentTeam.lrResultsCode = 745959074;
                        sdsCurrentTeam.name = 'U18';
                        sdsCurrentTeam.noticeboard = 'This is test data...';
                    }
                    else if (teamName == 'U17') {
                        sdsCurrentTeam.id = 19;
                        sdsCurrentTeam.lrcode = 235560328;
                        sdsCurrentTeam.lrFixturesCode = 76715525;
                        sdsCurrentTeam.lrResultsCode = 745959074;
                        sdsCurrentTeam.name = 'U18';
                        sdsCurrentTeam.noticeboard = 'This is test data...';
                    }
                    console.log("### " + this.serviceName + "->" + "getTeamDetailsByName(" + teamName + "): " + sdsCurrentTeam);
                    return sdsCurrentTeam;
                };
                /**********************************************************
                 * Name:		getTeamMembersByTeamName()
                 * Description:	Retrieve details of a team from Server
                 * Scope:		Externally accessible
                 * Params in:	None
                 * Return:		The team details
                 **********************************************************/
                ServerDataService.prototype.getTeamMembersByTeamName = function (teamName) {
                    console.log("### " + this.serviceName + "->" + "getTeamMembersByTeamName()");
                    // Load the member data
                    var sdsTeamMembers = new Array();
                    var tmpMem;
                    tmpMem = {
                        name: 'Killian O\'Daly',
                        address: 'Reaskaun, Larchill, Ennis',
                        phone: '123456787',
                        phone2: '',
                        dob: '16/08/1998',
                        email: 'odalyki@outlook.com',
                        amount: '0',
                        receiptid: '',
                        team: 20,
                        team2: 6,
                        team3: 22,
                        position: 5,
                        position2: 6,
                        position3: 7,
                        lid: 0,
                        favteam: 'Manchester United',
                        favplayer: 'Lionel Messi',
                        sappears: 20,
                        sassists: 5,
                        sgoals: 6,
                        photo: '/images/Players/U18/KillianODaly.png',
                        achievements: '',
                        status: 'ENABLED'
                    };
                    sdsTeamMembers.push(tmpMem);
                    console.log("### " + this.serviceName + "->" + "getTeamMembersByTeamName(): Added " + tmpMem);
                    tmpMem = {
                        name: 'Paddy Honan',
                        address: 'Bank Place, Ennis',
                        phone: '56789005',
                        phone2: '',
                        dob: '11/10/1998',
                        email: 'paddy@outlook.com',
                        amount: '0',
                        receiptid: '',
                        team: 20,
                        team2: 6,
                        team3: 22,
                        position: 5,
                        position2: 6,
                        position3: 7,
                        lid: 0,
                        favteam: 'Manchester United',
                        favplayer: 'Lionel Messi',
                        sappears: 20,
                        sassists: 5,
                        sgoals: 6,
                        photo: '/images/Players/default.png',
                        achievements: '',
                        status: 'ENABLED'
                    };
                    sdsTeamMembers.push(tmpMem);
                    console.log("### " + this.serviceName + "->" + "getTeamMembersByTeamName(): Added " + tmpMem);
                    tmpMem = {
                        name: 'Brendan O\'Daly',
                        address: 'Reaskaun, Ennis',
                        phone: '087 6470883',
                        phone2: '',
                        dob: '11/05/1968',
                        email: 'odalybr@hotmail.com',
                        amount: '0',
                        receiptid: '',
                        team: 20,
                        team2: 6,
                        team3: 22,
                        position: 0,
                        position2: 0,
                        position3: 0,
                        lid: 0,
                        favteam: 'Manchester United',
                        favplayer: 'Paul Scoles',
                        sappears: 20,
                        sassists: 5,
                        sgoals: 6,
                        photo: '/images/Players/default.png',
                        achievements: 'Managed this team since the academy.',
                        status: 'ENABLED'
                    };
                    sdsTeamMembers.push(tmpMem);
                    console.log("### " + this.serviceName + "->" + "getTeamMembersByTeamName(): Added " + tmpMem);
                    tmpMem = {
                        name: 'Patrick McDaid',
                        address: '12 Oak Park, Ennis',
                        phone: '087 6499564',
                        phone2: '',
                        dob: '11/09/1998',
                        email: 'pa@hotmail.com',
                        amount: '0',
                        receiptid: '',
                        team: 20,
                        team2: 6,
                        team3: 22,
                        position: 99,
                        position2: 0,
                        position3: 0,
                        lid: 0,
                        favteam: 'Arsnel',
                        favplayer: 'Joe Hart',
                        sappears: 20,
                        sassists: 5,
                        sgoals: 6,
                        photo: '/images/Players/default.png',
                        achievements: 'Captian of Clare Youths.',
                        status: 'ENABLED'
                    };
                    sdsTeamMembers.push(tmpMem);
                    console.log("### " + this.serviceName + "->" + "getTeamMembersByTeamName(): Added " + tmpMem);
                    return sdsTeamMembers;
                };
                ServerDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ServerDataService);
                return ServerDataService;
            }());
            exports_1("ServerDataService", ServerDataService);
        }
    }
});
//# sourceMappingURL=server-data.service.js.map