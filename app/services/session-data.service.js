System.register(['angular2/core', 'angular2/http', '../dao/site-user', '../dao/server-mode', '../dao/team', '../dao/member', "./server-data.service"], function(exports_1, context_1) {
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
    var core_1, http_1, site_user_1, server_mode_1, team_1, member_1, server_data_service_1;
    var SessionDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (site_user_1_1) {
                site_user_1 = site_user_1_1;
            },
            function (server_mode_1_1) {
                server_mode_1 = server_mode_1_1;
            },
            function (team_1_1) {
                team_1 = team_1_1;
            },
            function (member_1_1) {
                member_1 = member_1_1;
            },
            function (server_data_service_1_1) {
                server_data_service_1 = server_data_service_1_1;
            }],
        execute: function() {
            SessionDataService = (function () {
                function SessionDataService(_http, _sds) {
                    this._http = _http;
                    this._sds = _sds;
                    this.modes = { LOCAL: 0, REMOTE: 1 };
                    this.serviceName = 'SessionDataService';
                    this.displayMember = false;
                    var svr = new server_mode_1.ServerMode();
                    this.CurrentServerMode = svr.getServerMode();
                    this.dsPosition = ['Manager', 'Goalkeeper', 'Full Back', 'Center Half', 'Mid Field', 'CAM', 'Winger', 'Striker', 'Chairman', 'Secretary', 'Treasurer', 'PRO', 'Committee'];
                    this.dsCurrentUser = new site_user_1.User();
                    this.dsCurrentTeam = new team_1.Team();
                    this.dsCurrentMember = new member_1.Member();
                    this.dsTeams = new Array();
                    this.dsTeamMembers = new Array();
                    this.dsCurrentUser = new site_user_1.User();
                    this.dsAllMembers = new Array();
                    this.dsNewsStories = new Array();
                    this.dsSponsors = new Array();
                }
                /**********************************************************
                 * Name:		setCurrentMember()
                 * Description:	Set the current member to the one passed in
                 * Scope:		Externally accessible
                 * Params in:	member: the member in question
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.setCurrentMember = function (member) {
                    console.log("### " + this.serviceName + "->" + "setCurrentMember()");
                    this.dsCurrentMember = member;
                    this.displayMember = true;
                };
                /**********************************************************
                 * Name:		hasPermission()
                 * Description:	Check the user's permission to perform the
                 * 				given action
                 * Scope:		Externally accessible
                 * Params in:	action: the action being requested
                 * Return:		true or false depending on the permissions
                 **********************************************************/
                SessionDataService.prototype.hasPermission = function (action, params) {
                    var team = '';
                    var allow = false;
                    var index = 0;
                    if (typeof action === undefined || params === undefined)
                        return false;
                    for (var r = 0; r < this.dsCurrentUser.roles.length; r++) {
                        if (this.dsCurrentUser.roles[r] === "ROLE_SUPER") {
                            // Super user has permissions to do anything
                            //log.trace(loghdr + " -> hasPermission("+action+"): YES");
                            return true;
                        }
                    }
                    switch (action) {
                        case 'MANAGE_TEAM':
                            team = params;
                            // Check if the user is a manager of this team
                            for (var i = 0; i < this.dsCurrentUser.permissions.teams.length; i++) {
                                for (var t = 0; t < this.dsTeams.length; t++) {
                                    if (this.dsTeams[t].id === this.dsCurrentUser.permissions.teams[i]) {
                                        index = t;
                                        break;
                                    }
                                }
                                if (this.dsTeams[index].name === team) {
                                    if (this.dsCurrentUser.permissions.positions[i] == 0) {
                                        allow = true;
                                        break;
                                    }
                                }
                            }
                            break;
                        case 'ADD_TEAM':
                        case 'EDIT_TEAM':
                            for (var r = 0; r < this.dsCurrentUser.roles.length; r++) {
                                if (this.dsCurrentUser.roles[r] === "ROLE_SUPER") {
                                    // Super user has permissions to do anything
                                    allow = true;
                                    break;
                                }
                                else if (this.dsCurrentUser.roles[r] === "ROLE_EDIT_TEAM") {
                                    allow = true;
                                    break;
                                }
                            }
                            break;
                        case 'DEL_TEAM':
                            for (var r = 0; r < this.dsCurrentUser.roles.length; r++) {
                                if (this.dsCurrentUser.roles[r] === "ROLE_SUPER") {
                                    // Super user has permissions to do anything
                                    allow = true;
                                    break;
                                }
                                else if (this.dsCurrentUser.roles[r] === "ROLE_DEL_TEAM") {
                                    allow = true;
                                    break;
                                }
                            }
                            break;
                        case 'ADD_USER':
                        case 'EDIT_USER':
                        case 'DELETE_USER':
                        case 'VIEW_USERS':
                            for (var r = 0; r < this.dsCurrentUser.roles.length; r++) {
                                if (this.dsCurrentUser.roles[r] === "ROLE_SUPER") {
                                    // Super user has permissions to do anything
                                    allow = true;
                                    break;
                                }
                            }
                            break;
                    }
                    return allow;
                };
                /**********************************************************
                 * Name:		difference()
                 * Description:	Checeks to see if there is a difference
                 *              between two objects
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.difference = function (m1, m2) {
                    var diff = false;
                    Object.getOwnPropertyNames(m1).forEach(function (val, idx, array) {
                        if (m1[val] != m2[val])
                            diff = true;
                    });
                    return diff;
                };
                /**********************************************************
                 * Name:		applyMemberChange()
                 * Description:	Applies a change to the local data so the
                 *              user sees the change on the view.
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.applyMemberChange = function (members, member) {
                    var index = SessionDataService.findMemberIndex(members, member);
                    if (index === -1) {
                        return;
                    }
                    members[index].name = member.name;
                    members[index].address = member.address;
                    members[index].phone = member.phone;
                    members[index].dob = member.dob;
                    members[index].email = member.email;
                    members[index].amount = member.amount;
                    members[index].team = member.team;
                    members[index].position = member.position;
                    members[index].lid = member.lid;
                    members[index].favteam = member.favteam;
                    members[index].favplayer = member.favplayer;
                    members[index].sappears = member.sappears;
                    members[index].sassists = member.sassists;
                    members[index].sgoals = member.sgoals;
                    members[index].photo = member.photo;
                    members[index].achievments = member.achievments;
                };
                /**********************************************************
                 * Name:		applyMemberDel()
                 * Description:	Applies a change to the local data so the
                 *              user sees the change on the view.
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.applyMemberDel = function (members, member) {
                    var index = SessionDataService.findMemberIndex(members, member);
                    if (index === -1) {
                        return;
                    }
                    else if (index > -1) {
                        members.splice(index, 1);
                    }
                };
                /**********************************************************
                 * Name:		applyMemberAdd()
                 * Description:	Applies a change to the local data so the
                 *              user sees the change on the view.
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.applyMemberAdd = function (members, member) {
                    if (this.dsTeamMembers[member.team] === undefined)
                        //getMembers4team(member.team);
                        var index = SessionDataService.findMemberIndex(this.dsTeamMembers[member.team], member);
                    if (index === -1) {
                        members[member.team].push(member);
                    }
                    else if (index > -1) {
                    }
                };
                /**********************************************************
                 * Name:		applyTeamChange()
                 * Description:	Applies a change to the local data so the
                 *              user sees the change on the view.
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.applyTeamChange = function (teams, thisTeam) {
                    var index = -1;
                    if (this.dsTeams.length === 0) {
                        this.getTeams();
                    }
                    for (var i = 0; i < this.dsTeams.length; i++) {
                        if (this.dsTeams[i].id === thisTeam.id) {
                            index = i;
                            break;
                        }
                    }
                    if (index === -1) {
                    }
                    else if (index > -1) {
                        this.dsTeams[index] = thisTeam;
                    }
                };
                /**********************************************************
                 * Name:		findMemberIndex()
                 * Description:	Find a members index/position in the array
                 *              of members
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		The index value
                 **********************************************************/
                SessionDataService.findMemberIndex = function (members, member) {
                    var index = -1;
                    if (typeof members !== undefined) {
                        for (var i = 0; i < members.length; i++) {
                            if (members[i].id === member.id) {
                                index = i;
                                break;
                            }
                        }
                    }
                    return index;
                };
                /**********************************************************
                 * Name:		convertPosToInt()
                 * Description:	Converts the position name to the integer
                 *              value
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		The position integer value
                 **********************************************************/
                SessionDataService.prototype.convertPosToInt = function (sPos) {
                    return this.dsPosition.indexOf(sPos);
                };
                /**********************************************************
                 * Name:		convertTeamToInt()
                 * Description:	Converts the team name to the integer value
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		The team integer value
                 **********************************************************/
                SessionDataService.prototype.convertTeamToInt = function (sTeam) {
                    for (var i = 0; i < this.dsTeams.length; i++) {
                        if (this.dsTeams[i].name == sTeam) {
                            return this.dsTeams[i].id;
                        }
                    }
                    return 0;
                };
                /**********************************************************
                 * Name:		setCurrentTeamByName()
                 * Description:	Set the current team in memory
                 * Scope:		Internal
                 * Params in:	Team name as a string
                 * Return:		None
                 **********************************************************/
                SessionDataService.prototype.setCurrentTeamByName = function (teamName) {
                    console.log("### " + this.serviceName + "->" + "setCurrentTeamByName(" + teamName + ")");
                    // Ensure the teams information has been loaded
                    if (this.dsTeams.length < 1)
                        this.getTeams();
                    // Pick out this team and set it as the current one
                    for (var _i = 0, _a = this.dsTeams; _i < _a.length; _i++) {
                        var team = _a[_i];
                        if (team.name == teamName) {
                            this.dsCurrentTeam = team;
                            console.log("### " + this.serviceName + "->" + "setCurrentTeamByName(): Team set to " + teamName);
                            break;
                        }
                    }
                };
                /**********************************************************
                 * Name:		loadNewsStories()
                 * Description:	Retrieves a list of Newws from the server
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		Sets dsNewsStories
                 **********************************************************/
                SessionDataService.prototype.loadNewsStories = function () {
                    var _this = this;
                    console.log("### " + this.serviceName + "->" + "loadNewsStories()..");
                    this._http.get('http://localhost:8080/clubRegisterApp/news')
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        // Update data store
                        _this.dsNewsStories = data;
                    });
                };
                /**********************************************************
                 * Name:		getHome()
                 * Description:	Returns the _home URL so that it can be used
                 * 				as a local or remote app.
                 * Scope:		Externally accessibleif( this.dsNewsStories.length !== 0 )
                 return;
            
                 this._http.get( 'http://localhost:8080/clubRegisterApp/news' )
                 .map(response => response.json()).subscribe(data => {
                        // Update data store
                        this.dsNewsStories = data;
            
                    });
                 * Params in:	none
                 * Return:		_home URL
                 **********************************************************/
                SessionDataService.prototype.getHome = function () {
                    var _home;
                    //log.debug(loghdr + "-> getHome()");
                    if (this.CurrentServerMode == this.modes.LOCAL) {
                        //log.debug(loghdr + "     | _home is LOCAL");
                        // _home = 'http://localhost:8080/clubRegisterApp';
                        _home = 'http://localhost:3000/';
                    }
                    else if (this.CurrentServerMode == this.modes.REMOTE) {
                        // log.debug(loghdr + "     | _home is REMOTE");
                        _home = 'http://www.avenueunited.ie';
                    }
                    return _home;
                };
                /**********************************************************
                 * Name:		getTeams()
                 * Description:	Retrieves a list of teams from the server
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		Sets $scope.teams
                 **********************************************************/
                SessionDataService.prototype.getTeams = function () {
                    var _this = this;
                    console.log("### " + this.serviceName + "->" + "getTeams()");
                    // If we have already loaded the news just return
                    if (this.dsTeams.length !== 0)
                        return;
                    this._http.get('http://localhost:8080/clubRegisterApp/teams')
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        // Update data store
                        _this.dsTeams = data;
                    });
                };
                /**********************************************************
                 * Name:		loadCurrentTeamMembersByName()
                 * Description:	Load the current team's details and members
                 * Scope:		Externally accessible
                 * Params in:	teamName: the name of the team in question
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.loadCurrentTeamMembersByName = function (teamName) {
                    var _this = this;
                    console.log("### " + this.serviceName + "->" + "loadCurrentTeamMembersByName(" + teamName + ")");
                    console.log("====> LOOP-BACK VERSION !! <====");
                    this.dsTeamMembers = this._sds.getTeamMembersByTeamName(teamName);
                    return;
                    ////////////////////////////////////////////////
                    if ((this.dsTeamMembers.length !== 0) && (this.dsCurrentTeam.name == teamName)) {
                        console.log("### " + this.serviceName + "->" + "loadCurrentTeamByName():" + "Members already loaded not loading again!");
                        return;
                    }
                    else {
                        // Clear out the TeamMembers array first
                        this.dsTeamMembers.length = 0;
                        this._http.get('http://localhost:8080/clubRegisterApp/team/' + teamName)
                            .map(function (response) { return response.json(); }).subscribe(function (data) {
                            // Update data store
                            _this.dsTeamMembers = data;
                        });
                    }
                };
                /// TEMP FUNCTION TO SIM REST CALL TO SERVER
                SessionDataService.prototype.getTeamDetailsSim = function (teamName) {
                    return this.dsCurrentTeam = this._sds.getTeamDetailsByName(teamName);
                };
                /**********************************************************
                 * Name:		loadCurrentSponsors()
                 * Description:	Load the current sponsors details
                 * Scope:		Externally accessible
                 * Params in:	None
                 * Return:      Array of sponsor objects
                 **********************************************************/
                SessionDataService.prototype.loadCurrentSponsors = function () {
                    console.log("### " + this.serviceName + "->" + "loadCurrentSponsors()");
                    this.dsSponsors = [{ name: "Enzo's Takeaway", image: "./images/adverts/enzos.png" },
                        { name: "Rochford's Pharmacy", image: "./images/adverts/main-sponsor.png" },
                        { name: "Ennis Cabs", image: "./images/adverts/ec.png" }
                    ];
                    return this.dsSponsors;
                };
                /**********************************************************
                 * Name:		clearCurrentMember()
                 * Description:	Clear out the dsCurrentMember
                 * Scope:		Externally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                SessionDataService.prototype.clearCurrentMember = function () {
                    this.dsCurrentMember = null;
                };
                SessionDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, server_data_service_1.ServerDataService])
                ], SessionDataService);
                return SessionDataService;
            }());
            exports_1("SessionDataService", SessionDataService);
        }
    }
});
//# sourceMappingURL=session-data.service.js.map