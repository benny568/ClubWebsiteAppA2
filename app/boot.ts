import { bootstrap }        from 'angular2/platform/browser'
import { ROUTER_PROVIDERS } from 'angular2/router';
import { AppComponent }     from './app.component';
import { HTTP_PROVIDERS }   from 'angular2/http';
import { SessionDataService } from '/app/services/session-data.service';
import { ServerDataService } from '/app/services/server-data.service';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    SessionDataService,
    ServerDataService
]);