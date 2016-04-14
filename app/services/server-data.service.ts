/**
 * Created by odalybr on 11/04/2016.
 */
import { Injectable }   from 'angular2/core';
import { Http }         from 'angular2/http';
import { NewsStory }    from '/app/dao/news-story'
import { Team }         from '/app/dao/team';
import { Member }       from '/app/dao/member';

@Injectable()
export class ServerDataService {
    serviceName:string = 'ServerDataService';
    loghdr:string = '==> ' + this.serviceName;
    
    constructor( private _http: Http ) {}
    
    ngOnInit() {
        console.log("### " + this.serviceName + "->" + "ngOnInit()");
    }

    /**********************************************************
     * Name:		getTeams()
     * Description:	Retrieve list of teams from Server
     * Scope:		Externally accessible
     * Params in:	None
     * Return:		The array of teams
     **********************************************************/
    getTeams(){
        console.log("### " + this.serviceName + "->" + "getTeams()");
        var sdsTeams : Array<Team>;
        
        return sdsTeams;
    }

    /**********************************************************
     * Name:		getNewsStories()
     * Description:	Retrieve list of news from Server
     * Scope:		Externally accessible
     * Params in:	None
     * Return:		The array of news stories
     **********************************************************/
    getNewsStories( _home: string ){
        console.log("### " + this.serviceName + "->" + "getNewsStories() from: " + _home);

        var sdsNewsStories = new Array<NewsStory>();

        // TODO: Get this data from the server
        var csrf = $("meta[name='_csrf']").attr("content");
        console.log(this.loghdr + "->getNewsStories() csrf token is: ",csrf);

        // this._http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
        // this._http.defaults.xsrfCookieName = 'CSRF-TOKEN';
        // this._http.defaults.headers.post["Content-Type"] = "application/json";
        // this._http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;

        this._http.get( _home + '/nsws').subscribe( sdsNewsStories => return sdsNewsStories,
                                                error => console.log("******** ERROR **********"));


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
        //
        // return sdsNewsStories;
    }

    /**********************************************************
     * Name:		getTeamDetailsByName()
     * Description:	Retrieve details of a team from Server
     * Scope:		Externally accessible
     * Params in:	None
     * Return:		The team details
     **********************************************************/
    getTeamDetailsByName( teamName:string ) {
        console.log("### " + this.serviceName + "->" + "getTeamDetailsByName()");

        var sdsCurrentTeam = new Team();

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

        return sdsCurrentTeam;
    }

    /**********************************************************
     * Name:		getTeamMembersByTeamName()
     * Description:	Retrieve details of a team from Server
     * Scope:		Externally accessible
     * Params in:	None
     * Return:		The team details
     **********************************************************/
    getTeamMembersByTeamName( teamName:string ){
        console.log("### " + this.serviceName + "->" + "getTeamMembersByTeamName()");
        
        // Load the member data

        var sdsTeamMembers : Array<Member> = new Array<Member>();
        var tmpMem: Member;
        tmpMem = {
            name: 'Killian O\'Daly',
            address:'Reaskaun, Larchill, Ennis',
            phone:'123456787',
            phone2:'',
            dob:'16/08/1998',
            email:'odalyki@outlook.com',
            amount:'0',
            receiptid:'',
            team:20,
            team2:6,
            team3:22,
            position:5,
            position2:6,
            position3:7,
            lid:0,
            favteam:'Manchester United',
            favplayer:'Lionel Messi',
            sappears:20,
            sassists:5,
            sgoals:6,
            photo:'/images/Players/U18/KillianODaly.png',
            achievements:'',
            status:'ENABLED'
        };
        
        sdsTeamMembers.push(tmpMem);
        
        tmpMem = {
            name: 'Paddy Honan',
            address:'Bank Place, Ennis',
            phone:'56789005',
            phone2:'',
            dob:'11/10/1998',
            email:'paddy@outlook.com',
            amount:'0',
            receiptid:'',
            team:20,
            team2:6,
            team3:22,
            position:5,
            position2:6,
            position3:7,
            lid:0,
            favteam:'Manchester United',
            favplayer:'Lionel Messi',
            sappears:20,
            sassists:5,
            sgoals:6,
            photo:'/images/Players/default.png',
            achievements:'',
            status:'ENABLED'
        };
        
        sdsTeamMembers.push(tmpMem);
        
        tmpMem = {
            name: 'Brendan O\'Daly',
            address:'Reaskaun, Ennis',
            phone:'087 6470883',
            phone2:'',
            dob:'11/05/1968',
            email:'odalybr@hotmail.com',
            amount:'0',
            receiptid:'',
            team:20,
            team2:6,
            team3:22,
            position:0,
            position2:0,
            position3:0,
            lid:0,
            favteam:'Manchester United',
            favplayer:'Paul Scoles',
            sappears:20,
            sassists:5,
            sgoals:6,
            photo:'/images/Players/default.png',
            achievements:'Managed this team since the academy.',
            status:'ENABLED'
        };
        
        sdsTeamMembers.push(tmpMem);
        
        tmpMem = {
            name: 'Patrick McDaid',
            address:'12 Oak Park, Ennis',
            phone:'087 6499564',
            phone2:'',
            dob:'11/09/1998',
            email:'pa@hotmail.com',
            amount:'0',
            receiptid:'',
            team:20,
            team2:6,
            team3:22,
            position:99,
            position2:0,
            position3:0,
            lid:0,
            favteam:'Arsnel',
            favplayer:'Joe Hart',
            sappears:20,
            sassists:5,
            sgoals:6,
            photo:'/images/Players/default.png',
            achievements:'Captian of Clare Youths.',
            status:'ENABLED'
        };
        
        sdsTeamMembers.push(tmpMem);
        
        return sdsTeamMembers;
    }
}