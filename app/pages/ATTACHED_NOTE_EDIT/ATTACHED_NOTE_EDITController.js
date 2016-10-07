define(['require', 'app'], function(require, APP) {

    /**
     * Controller for ATTACHED_NOTE_EDIT generated by Appery.io
     * @module ATTACHED_NOTE_EDIT
     */

    APP.controller('ATTACHED_NOTE_EDIT', ['$scope', 'Apperyio', controller]);

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

            var requestData = {};
            requestData = (function mapping8504($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('ATTACHED_NOTE_get.request.data', undefined, true);

                var id_scope = $scope.id;
                requestData.DBID = id_scope;

                return requestData; /*|button_mapping|onbeforesend|E6ADA70E-23DD-BB19-3E20-FD595C555F4E||8504|*/
            })($scope);

            // read more about using rest services: https://links.appery.io/ve-snippet-rest
            Apperyio.get("ATTACHED_NOTE_get")(requestData).then( /*|service_bookmark|bookmark|E6ADA70E-23DD-BB19-3E20-FD595C555F4E||1292|*/

            function(success) { // success callback
                (function mapping2389(success, $scope) {
                    var NOTE_scope = $scope.NOTE;
                    NOTE_scope = success;
                    $scope.NOTE = NOTE_scope; /*|button_mapping|onsuccess|E6ADA70E-23DD-BB19-3E20-FD595C555F4E||2389|*/
                })(success, $scope);

            }, function(error) { // callback to handle request error
            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function EDIT
         */
        $scope.EDIT = function() {
            var requestData = {};
            requestData = (function mapping4908($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('ATTACHED_NOTE_update.request.data', undefined, true);

                var NOTE_scope = $scope.NOTE;
                requestData.NOTE = NOTE_scope.NOTE;
                requestData.ATTACHMENT_ID = NOTE_scope.ATTACHMENT_ID;
                requestData.TYPE = NOTE_scope.TYPE;
                requestData.CREATED_AT = NOTE_scope.CREATED_AT;
                requestData.DBID = NOTE_scope.DBID;

                return requestData; /*|button_mapping|onbeforesend|99F67BF4-C442-7335-638E-ACC2C782C043||4908|*/
            })($scope);

            // read more about using rest services: https://links.appery.io/ve-snippet-rest
            Apperyio.get("ATTACHED_NOTE_update")(requestData).then( /*|service_bookmark|bookmark|99F67BF4-C442-7335-638E-ACC2C782C043||1552|*/

            function(success) { // success callback
                /*|button_mapping|onsuccess|99F67BF4-C442-7335-638E-ACC2C782C043||5808|*/

                Apperyio.navigateTo("ATTACHED_NOTE_DETAILS", {
                    '_id': $scope.id
                });
                $scope.$apply();

            }, function(error) { // callback to handle request error
            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * user controller variables
         */
        $scope.NOTE = Apperyio.EntityAPI('ATTACHED_NOTE');
        $scope.id = Apperyio.EntityAPI('String');
    }

});