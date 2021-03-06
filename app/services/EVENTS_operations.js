define(['require', 'lodash', 'AppClientInit'], function (require, _) {

	var _ApperyioAppClient = function (Apperyio, mssdk) {
		var model = 'EVENTS';

		function deleteUndefinedFields(options) {
			for (var field in options) {
				if (options[field] === undefined) {
					delete options[field];
				}
			}
			return options;
		}

		this.methods = {
			find: function (options) {
				return mssdk().then(
				function(success){
						var extensionVersion = Apperyio.Config.get("AppClientSettings.version");
						var findOptions = {};
						var findWhere = {};				
						if(!_.isUndefined(extensionVersion) && extensionVersion >= "2" ){
							if(!_.isUndefined(options.where) && _.isObject(options.where)){
								findWhere = options.where;
							}							
							if(!_.isUndefined(options.offset) && !_.isObject(options.offset)){
								findOptions.offset = options.offset;
							}							
							if(!_.isUndefined(options.limit) && !_.isObject(options.limit)){
								findOptions.limit = options.limit;
							}	
							findOptions.cached = options.cached;
							if(!_.isUndefined(findOptions.cached) && _.isString(findOptions.cached)){
								findOptions.cached = findOptions.cached.toLowerCase() === "true";
							}
						}else{
							findWhere = options;
						}					
						return success.dao(model).find(findWhere, findOptions).then(function(data){return data;});
					}
				);
			},
			count: function (options) {
				return mssdk().then(
				function(success){
						var extensionVersion = Apperyio.Config.get("AppClientSettings.version");
						var findOptions = {};
						var findWhere = {};				
						if(!_.isUndefined(extensionVersion) && extensionVersion > "2" ){
							if(!_.isUndefined(options.where) && _.isObject(options.where)){
								findWhere = options.where;
							}							
							findOptions.cached = options.cached;
							if(!_.isUndefined(findOptions.cached) && _.isString(findOptions.cached)){
								findOptions.cached = findOptions.cached.toLowerCase() === "true";
							}
						}else{
							findWhere = options;
						}						
						return success.dao(model).getCount(findWhere, findOptions).then(function(data){return data;});
					}
				);
			},
			get: function (options) {
				return mssdk().then(
					function(success){
						var operationOptions = {};
						operationOptions.cached = options.cached;
						if(!_.isUndefined(operationOptions.cached) && _.isString(operationOptions.cached)){
							operationOptions.cached = operationOptions.cached.toLowerCase() === "true";
						}
						return success.dao(model).get(options['DBID'], operationOptions).then(function(data){return data;});
					}
				);
			},
			create: function (options) {
				return mssdk().then(
					function(success){
						deleteUndefinedFields(options);
						return success.dao(model).create(options).then(function(data){return data;});
					}
				);
			},
			update: function (options) {
				return mssdk().then(
					function(success){
						deleteUndefinedFields(options);
						return success.dao(model).update(options['DBID'], options).then(function(data){return data;});
					}
				);
			},
			remove: function (options) {
				return mssdk().then(
					function(success){
						return success.dao(model).delete(options['DBID']).then(function(data){return data;});
					}
				);
			}
		};
	};

	function AppClientFactoryImpl(Apperyio, mssdk) {
		var AppClient = new _ApperyioAppClient(Apperyio, mssdk);
		return AppClient.methods;
	}

	function find(AppClient) {
		return AppClient.find;
	}
	function count(AppClient) {
		return AppClient.count;
	}
	function get(AppClient) {
		return AppClient.get;
	}
	function create(AppClient) {
		return AppClient.create;
	}
	function update(AppClient) {
		return AppClient.update;
	}
	function remove(AppClient) {
		return AppClient.remove;
	}

	return [{
		type: 'factory',
		name: 'EVENTS',
		deps: ['Apperyio', 'mssdk', AppClientFactoryImpl]
	}, {
		type: 'service',
		name: 'EVENTS_get',
		deps: ['EVENTS', get]
	}, {
		type: 'service',
		name: 'EVENTS_find',
		deps: ['EVENTS', find]
	}, {
		type: 'service',
		name: 'EVENTS_count',
		deps: ['EVENTS', count]
	}, {
		type: 'service',
		name: 'EVENTS_create',
		deps: ['EVENTS', create]
	}, {
		type: 'service',
		name: 'EVENTS_update',
		deps: ['EVENTS', update]
	}, {
		type: 'service',
		name: 'EVENTS_delete',
		deps: ['EVENTS', remove]
	}];
});


