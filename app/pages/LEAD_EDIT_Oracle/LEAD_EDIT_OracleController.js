define(['require', 'app'], function(require, APP) {

    /**
     * Controller for LEAD_EDIT_Oracle generated by Appery.io
     * @module LEAD_EDIT_Oracle
     */

    APP.controller('LEAD_EDIT_Oracle', ['$scope', 'Apperyio', controller]);

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
            //alert(ID);

            var requestData = {};
            requestData = (function mapping5881($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('LEAD2_get.request.data', undefined, true);

                var id_scope = $scope.id;
                requestData.DBID = id_scope;

                return requestData; /*|button_mapping|onbeforesend|7E9FF3C8-A82D-5B23-CF2E-42D8F6017647||5881|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("LEAD2_get")(requestData).then( /*|service_bookmark|bookmark|7E9FF3C8-A82D-5B23-CF2E-42D8F6017647||8077|*/

            function(success) { // success callback
                (function mapping3190(success, $scope) {
                    var LEAD_scope = $scope.LEAD;
                    LEAD_scope = success;
                    $scope.LEAD = LEAD_scope; /*|button_mapping|onsuccess|7E9FF3C8-A82D-5B23-CF2E-42D8F6017647||3190|*/
                    $scope.$apply();
                })(success, $scope);

            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function Edit
         */
        $scope.Edit = function() {

            console.log("Editing 1");
            var requestData = {};
            requestData = (function mapping7824($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('LEAD2_update.request.data', undefined, true);

                var LEAD_scope = $scope.LEAD;
                requestData.NOTES = LEAD_scope.NOTES;
                requestData.E_MAIL = LEAD_scope.E_MAIL;
                requestData.COUNTRY = LEAD_scope.COUNTRY;
                requestData.REGION = LEAD_scope.REGION;
                requestData.HEADCOUNT = LEAD_scope.HEADCOUNT;
                requestData.USER_ID = LEAD_scope.USER_ID;
                requestData.TWITTER_ID = LEAD_scope.TWITTER_ID;
                requestData.WEBSITE = LEAD_scope.WEBSITE;
                requestData.FACEBOOK_ID = LEAD_scope.FACEBOOK_ID;
                requestData.PHONE_2 = LEAD_scope.PHONE_2;
                requestData.INDUSTRY = LEAD_scope.INDUSTRY;
                requestData.ID = LEAD_scope.ID;
                requestData.ADDRESS = LEAD_scope.ADDRESS;
                requestData.ANN_REVENUE = LEAD_scope.ANN_REVENUE;
                requestData.INSTAGRAM_ID = LEAD_scope.INSTAGRAM_ID;
                requestData.DESCRIPTION = LEAD_scope.DESCRIPTION;
                requestData.CITY = LEAD_scope.CITY;
                requestData.STREET = LEAD_scope.STREET;
                requestData.NAME = LEAD_scope.NAME;
                requestData.PHONE_1 = LEAD_scope.PHONE_1;
                console.log(LEAD_scope.STATUS);
                requestData.STATUS = LEAD_scope.STATUS;
                console.log(requestData.STATUS);
                requestData.DBID = LEAD_scope.DBID;
                requestData.SOURCE = LEAD_scope.SOURCE;

                return requestData; /*|button_mapping|onbeforesend|DF7B0899-3335-7272-2C5D-16CF5F44D478||7824|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("LEAD2_update")(requestData).then( /*|service_bookmark|bookmark|DF7B0899-3335-7272-2C5D-16CF5F44D478||4177|*/

            function(success) { // success callback
                (function mapping9670(success, $scope) {
                    var LEAD_scope = $scope.LEAD;
                    LEAD_scope = success;
                    $scope.LEAD = LEAD_scope; /*|button_mapping|onsuccess|DF7B0899-3335-7272-2C5D-16CF5F44D478||9670|*/

                    if (LEAD_scope.STATUS === "Contacted") {
                        $scope.addToClients();
                    }
                })(success, $scope);
                //alert("Updated");
                $scope.upeatedAlert();
                Apperyio.navigateTo("LEAD_DETAILS_Oracle", {
                    '_id': $scope.id
                });
                $scope.$apply();
            }, function(error) { // callback to handle request error
                //console.log("error: " + error);
            }, function(notify) { // notify callback, can fire few times
                //console.log("notify: " + notify);
            });

        };

        /**
         * @function success
         */
        $scope.success = function() {
            var modalOptions = { // About Ionic Modal: https://devcenter.appery.io/documentation/angularjs/screens/#Modal_screen
                animation: 'slide-in-up',
                // The animation to show & hide with
                focusFirstInput: false,
                // Whether to autofocus the first input of the modal when shown
                backdropClickToClose: true,
                // Whether to close the modal on clicking the backdrop
                hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
            };

            Apperyio.get('Modals').loadModal("Edit_successfully").then(

            function(modalInstance) {
                modalInstance.open(modalOptions).then(function(modal) {
                    modal.scope.modal = modal;
                    modal.show();
                });
            }, function(error) {
                console.log(error);
            });

            Apperyio.navigateTo("LEAD", {});

        };

        /**
         * @function confirmEdit
         */
        $scope.confirmEdit = function() {
            function onConfirm(buttonIndex) {
                if (buttonIndex === 1) $scope.findLead();
            }

            navigator.notification.confirm('Are you sure you want to submit the update?', // message
            onConfirm, // callback to invoke with index of button pressed
            'Update', // title
            ['Submit', 'Cancle'] // buttonLabels
            );

        };

        /**
         * @function findLead
         */
        $scope.findLead = function() {
            console.log("find1");
            var requestData = {};
            requestData = (function mapping7062($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('LEAD2_find.request.data', undefined, true);

                var LEAD_scope = $scope.LEAD;
                requestData.where.NAME = LEAD_scope.NAME;

                return requestData; /*|button_mapping|onbeforesend|F8C7300E-F599-67CE-A8C0-59A427CDF1CE||7062|*/
            })($scope);
            console.log("dind2");
            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("LEAD2_find")(requestData).then( /*|service_bookmark|bookmark|F8C7300E-F599-67CE-A8C0-59A427CDF1CE||1109|*/

            function(success) { // success callback
                (function mapping9025(success, $scope) {
                    var LEADS_scope = $scope.LEADS;
                    LEADS_scope = success;
                    $scope.LEADS = LEADS_scope; /*|button_mapping|onsuccess|F8C7300E-F599-67CE-A8C0-59A427CDF1CE||9025|*/
                    console.log("start looping");
                    for (var i = 0; i < $scope.LEADS.length; i++) {
                        console.log($scope.LEAD.DBID);
                        console.log($scope.LEADS[i].DBID);
                        if ($scope.LEADS[i].NAME === $scope.LEAD.NAME && $scope.LEADS[i].DBID != $scope.LEAD.DBID) {
                            //alert("You have entered a name of another record... Please try entering a different name");
                            $scope.recordExists();
                            console.log("exists");
                            return;
                        }
                    }
                    console.log("Edit");
                    $scope.Edit();
                })(success, $scope);

            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function upeatedAlert
         */
        $scope.upeatedAlert = function() {
            function onConfirm(buttonIndex) {

            }

            navigator.notification.confirm('Record has bee updated', // message
            onConfirm, // callback to invoke with index of button pressed
            'Success', // title
            ['Yes'] // buttonLabels
            );
        };

        /**
         * @function recordExists
         */
        $scope.recordExists = function() {
            function onConfirm(buttonIndex) {

            }

            navigator.notification.confirm('You have entered a name of another contact... Please try entering a different E-mail', // message
            onConfirm, // callback to invoke with index of button pressed
            'Sorry', // title
            ['OK'] // buttonLabels
            );
        };

        /**
         * @function addToClients
         */
        $scope.addToClients = function() {
            var requestData = {};
            requestData = (function mapping4268($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('CLIENT_create.request.data', undefined, true);

                var LEAD_scope = $scope.LEAD;
                requestData.DESCRIPTION = LEAD_scope.DESCRIPTION;
                requestData.INSTAGRAM_ID = LEAD_scope.INSTAGRAM_ID;
                requestData.ADDRESS = LEAD_scope.ADDRESS;
                requestData.PHONE_2 = LEAD_scope.PHONE_2;
                requestData.NOTES = LEAD_scope.NOTES;
                requestData.COUNTRY = LEAD_scope.COUNTRY;
                requestData.TWITTER_ID = LEAD_scope.TWITTER_ID;
                requestData.NAME = LEAD_scope.NAME;
                requestData.WEBSITE = LEAD_scope.WEBSITE;
                requestData.SOURCE = LEAD_scope.SOURCE;
                requestData.HEADCOUNT = LEAD_scope.HEADCOUNT;
                requestData.STATUS = LEAD_scope.STATUS;
                requestData.USER_ID = LEAD_scope.USER_ID;
                requestData.E_MAIL = LEAD_scope.E_MAIL;
                requestData.REGION = LEAD_scope.REGION;
                requestData.FACEBOOK_ID = LEAD_scope.FACEBOOK_ID;
                requestData.INDUSTRY = LEAD_scope.INDUSTRY;
                requestData.ANN_REVENUE = LEAD_scope.ANN_REVENUE;
                requestData.CITY = LEAD_scope.CITY;
                requestData.PHONE_1 = LEAD_scope.PHONE_1;

                return requestData; /*|button_mapping|onbeforesend|E6F41793-F396-98FB-D852-56EE87220066||4268|*/
            })($scope);

            // read more about using rest services: https://links.appery.io/ve-snippet-rest
            Apperyio.get("CLIENT_create")(requestData).then( /*|service_bookmark|bookmark|E6F41793-F396-98FB-D852-56EE87220066||5000|*/

            function(success) { // success callback
                /*|button_mapping|onsuccess|E6F41793-F396-98FB-D852-56EE87220066||1069|*/

                Apperyio.navigateTo("CLIENT_LIST");
            }, function(error) { // callback to handle request error
            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * user controller variables
         */
        $scope.LEAD = Apperyio.EntityAPI('LEAD');
        $scope.LEADS_STATUS = Apperyio.EntityAPI('LEADS_STATUS');
        $scope.STATUS = Apperyio.EntityAPI('LEAD_STATUS');
        $scope.id = Apperyio.EntityAPI('String');
        $scope.LEADS = Apperyio.EntityAPI('LEADS');
        $scope.status = Apperyio.EntityAPI('String');
    }

});