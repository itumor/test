define(['require', 'app'], function(require, APP) {

    /**
     * Controller for ATTACHED_NOTE_LIST generated by Appery.io
     * @module ATTACHED_NOTE_LIST
     */

    APP.controller('ATTACHED_NOTE_LIST', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         * @param _id
         * @param type
         */
        $scope.init = function(_id, type) {
            //On load screen logic
            console.log("landed here");
            $scope.state = false;
            var $routeParams = Apperyio.get("$routeParams");
            $scope.id = $routeParams['_id'];
            $scope.type = $routeParams['type'];
            $scope.showSpinner1 = true;
            $scope.$apply();

            var requestData = {};
            requestData = (function mapping3429($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('ATTACHED_NOTE_find.request.data', undefined, true);

                var id_scope = $scope.id;
                var type_scope = $scope.type;
                requestData.where.ATTACHMENT_ID = id_scope;
                requestData.where.TYPE = type_scope;

                return requestData; /*|button_mapping|onbeforesend|9C1CEB62-9DE5-96E8-CBCB-B2F30946C579||3429|*/
            })($scope);

            // read more about using rest services: https://links.appery.io/ve-snippet-rest
            Apperyio.get("ATTACHED_NOTE_find")(requestData).then( /*|service_bookmark|bookmark|9C1CEB62-9DE5-96E8-CBCB-B2F30946C579||8423|*/

            function(success) { // success callback
                (function mapping2230(success, $scope) {
                    var NOTES_scope = $scope.NOTES;
                    NOTES_scope = [];
                    for (var i = 0, l = success.length; i < l; i++) {
                        NOTES_scope[i] = Apperyio.EntityAPI('NOTES.[i]');
                        NOTES_scope[i] = success[i];
                    }
                    $scope.NOTES = NOTES_scope; /*|button_mapping|onsuccess|9C1CEB62-9DE5-96E8-CBCB-B2F30946C579||2230|*/

                    $scope.showSpinner1 = false;
                    $scope.$apply();
                })(success, $scope);

            }, function(error) { // callback to handle request error
                console.log(error);
            }, function(notify) { // notify callback, can fire few times
                console.log(notify);
            });

        };

        /**
         * @function DETAILS
         * @param _id
         */
        $scope.DETAILS = function(_id) {
            console.log(_id);
            Apperyio.navigateTo("ATTACHED_NOTE_DETAILS", {
                '_id': _id
            });
        };

        /**
         * @function EDIT
         * @param _id
         */
        $scope.EDIT = function(_id) {
            console.log(_id);
            Apperyio.navigateTo("ATTACHED_NOTE_EDIT", {
                '_id': _id
            });
        };

        /**
         * @function DELETE
         * @param _id
         */
        $scope.DELETE = function(_id) {
            var requestData = {};
            requestData = (function mapping7701($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('ATTACHED_NOTE_delete.request.data', undefined, true);

                var id_scope = _id;
                requestData.DBID = id_scope;

                return requestData; /*|button_mapping|onbeforesend|AA14E372-8580-4A3A-53E8-A916460E5A6C||7701|*/
            })($scope);

            // read more about using rest services: https://links.appery.io/ve-snippet-rest
            Apperyio.get("ATTACHED_NOTE_delete")(requestData).then( /*|service_bookmark|bookmark|AA14E372-8580-4A3A-53E8-A916460E5A6C||3653|*/

            function(success) { // success callback
                /*|button_mapping|onsuccess|AA14E372-8580-4A3A-53E8-A916460E5A6C||9148|*/

                console.log("success");
                $scope.init();
            }, function(error) { // callback to handle request error
                console.log(error);
            }, function(notify) { // notify callback, can fire few times
                console.log(notify);
            });

        };

        /**
         * @function CREATE
         */
        $scope.CREATE = function() {
            Apperyio.navigateTo("ATTACHED_NOTE_CREATE", {
                '_id': $scope.id,
                'type': $scope.type
            });
        };

        /**
         * user controller variables
         */
        $scope.id = Apperyio.EntityAPI('String');
        $scope.type = Apperyio.EntityAPI('String');
        $scope.NOTES = Apperyio.EntityAPI('NOTES');
        $scope.showSpinner1 = Apperyio.EntityAPI('Boolean');
    }

});