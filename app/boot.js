System.register(['angular2/platform/browser', 'angular2/router', './app.component', 'angular2/http', 'rxjs/add/operator/map', './services/session-data.service', './services/server-data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, app_component_1, http_1, session_data_service_1, server_data_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (server_data_service_1_1) {
                server_data_service_1 = server_data_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                session_data_service_1.SessionDataService,
                server_data_service_1.ServerDataService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map