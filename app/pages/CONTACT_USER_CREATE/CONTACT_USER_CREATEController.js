define(['require', 'app'], function(require, APP) {

    /**
     * Controller for CONTACT_USER_CREATE generated by Appery.io
     * @module CONTACT_USER_CREATE
     */

    APP.controller('CONTACT_USER_CREATE', ['$scope', 'Apperyio', controller]);

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
            console.log($scope.userid);
            $scope.getLeads();
        };

        /**
         * @function FIND
         */
        $scope.FIND = function() {
            var requestData = {};
            requestData = (function mapping8452($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('CONTACT_find.request.data', undefined, true);

                var userid_scope = $scope.userid;
                var CONTACT_scope = $scope.CONTACT;
                requestData.where.USER_ID = userid_scope;
                requestData.where.E_MAIL = CONTACT_scope.E_MAIL;

                console.log($scope.LeadName);
                return requestData; /*|button_mapping|onbeforesend|F1DDD481-45D6-4887-1FF0-443117514393||8452|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("CONTACT_find")(requestData).then( /*|service_bookmark|bookmark|F1DDD481-45D6-4887-1FF0-443117514393||6929|*/

            function(success) { // success callback
                (function mapping4097(success, $scope) {
                    var CONTACTS_scope = $scope.CONTACTS;
                    CONTACTS_scope = [];
                    for (var i = 0, l = success.length; i < l; i++) {
                        CONTACTS_scope[i] = Apperyio.EntityAPI('CONTACTS.[i]');
                        CONTACTS_scope[i] = success[i];
                    }
                    $scope.CONTACTS = CONTACTS_scope;
                    console.log(success.length);

                    if (success.length === 0) {
                        console.log("Create");
                        $scope.CREATE();
                    } else {
                        console.log("Record already exists");
                        $scope.recordExists();

                    } /*|button_mapping|onsuccess|F1DDD481-45D6-4887-1FF0-443117514393||4097|*/
                })(success, $scope);

            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function CREATE
         */
        $scope.CREATE = function() {

            var requestData = {};
            requestData = (function mapping2316($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('CONTACT_create.request.data', undefined, true);

                var userid_scope = $scope.userid;
                var CONTACT_scope = $scope.CONTACT;
                requestData.USER_ID = userid_scope;
                requestData.SOURCE = CONTACT_scope.SOURCE;
                requestData.STATUS = CONTACT_scope.STATUS;
                //requestData.COMPANY = $scope.LEAD.DBID.DBID;
                console.log('************************************************* ' + requestData.COMPANY);
                requestData.INDUSTRY = CONTACT_scope.INDUSTRY;
                requestData.WEBSITE = CONTACT_scope.WEBSITE;
                requestData.PHONE_1 = CONTACT_scope.PHONE_1;
                requestData.PHONE_2 = CONTACT_scope.PHONE_2;
                requestData.E_MAIL = CONTACT_scope.E_MAIL;
                requestData.REGION = CONTACT_scope.REGION;
                requestData.ADDRESS = CONTACT_scope.ADDRESS;
                requestData.DESCRIPTION = CONTACT_scope.DESCRIPTION;
                requestData.TITLE = CONTACT_scope.TITLE;
                requestData.RATING = CONTACT_scope.RATING;
                requestData.MAIN_CONTACT = CONTACT_scope.MAIN_CONTACT;
                requestData.NOTES = CONTACT_scope.NOTES;
                requestData.FACEBOOK_ID = CONTACT_scope.FACEBOOK_ID;
                requestData.INSTAGRAM_ID = CONTACT_scope.INSTAGRAM_ID;
                requestData.TWITTER_ID = CONTACT_scope.TWITTER_ID;
                requestData.DOB = CONTACT_scope.DOB;
                requestData.OWNER = CONTACT_scope.OWNER;
                requestData.ACCOUNT_DBID = CONTACT_scope.ACCOUNT_DBID;
                requestData.LEAD_DBID = $scope.LEAD.DBID.DBID;
                requestData.HEADCOUNT = CONTACT_scope.HEADCOUNT;
                requestData.CITY = CONTACT_scope.CITY;
                requestData.COUNTRY = CONTACT_scope.COUNTRY;
                requestData.FULLNAME = CONTACT_scope.FULLNAME;
                requestData.LEAD_OR_CLIENT = $scope.CONTACT.LEAD_OR_CLIENT;
                console.log('**************** ' + requestData.LEAD_OR_CLIENT);

                if (requestData.STATUS === "") requestData.STATUS = "Not Contacted";
                if (requestData.MAIN_CONTACT === "") requestData.MAIN_CONTACT = "No";
                console.log("Lead DBID: " + requestData.LEAD_DBID)
                if (requestData.LEAD_DBID === "") requestData.LEAD_DBID = "109";
                console.log("Lead DBID: " + requestData.LEAD_DBID)

                return requestData; /*|button_mapping|onbeforesend|131D06D7-8ACE-7134-9156-0215B997F6BC||2316|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            if (requestData.FULLNAME && requestData.LEAD_DBID && (requestData.E_MAIL || requestData.PHONE_1 || requestData.PHONE_2)) {
                Apperyio.get("CONTACT_create")(requestData).then( /*|service_bookmark|bookmark|131D06D7-8ACE-7134-9156-0215B997F6BC||9872|*/

                function(success) { // success callback
                    /*|button_mapping|onsuccess|131D06D7-8ACE-7134-9156-0215B997F6BC||9057|*/
                    console.log($scope.LEAD.DBID.DBID);
                    console.log($scope.LEAD.DBID);
                    console.log("create");
                    Apperyio.navigateTo("USER_CONTACTS");
                    $scope.$apply();
                }, function(error) { // callback to handle request error
                    console.log(error);

                }, function(notify) { // notify callback, can fire few times
                });
            } else {
                alert("You can't add a Contact that has no name, company or email!");
            }

            Create
        };

        /**
         * @function getLeads
         */
        $scope.getLeads = function() {
            var requestData = {};
            requestData = (function mapping8396($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('LEAD2_find.request.data', undefined, true);

                var userid_scope = $scope.userid;
                requestData.where.USER_ID = userid_scope;

                return requestData; /*|button_mapping|onbeforesend|B4937CEB-2D1F-6672-ACAD-CF1C9D6F3C00||8396|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("LEAD2_find")(requestData).then( /*|service_bookmark|bookmark|B4937CEB-2D1F-6672-ACAD-CF1C9D6F3C00||6425|*/

            function(success) { // success callback
                (function mapping1877(success, $scope) {
                    var LEADS_scope = $scope.LEADS;

                    LEADS_scope = [];
                    for (var i = 0, l = success.length; i < l; i++) {
                        LEADS_scope[i] = Apperyio.EntityAPI('LEADS.[i]');
                        LEADS_scope[i] = success[i];
                    }
                    $scope.LEADS = LEADS_scope; /*|button_mapping|onsuccess|B4937CEB-2D1F-6672-ACAD-CF1C9D6F3C00||1877|*/
                })(success, $scope);

            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function findLead
         */
        $scope.findLead = function() {
            console.log("************************** : " + $scope.LEAD.DBID.DBID);
            var requestData = {};
            requestData = (function mapping9738($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('LEAD2_find.request.data', undefined, true);

                var LeadName_scope = $scope.LeadName;
                requestData.where.NAME = LeadName_scope;

                console.log(LeadName_scope);
                return requestData; /*|button_mapping|onbeforesend|A415974D-B8B3-A34C-499A-01D02041CBC6||9738|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("LEAD2_find")(requestData).then( /*|service_bookmark|bookmark|A415974D-B8B3-A34C-499A-01D02041CBC6||9333|*/

            function(success) { // success callback
                (function mapping7126(success, $scope) {
                    var LEADS2_scope = $scope.LEADS2;
                    LEADS2_scope = [];
                    for (var i = 0, l = success.length; i < l; i++) {
                        LEADS2_scope[i] = Apperyio.EntityAPI('LEADS2.[i]');
                        LEADS2_scope[i] = success[i];
                    }
                    $scope.LEADS2 = LEADS2_scope; /*|button_mapping|onsuccess|A415974D-B8B3-A34C-499A-01D02041CBC6||7126|*/

                    console.log($scope.LEADS2);
                    $scope.leadId = $scope.LEADS2[0].DBID;
                })(success, $scope);

            }, function(error) { // callback to handle request error
                console.log("leads2 : ********************************************************* error: " + error);

            }, function(notify) { // notify callback, can fire few times
                console.log("leads2 : ********************************************************* notify: " + notify);
            });

        };

        /**
         * @function recordExists
         */
        $scope.recordExists = function() {
            function onConfirm(buttonIndex) {

            }

            navigator.notification.confirm('There is a record already exists with this name', // message
            onConfirm, // callback to invoke with index of button pressed
            'Sorry', // title
            ['OK'] // buttonLabels
            );
        };

        /**
         * @function log
         */
        $scope.log = function() {
            console.log($scope.LEAD.DBID.DBID);
            console.log($scope.LEAD.DBID);
            console.log($scope.LEAD);
            console.log('test');

            console.log($scope.CONTACT.LEAD_OR_CLIENT.LEAD_OR_CLIENT);
            console.log($scope.CONTACT.LEAD_OR_CLIENT);
            console.log($scope.CONTACT);
            console.log('test');
        };

        /**
         * user controller variables
         */
        $scope.CONTACT = Apperyio.EntityAPI('CONTACT');
        $scope.CONTACTS = Apperyio.EntityAPI('CONTACTS');
        $scope.userid = Apperyio.EntityAPI('String');
        $scope.status = Apperyio.EntityAPI('String');
        $scope.LEADS = Apperyio.EntityAPI('LEADS');
        $scope.LeadName = Apperyio.EntityAPI('String');
        $scope.LEADS2 = Apperyio.EntityAPI('LEADS');
        $scope.leadId = Apperyio.EntityAPI('String');
        $scope.LEAD = Apperyio.EntityAPI('LEAD');
    }

});