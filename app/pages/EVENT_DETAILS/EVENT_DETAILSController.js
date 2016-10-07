define(['require', 'app'], function(require, APP) {

    /**
     * Controller for EVENT_DETAILS generated by Appery.io
     * @module EVENT_DETAILS
     */

    APP.controller('EVENT_DETAILS', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         * @param _id
         */
        $scope.init = function(_id) {
            //On load screen logic
            $scope.state = false;
            var $routeParams = Apperyio.get("$routeParams");
            $scope.id = $routeParams['_id'];
            console.log($scope.id);

            var requestData = {};
            requestData = (function mapping2783($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('EVENTS2_get.request.data', undefined, true);

                var id_scope = $scope.id;
                requestData.DBID = id_scope;

                return requestData; /*|button_mapping|onbeforesend|EBD31DC2-4DA7-422F-A2A7-9E35C4EA7E71||2783|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("EVENTS2_get")(requestData).then( /*|service_bookmark|bookmark|EBD31DC2-4DA7-422F-A2A7-9E35C4EA7E71||8282|*/

            function(success) { // success callback
                (function mapping6383(success, $scope) {
                    var EVENT_scope = $scope.EVENT;
                    EVENT_scope.DESCRIPTION = success.DESCRIPTION;
                    EVENT_scope.CLIENT_OR_LEAD = success.CLIENT_OR_LEAD;
                    EVENT_scope.RATING = success.RATING;
                    EVENT_scope.DBID = success.DBID;
                    EVENT_scope.ENDDATE = success.ENDDATE;
                    EVENT_scope.NOTES = success.NOTES;
                    EVENT_scope.SALESPERSON_DBID = success.SALESPERSON_DBID;
                    EVENT_scope.COMPANY_DBID = success.COMPANY_DBID;
                    EVENT_scope.CONTACT_DBID = success.CONTACT_DBID;
                    EVENT_scope.STATUS = success.STATUS;
                    EVENT_scope.TITLE = success.TITLE;
                    EVENT_scope.STARTDATE = success.STARTDATE;
                    EVENT_scope.TYPE = success.TYPE;
                    EVENT_scope.DATETIME = success.DATETIME;
                    $scope.EVENT = EVENT_scope; /*|button_mapping|onsuccess|EBD31DC2-4DA7-422F-A2A7-9E35C4EA7E71||6383|*/

                    $scope.$apply();
                })(success, $scope);

            }, function(error) { // callback to handle request error
                console.log(error);
            }, function(notify) { // notify callback, can fire few times
                console.log(notify);
            });

        };

        /**
         * @function NOTES
         */
        $scope.NOTES = function() {
            Apperyio.navigateTo("ATTACHED_NOTE_LIST", {
                '_id': $scope.id,
                'type': 'Event'
            });
        };

        /**
         * user controller variables
         */
        $scope.id = Apperyio.EntityAPI('String');
        $scope.EVENT = Apperyio.EntityAPI('Event');
    }

});