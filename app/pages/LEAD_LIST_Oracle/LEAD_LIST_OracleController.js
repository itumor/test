define(['require', 'app'], function(require, APP) {

    /**
     * Controller for LEAD_LIST_Oracle generated by Appery.io
     * @module LEAD_LIST_Oracle
     */

    APP.controller('LEAD_LIST_Oracle', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            $scope.showSpinner2 = true;

            $scope.userid = sessionStorage.getItem("userid");
            $scope.userid = "57cc88a0e4b0ce1875dd5468";
            console.log($scope.userid);
            console.log("anything here??????????????????????????");

            //var $routeParams = Apperyio.get( '');
            $scope.$apply();
            //$scope.Token=Apperyio.User.getToken();
            //$scope.$apply();
            /////////////////////////////
            //  requestData.headers['X-Appery-Session-Token'] = Token_scope;
            //$scope.showSpinner2 = false;
            //var requestData = {};
            /*|button_mapping|onbeforesend|EB9F1E28-6081-B1CF-79B2-E6B043F934A7||2446|*/

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            //Apperyio.get("LEAD_find")(requestData).then(/*|service_bookmark|bookmark|EB9F1E28-6081-B1CF-79B2-E6B043F934A7||6586|*/
/*function(success){ // success callback
    (function mapping1877(success, $scope){
        var LEADS_scope = $scope.LEADS;
        LEADS_scope = [];
        for (var i = 0, l = success.length; i < l; i++) {
            LEADS_scope[i] = Apperyio.EntityAPI('LEADS.[i]');
            LEADS_scope[i] = success[i];
        }
        $scope.LEADS = LEADS_scope;*/
            /*|button_mapping|onsuccess|EB9F1E28-6081-B1CF-79B2-E6B043F934A7||1877|*/
/*    $scope.showSpinner2 = false;
        $scope.$apply( );
                
    })(success, $scope);

},
function(error){ // callback to handle request error


},
function(notify){ // notify callback, can fire few times

});*/

            var requestData = {};
            requestData = (function mapping2001($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('LEAD2_find.request.data', undefined, true);

                var userid_scope = $scope.userid;
                requestData.where.USER_ID = userid_scope;

                return requestData; /*|button_mapping|onbeforesend|6E33B451-8A1E-8F3B-CFB4-9C53A7E600E4||2001|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("LEAD2_find")(requestData).then( /*|service_bookmark|bookmark|6E33B451-8A1E-8F3B-CFB4-9C53A7E600E4||6630|*/

            function(success) { // success callback
                (function mapping1877(success, $scope) {
                    var LEADS_scope = $scope.LEADS;
                    LEADS_scope = [];
                    for (var i = 0, l = success.length; i < l; i++) {
                        LEADS_scope[i] = Apperyio.EntityAPI('LEADS.[i]');
                        LEADS_scope[i] = success[i];
                    }
                    $scope.LEADS = LEADS_scope; /*|button_mapping|onsuccess|6E33B451-8A1E-8F3B-CFB4-9C53A7E600E4||1818|*/

                    $scope.showSpinner2 = false;
                    $scope.$apply();

                })(success, $scope);
            }, function(error) { // callback to handle request error
                console.log(error);

            }, function(notify) { // notify callback, can fire few times
                console.log(notify);
            });

        };

        /**
         * @function edit_details
         * @param _id
         */
        $scope.edit_details = function(_id) {
            //alert(_id);
            Apperyio.navigateTo("LEAD_EDIT_Oracle", {
                '_id': _id
            });
        };

        /**
         * @function delete_details
         * @param _id
         */
        $scope.delete_details = function(_id) {

            $scope.state = false;
            var $routeParams = Apperyio.get("$routeParams");
            $scope.id = _id; //$routeParams['_id'];
            var requestData = {};
            requestData = (function mapping9757($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('LEAD2_delete.request.data', undefined, true);

                var id_scope = $scope.id;
                requestData.DBID = id_scope;

                return requestData; /*|button_mapping|onbeforesend|7A5E476D-CDF4-1448-7791-30F8881290AE||9757|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("LEAD2_delete")(requestData).then( /*|service_bookmark|bookmark|7A5E476D-CDF4-1448-7791-30F8881290AE||8635|*/

            function(success) { // success callback
                /*|button_mapping|onsuccess|7A5E476D-CDF4-1448-7791-30F8881290AE||2677|*/
                console.log("success");
                //$scope.deleteCofirmed();
                //alert("Deleted");
                $scope.deletedAlert();
                //Apperyio.navigateTo("LEAD_LIST_Oracle");
                $scope.init();
                //Apperyio.navigateTo("LEAD_LIST_Oracle");
            }, function(error) { // callback to handle request error
                console.log(error);

            }, function(notify) { // notify callback, can fire few times
                console.log(notify);
            });
            //$scope.$apply();
        };

        /**
         * @function success
         */
        $scope.success = function() {
            Apperyio.navigateTo("LEAD", {});

        };

        /**
         * @function test
         */
        $scope.test = function() {

        };

        /**
         * @function confirmDelete
         * @param _id
         */
        $scope.confirmDelete = function(_id) {
            function onConfirm(buttonIndex) {
                if (buttonIndex === 1) $scope.delete_details(_id);
            }

            navigator.notification.confirm('Are you sure you want to delete this?', // message
            onConfirm, // callback to invoke with index of button pressed
            'Update', // title
            ['Delete', 'Cancle'] // buttonLabels
            );
        };

        /**
         * @function details
         * @param _id
         */
        $scope.details = function(_id) {
            Apperyio.navigateTo("LEAD_DETAILS_Oracle", {
                '_id': _id
            });
        };

        /**
         * @function deleteCofirmed
         */
        $scope.deleteCofirmed = function() {
            function onConfirm(buttonIndex) {
                if (buttonIndex === 1) Apperyio.navigateTo("LEAD_LIST_Oracle");
                $scope.$apply();
            }

            navigator.notification.confirm('', // message
            onConfirm, // callback to invoke with index of button pressed
            'Deleted', // title
            ['OK'] // buttonLabels
            );
        };

        /**
         * @function deletedAlert
         */
        $scope.deletedAlert = function() {
            function onConfirm(buttonIndex) {

            }

            navigator.notification.confirm('This client has been deleted', // message
            onConfirm, // callback to invoke with index of button pressed
            'Success', // title
            ['OK'] // buttonLabels
            );
        };

        /**
         * user controller variables
         */
        $scope.LEADS = Apperyio.EntityAPI('LEADS');
        $scope.showSpinner2 = Apperyio.EntityAPI('Boolean');
        $scope.Token = Apperyio.EntityAPI('String');
        $scope.id = Apperyio.EntityAPI('String');
        $scope.userid = Apperyio.EntityAPI('String');
    }

});