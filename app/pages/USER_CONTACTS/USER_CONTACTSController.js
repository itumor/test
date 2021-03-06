define(['require', 'app'], function(require, APP) {

    /**
     * Controller for USER_CONTACTS generated by Appery.io
     * @module USER_CONTACTS
     */

    APP.controller('USER_CONTACTS', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            //On load screen logic
            $scope.userid = sessionStorage.getItem("userid");
            $scope.userid = "57cc88a0e4b0ce1875dd5468";
            console.log($scope.userid);
            $scope.showSpinner1 = true;
            $scope.$apply();

            var requestData = {};
            requestData = (function mapping1529($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('CONTACT_find.request.data', undefined, true);

                var userid_scope = $scope.userid;
                requestData.where.USER_ID = userid_scope;
                console.log("user id: " + userid_scope);

                return requestData; /*|button_mapping|onbeforesend|489C6FE6-E060-320F-94A9-D09DDCFD5980||1529|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("CONTACT_find")(requestData).then( /*|service_bookmark|bookmark|489C6FE6-E060-320F-94A9-D09DDCFD5980||5218|*/

            function(success) { // success callback
                (function mapping8107(success, $scope) {
                    var CONTACTS_scope = $scope.CONTACTS;

                    CONTACTS_scope = [];
                    for (var i = 0, l = success.length; i < l; i++) {
                        CONTACTS_scope[i] = Apperyio.EntityAPI('CONTACTS.[i]');
                        CONTACTS_scope[i] = success[i];
                        console.log("found one");
                    }

                    $scope.CONTACTS = CONTACTS_scope;
                    console.log("done founding1"); /*|button_mapping|onsuccess|489C6FE6-E060-320F-94A9-D09DDCFD5980||8107|*/

                    $scope.showSpinner1 = false;
                    console.log("done founding2");
                    $scope.$apply();
                })(success, $scope);

            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function CREATE
         */
        $scope.CREATE = function() {
            Apperyio.navigateTo("CONTACT_USER_CREATE");
        };

        /**
         * @function DETAILS
         * @param id2
         */
        $scope.DETAILS = function(id2) {
            console.log(id2);
            Apperyio.navigateTo("CONTACT_DETAILS", {
                '_id': id2
            });
        };

        /**
         * @function EDIT
         * @param id2
         */
        $scope.EDIT = function(id2) {
            Apperyio.navigateTo("CONTACT_EDIT", {
                '_id': id2
            });
        };

        /**
         * @function DELETE
         * @param id2
         */
        $scope.DELETE = function(id2) {
            var requestData = {};
            requestData = (function mapping4882($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('CONTACT_delete.request.data', undefined, true);

                var id_scope = id2;
                requestData.DBID = id_scope;

                return requestData; /*|button_mapping|onbeforesend|0E613AEA-0583-D00A-8DB5-045A70EF10AE||4882|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("CONTACT_delete")(requestData).then( /*|service_bookmark|bookmark|0E613AEA-0583-D00A-8DB5-045A70EF10AE||2598|*/

            function(success) { // success callback
                /*|button_mapping|onsuccess|0E613AEA-0583-D00A-8DB5-045A70EF10AE||6272|*/

                //alert("Deleted");
                $scope.deletedAlert();
                $scope.init();
            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function deleteConfirm
         * @param id2
         */
        $scope.deleteConfirm = function(id2) {
            function onConfirm(buttonIndex) {
                if (buttonIndex === 1) $scope.DELETE(id2);
            }

            navigator.notification.confirm('Are you sure you want to delete this?', // message
            onConfirm, // callback to invoke with index of button pressed
            'Update', // title
            ['Delete', 'Cancle'] // buttonLabels
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
        $scope.userid = Apperyio.EntityAPI('String');
        $scope.CONTACTS = Apperyio.EntityAPI('CONTACTS');
        $scope.Token = Apperyio.EntityAPI('String');
        $scope.id = Apperyio.EntityAPI('String');
        $scope.showSpinner1 = Apperyio.EntityAPI('Boolean');
    }

});