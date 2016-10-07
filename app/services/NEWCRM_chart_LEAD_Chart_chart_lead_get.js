/**
 * Module initializes rest service NEWCRM_chart_LEAD_Chart_chart_lead_get
 */

define(['require'], function(require) {

    return [{
        type: 'service',
        name: 'NEWCRM_chart_LEAD_Chart_chart_lead_get',
        deps: ['Apperyio', 'REST', NEWCRM_chart_LEAD_Chart_chart_lead_getImpl]
    }];

    /**
     * @function NEWCRM_chart_LEAD_Chart_chart_lead_getImpl
     */

    function NEWCRM_chart_LEAD_Chart_chart_lead_getImpl(Apperyio, REST) {

        var REST = new REST();

/**
         * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
         * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
         * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
         * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                                to send to the server. If the return value of a function is null,
                                                                the header will not be sent.
         * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                                after the url. If the value is not a string, it will be JSONified.
         * @property {string|Object} data                     - Data to be sent as the request message data.
         * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
         * @property {Object.<string, string>} aio_config     - Apperyio configuration object
         * @property {string} requestType                     - Request type
         * @property {string} responseType                    - Response type
         * @property {string} serviceName                     - Service name
         */

        this.config = {
            url: "https://api.appery.io/rest/1/apiexpress/api/chart/LEAD_Chart/chart_lead",
            method: "get",
            headers: Apperyio.EntityAPI("NEWCRM_chart_LEAD_Chart_chart_lead_get.request.headers"),
            params: Apperyio.EntityAPI("NEWCRM_chart_LEAD_Chart_chart_lead_get.request.query"),
            aio_config: {
                requestType: "",
                responseType: "json",
                serviceName: "NEWCRM_chart_LEAD_Chart_chart_lead_get"
            }
        };
        this.inst = REST.setDefaults(this.config);
        return this.inst.execute;
    }
});