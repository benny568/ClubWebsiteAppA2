import { Component }            from 'angular2/core';
import { RouteConfig, 
         ROUTER_DIRECTIVES, 
         ROUTER_PROVIDERS }     from 'angular2/router';
import { Router }               from 'angular2/router';
import { SessionDataService }   from './services/session-data.service';
import { ViewTeam }             from './components/viewTeam.component';
import { HomeComponent }        from "./components/home.component";
import { FarViewComponent }     from "./components/far.component";
import { FindUsComponent }      from "./components/findUs.component";
import { MessageUsComponent }   from "./components/messageUs.component";
import { ContacteUsComponent }  from "./components/contactUs.component";
import { DownloadsComponent }   from "./components/downloads.component";
import { LinksComponent }       from "./components/links.component";
import { AcademyHomeComponent } from "./components/academyHome.component";
import { ClubHistoryComponent } from "./components/clubHistory.component";
import { MerchandiseComponent } from "./components/merchandise.component";
import { Test }                 from './components/test.component';

@Component({
    selector: 'my-app',
    templateUrl: '/app/htmltemplates/nav.component.html',
    styles: [`
            .header
            {
                background-image: url("/images/banner.png");
                background-size: cover;
                min-height:110px;
                position:relative;
                margin-top:5px;
            }
            .t2
            {
                position:absolute;
                top:0px;
                left:0px;
                height:110px;
            }
            `],
    //stylesUrl: '/app/styles/nav.component.css',
    directives: [ ROUTER_DIRECTIVES, Test],
    providers: [ ROUTER_PROVIDERS ]
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/viewTeam:team', name: 'ViewTeam', component: ViewTeam },
    { path: '/farView:team', name: 'FarView', component: FarViewComponent },
    { path: '/findUs', name: 'FindUs', component: FindUsComponent },
    { path: '/messageUs', name: 'MessageUs', component: MessageUsComponent },
    { path: '/contactUs', name: 'ContactUs', component: ContacteUsComponent },
    { path: '/downloads', name: 'Downloads', component: DownloadsComponent },
    { path: '/links', name: 'Links', component: LinksComponent },
    { path: '/academyHome', name: 'AcademyHome', component: AcademyHomeComponent },
    { path: '/clubHistory', name: 'ClubHistory', component: ClubHistoryComponent },
    { path: '/merchandise', name: 'Merchandise', component: MerchandiseComponent },
    { path: '/test', name: 'Test', component: Test }
])
export class AppComponent { 
    constructor(private _dataService: SessionDataService, private _router: Router) { }

    componentName = 'AppComponent';
    logHdr = "#### " + this.componentName + ": ";

    /**********************************************************
     * Name:		goHome()
     * Description:	Navigate to the home page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    goHome()
    {
        console.log(this.logHdr + "->" + "goHome()");

        //this._dataService.loadNewsStories();
        this._dataService.loadCurrentSponsors();
        //console.log(this.logHdr + "News: " + this._dataService.dsNewsStories );
        console.log(this.logHdr + "Sponsors: " + this._dataService.dsSponsors );
        this._router.navigate( ['Home', {}] );
    }

    viewTeam( tname:string )
    {
        console.log("#### " + this.componentName + "->" + "viewTeam(" + tname + ")");
        this._dataService.getTeams();
        this._dataService.loadCurrentTeamMembersByName(tname);
        this._router.navigate( ['ViewTeam', { team: tname }] );
    }

    /**********************************************************
     * Name:		goHome()
     * Description:	Navigate to the home page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    farView( tname:string )
    {
        console.log("#### " + this.componentName + "->" + "farView(" + tname + ")");
        this._dataService.getTeams();
        this._dataService.loadCurrentTeamMembersByName(tname);
        this._router.navigate( ['FarView', { team: tname }] );
    }

    /**********************************************************
     * Name:		findUs()
     * Description:	Navigate to the location page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    findUs()
    {
        console.log("#### " + this.componentName + "->" + "findUs()");
        this._router.navigate( ['FindUs', {}] );
    }

    /**********************************************************
     * Name:		messageUs()
     * Description:	Navigate to the email page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    messageUs()
    {
        console.log("#### " + this.componentName + "->" + "messageUs()");
        this._router.navigate( ['MessageUs', {}] );
    }

    /**********************************************************
     * Name:		contactUs()
     * Description:	Navigate to the contacts page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    contactUs()
    {
        console.log("#### " + this.componentName + "->" + "contactUs()");
        this._router.navigate( ['ContactUs', {}] );
    }

    /**********************************************************
     * Name:		downloads()
     * Description:	Navigate to the downloads page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    downloads()
    {
        console.log("#### " + this.componentName + "->" + "downloads()");
        this._router.navigate( ['Downloads', {}] );
    }

    /**********************************************************
     * Name:		links()
     * Description:	Navigate to the downloads page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    links()
    {
        console.log("#### " + this.componentName + "->" + "links()");
        this._router.navigate( ['Links', {}] );
    }

    /**********************************************************
     * Name:		academyHome()
     * Description:	Navigate to the downloads page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    academyHome()
    {
        console.log("#### " + this.componentName + "->" + "academyHome()");
        this._router.navigate( ['AcademyHome', {}] );
    }

    /**********************************************************
     * Name:		clubHistory()
     * Description:	Navigate to the downloads page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    clubHistory()
    {
        console.log("#### " + this.componentName + "->" + "clubHistory()");
        this._router.navigate( ['ClubHistory', {}] );
    }

    /**********************************************************
     * Name:		merchandise()
     * Description:	Navigate to the downloads page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    merchandise()
    {
        console.log("#### " + this.componentName + "->" + "merchandise()");
        this._router.navigate( ['Merchandise', {}] );
    }

    test()
    {
        console.log("#### " + this.componentName + "->" + "test()");
        this._router.navigate( ['Test', {}] );
    }
}