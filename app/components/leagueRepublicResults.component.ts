/**
 * Created by odalybr on 08/04/2016.
 */
import { Component }            from 'angular2/core';
import { SessionDataService }   from '../services/session-data.service';

@Component({
    selector: 'lr-results',
    template: '<div id=\"lrep{{lrcode}}\"></div>'
})

export class LeagueRepublicResults{
    className:string = 'LeagueRepublicResults';
    lrcode:number;

    constructor(private _dataService: SessionDataService) { }

    ngOnInit() {
        console.log("### " + this.className + "->" + "ngOnInit()");
        this.lrcode = this._dataService.dsCurrentTeam.lrResultsCode;
        console.log("### " + this.className + "->" + "ngOnInit(): lrcode is: " + this.lrcode);

        if( window[ "numCodeSnippets" ] == undefined )
        {
            window[ "numCodeSnippets" ] = 1;
        }
        else
        {
            window[ "numCodeSnippets" ]++;
        };

        if( window["numCodeSnippets"] <= 12 )
        {
            var randno = Math[ "random" ]();
            var el = document[ "createElement" ]( "script" );
            el["src"] = "http://api.leaguerepublic.com/l/js/cs1.html?cs=" + this.lrcode + "&random=" + randno;
            el["type"] = "text/javascript";
            document["getElementsByTagName"]("head")[0]["appendChild"](el);
        };
    }
}