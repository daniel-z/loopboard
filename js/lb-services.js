(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Account
 * @header lbServices.Account
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Account` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Account",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/accounts/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__findById__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__updateById__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.cards.findById() instead.
        "prototype$__findById__cards": {
          url: urlBase + "/accounts/:id/cards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.cards.destroyById() instead.
        "prototype$__destroyById__cards": {
          url: urlBase + "/accounts/:id/cards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.cards.updateById() instead.
        "prototype$__updateById__cards": {
          url: urlBase + "/accounts/:id/cards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.cards.link() instead.
        "prototype$__link__cards": {
          url: urlBase + "/accounts/:id/cards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.cards.unlink() instead.
        "prototype$__unlink__cards": {
          url: urlBase + "/accounts/:id/cards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.cards.exists() instead.
        "prototype$__exists__cards": {
          url: urlBase + "/accounts/:id/cards/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Account.projects.findById() instead.
        "prototype$__findById__projects": {
          url: urlBase + "/accounts/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.projects.destroyById() instead.
        "prototype$__destroyById__projects": {
          url: urlBase + "/accounts/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.projects.updateById() instead.
        "prototype$__updateById__projects": {
          url: urlBase + "/accounts/:id/projects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.projects.link() instead.
        "prototype$__link__projects": {
          url: urlBase + "/accounts/:id/projects/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.projects.unlink() instead.
        "prototype$__unlink__projects": {
          url: urlBase + "/accounts/:id/projects/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.projects.exists() instead.
        "prototype$__exists__projects": {
          url: urlBase + "/accounts/:id/projects/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__get__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries accessTokens of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/accounts/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__create__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__delete__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__count__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Counts accessTokens of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/accounts/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Account.cards() instead.
        "prototype$__get__cards": {
          isArray: true,
          url: urlBase + "/accounts/:id/cards",
          method: "GET"
        },

        // INTERNAL. Use Account.cards.create() instead.
        "prototype$__create__cards": {
          url: urlBase + "/accounts/:id/cards",
          method: "POST"
        },

        // INTERNAL. Use Account.cards.destroyAll() instead.
        "prototype$__delete__cards": {
          url: urlBase + "/accounts/:id/cards",
          method: "DELETE"
        },

        // INTERNAL. Use Account.cards.count() instead.
        "prototype$__count__cards": {
          url: urlBase + "/accounts/:id/cards/count",
          method: "GET"
        },

        // INTERNAL. Use Account.projects() instead.
        "prototype$__get__projects": {
          isArray: true,
          url: urlBase + "/accounts/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use Account.projects.create() instead.
        "prototype$__create__projects": {
          url: urlBase + "/accounts/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use Account.projects.destroyAll() instead.
        "prototype$__delete__projects": {
          url: urlBase + "/accounts/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use Account.projects.count() instead.
        "prototype$__count__projects": {
          url: urlBase + "/accounts/:id/projects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#create
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/accounts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#upsert
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/accounts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#exists
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/accounts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#findById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/accounts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#find
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/accounts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#findOne
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/accounts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#updateAll
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/accounts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#deleteById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/accounts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#count
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/accounts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$updateAttributes
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/accounts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#login
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Login a user with username/email and password
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/accounts/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#logout
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/accounts/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#confirm
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/accounts/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#resetPassword
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/accounts/reset",
          method: "POST"
        },

        // INTERNAL. Use Card.accounts.findById() instead.
        "::findById::Card::accounts": {
          url: urlBase + "/cards/:id/accounts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Card.accounts.destroyById() instead.
        "::destroyById::Card::accounts": {
          url: urlBase + "/cards/:id/accounts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Card.accounts.updateById() instead.
        "::updateById::Card::accounts": {
          url: urlBase + "/cards/:id/accounts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Card.accounts.link() instead.
        "::link::Card::accounts": {
          url: urlBase + "/cards/:id/accounts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Card.accounts.unlink() instead.
        "::unlink::Card::accounts": {
          url: urlBase + "/cards/:id/accounts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Card.accounts.exists() instead.
        "::exists::Card::accounts": {
          url: urlBase + "/cards/:id/accounts/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Card.accounts() instead.
        "::get::Card::accounts": {
          isArray: true,
          url: urlBase + "/cards/:id/accounts",
          method: "GET"
        },

        // INTERNAL. Use Card.accounts.create() instead.
        "::create::Card::accounts": {
          url: urlBase + "/cards/:id/accounts",
          method: "POST"
        },

        // INTERNAL. Use Card.accounts.destroyAll() instead.
        "::delete::Card::accounts": {
          url: urlBase + "/cards/:id/accounts",
          method: "DELETE"
        },

        // INTERNAL. Use Card.accounts.count() instead.
        "::count::Card::accounts": {
          url: urlBase + "/cards/:id/accounts/count",
          method: "GET"
        },

        // INTERNAL. Use AccountCard.account() instead.
        "::get::AccountCard::account": {
          url: urlBase + "/account-cards/:id/account",
          method: "GET"
        },

        // INTERNAL. Use Project.account() instead.
        "::get::Project::account": {
          url: urlBase + "/projects/:id/account",
          method: "GET"
        },

        // INTERNAL. Use Project.accounts.findById() instead.
        "::findById::Project::accounts": {
          url: urlBase + "/projects/:id/accounts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.accounts.destroyById() instead.
        "::destroyById::Project::accounts": {
          url: urlBase + "/projects/:id/accounts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.accounts.updateById() instead.
        "::updateById::Project::accounts": {
          url: urlBase + "/projects/:id/accounts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.accounts.link() instead.
        "::link::Project::accounts": {
          url: urlBase + "/projects/:id/accounts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.accounts.unlink() instead.
        "::unlink::Project::accounts": {
          url: urlBase + "/projects/:id/accounts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.accounts.exists() instead.
        "::exists::Project::accounts": {
          url: urlBase + "/projects/:id/accounts/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Project.accounts() instead.
        "::get::Project::accounts": {
          isArray: true,
          url: urlBase + "/projects/:id/accounts",
          method: "GET"
        },

        // INTERNAL. Use Project.accounts.create() instead.
        "::create::Project::accounts": {
          url: urlBase + "/projects/:id/accounts",
          method: "POST"
        },

        // INTERNAL. Use Project.accounts.destroyAll() instead.
        "::delete::Project::accounts": {
          url: urlBase + "/projects/:id/accounts",
          method: "DELETE"
        },

        // INTERNAL. Use Project.accounts.count() instead.
        "::count::Project::accounts": {
          url: urlBase + "/projects/:id/accounts/count",
          method: "GET"
        },

        // INTERNAL. Use AccountProject.account() instead.
        "::get::AccountProject::account": {
          url: urlBase + "/AccountProjects/:id/account",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#getCurrent
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/accounts" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Account#updateOrCreate
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Account#update
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Account#destroyById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Account#removeById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Account#getCachedCurrent
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Account#login} or
         * {@link lbServices.Account#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Account instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Account#isAuthenticated
         * @methodOf lbServices.Account
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Account#getCurrentId
         * @methodOf lbServices.Account
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Account#modelName
    * @propertyOf lbServices.Account
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Account`.
    */
    R.modelName = "Account";

    /**
     * @ngdoc object
     * @name lbServices.Account.cards
     * @header lbServices.Account.cards
     * @object
     * @description
     *
     * The object `Account.cards` groups methods
     * manipulating `Card` instances related to `Account`.
     *
     * Call {@link lbServices.Account#cards Account.cards()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Account#cards
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries cards of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::get::Account::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.cards#count
         * @methodOf lbServices.Account.cards
         *
         * @description
         *
         * Counts cards of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.cards.count = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::count::Account::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.cards#create
         * @methodOf lbServices.Account.cards
         *
         * @description
         *
         * Creates a new instance in cards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards.create = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::create::Account::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.cards#destroyAll
         * @methodOf lbServices.Account.cards
         *
         * @description
         *
         * Deletes all cards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cards.destroyAll = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::delete::Account::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.cards#destroyById
         * @methodOf lbServices.Account.cards
         *
         * @description
         *
         * Delete a related item by id for cards
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for cards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cards.destroyById = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::destroyById::Account::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.cards#exists
         * @methodOf lbServices.Account.cards
         *
         * @description
         *
         * Check the existence of cards relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for cards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards.exists = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::exists::Account::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.cards#findById
         * @methodOf lbServices.Account.cards
         *
         * @description
         *
         * Find a related item by id for cards
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for cards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards.findById = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::findById::Account::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.cards#link
         * @methodOf lbServices.Account.cards
         *
         * @description
         *
         * Add a related item by id for cards
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for cards
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards.link = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::link::Account::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.cards#unlink
         * @methodOf lbServices.Account.cards
         *
         * @description
         *
         * Remove the cards relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for cards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cards.unlink = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::unlink::Account::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.cards#updateById
         * @methodOf lbServices.Account.cards
         *
         * @description
         *
         * Update a related item by id for cards
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for cards
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards.updateById = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::updateById::Account::cards"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Account.projects
     * @header lbServices.Account.projects
     * @object
     * @description
     *
     * The object `Account.projects` groups methods
     * manipulating `Project` instances related to `Account`.
     *
     * Call {@link lbServices.Account#projects Account.projects()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Account#projects
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries projects of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::Account::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.projects#count
         * @methodOf lbServices.Account.projects
         *
         * @description
         *
         * Counts projects of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.projects.count = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::count::Account::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.projects#create
         * @methodOf lbServices.Account.projects
         *
         * @description
         *
         * Creates a new instance in projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.create = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::create::Account::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.projects#destroyAll
         * @methodOf lbServices.Account.projects
         *
         * @description
         *
         * Deletes all projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyAll = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::delete::Account::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.projects#destroyById
         * @methodOf lbServices.Account.projects
         *
         * @description
         *
         * Delete a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::destroyById::Account::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.projects#exists
         * @methodOf lbServices.Account.projects
         *
         * @description
         *
         * Check the existence of projects relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.exists = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::exists::Account::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.projects#findById
         * @methodOf lbServices.Account.projects
         *
         * @description
         *
         * Find a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.findById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::findById::Account::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.projects#link
         * @methodOf lbServices.Account.projects
         *
         * @description
         *
         * Add a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.link = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::link::Account::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.projects#unlink
         * @methodOf lbServices.Account.projects
         *
         * @description
         *
         * Remove the projects relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.unlink = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::unlink::Account::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.projects#updateById
         * @methodOf lbServices.Account.projects
         *
         * @description
         *
         * Update a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.updateById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::updateById::Account::projects"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Card
 * @header lbServices.Card
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Card` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Card",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/cards/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Card.accounts.findById() instead.
        "prototype$__findById__accounts": {
          url: urlBase + "/cards/:id/accounts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Card.accounts.destroyById() instead.
        "prototype$__destroyById__accounts": {
          url: urlBase + "/cards/:id/accounts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Card.accounts.updateById() instead.
        "prototype$__updateById__accounts": {
          url: urlBase + "/cards/:id/accounts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Card.accounts.link() instead.
        "prototype$__link__accounts": {
          url: urlBase + "/cards/:id/accounts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Card.accounts.unlink() instead.
        "prototype$__unlink__accounts": {
          url: urlBase + "/cards/:id/accounts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Card.accounts.exists() instead.
        "prototype$__exists__accounts": {
          url: urlBase + "/cards/:id/accounts/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Card.cardActivities.findById() instead.
        "prototype$__findById__cardActivities": {
          url: urlBase + "/cards/:id/cardActivities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Card.cardActivities.destroyById() instead.
        "prototype$__destroyById__cardActivities": {
          url: urlBase + "/cards/:id/cardActivities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Card.cardActivities.updateById() instead.
        "prototype$__updateById__cardActivities": {
          url: urlBase + "/cards/:id/cardActivities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Card.status() instead.
        "prototype$__get__status": {
          url: urlBase + "/cards/:id/status",
          method: "GET"
        },

        // INTERNAL. Use Card.statusLogs.findById() instead.
        "prototype$__findById__statusLogs": {
          url: urlBase + "/cards/:id/statusLogs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Card.statusLogs.destroyById() instead.
        "prototype$__destroyById__statusLogs": {
          url: urlBase + "/cards/:id/statusLogs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Card.statusLogs.updateById() instead.
        "prototype$__updateById__statusLogs": {
          url: urlBase + "/cards/:id/statusLogs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Card.category() instead.
        "prototype$__get__category": {
          url: urlBase + "/cards/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Card.accounts() instead.
        "prototype$__get__accounts": {
          isArray: true,
          url: urlBase + "/cards/:id/accounts",
          method: "GET"
        },

        // INTERNAL. Use Card.accounts.create() instead.
        "prototype$__create__accounts": {
          url: urlBase + "/cards/:id/accounts",
          method: "POST"
        },

        // INTERNAL. Use Card.accounts.destroyAll() instead.
        "prototype$__delete__accounts": {
          url: urlBase + "/cards/:id/accounts",
          method: "DELETE"
        },

        // INTERNAL. Use Card.accounts.count() instead.
        "prototype$__count__accounts": {
          url: urlBase + "/cards/:id/accounts/count",
          method: "GET"
        },

        // INTERNAL. Use Card.cardActivities() instead.
        "prototype$__get__cardActivities": {
          isArray: true,
          url: urlBase + "/cards/:id/cardActivities",
          method: "GET"
        },

        // INTERNAL. Use Card.cardActivities.create() instead.
        "prototype$__create__cardActivities": {
          url: urlBase + "/cards/:id/cardActivities",
          method: "POST"
        },

        // INTERNAL. Use Card.cardActivities.destroyAll() instead.
        "prototype$__delete__cardActivities": {
          url: urlBase + "/cards/:id/cardActivities",
          method: "DELETE"
        },

        // INTERNAL. Use Card.cardActivities.count() instead.
        "prototype$__count__cardActivities": {
          url: urlBase + "/cards/:id/cardActivities/count",
          method: "GET"
        },

        // INTERNAL. Use Card.statusLogs() instead.
        "prototype$__get__statusLogs": {
          isArray: true,
          url: urlBase + "/cards/:id/statusLogs",
          method: "GET"
        },

        // INTERNAL. Use Card.statusLogs.create() instead.
        "prototype$__create__statusLogs": {
          url: urlBase + "/cards/:id/statusLogs",
          method: "POST"
        },

        // INTERNAL. Use Card.statusLogs.destroyAll() instead.
        "prototype$__delete__statusLogs": {
          url: urlBase + "/cards/:id/statusLogs",
          method: "DELETE"
        },

        // INTERNAL. Use Card.statusLogs.count() instead.
        "prototype$__count__statusLogs": {
          url: urlBase + "/cards/:id/statusLogs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#create
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/cards",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#upsert
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/cards",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#exists
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/cards/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#findById
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/cards/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#find
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/cards",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#findOne
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/cards/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#updateAll
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/cards/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#deleteById
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/cards/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#count
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/cards/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Card#prototype$updateAttributes
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/cards/:id",
          method: "PUT"
        },

        // INTERNAL. Use Account.cards.findById() instead.
        "::findById::Account::cards": {
          url: urlBase + "/accounts/:id/cards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.cards.destroyById() instead.
        "::destroyById::Account::cards": {
          url: urlBase + "/accounts/:id/cards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.cards.updateById() instead.
        "::updateById::Account::cards": {
          url: urlBase + "/accounts/:id/cards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.cards.link() instead.
        "::link::Account::cards": {
          url: urlBase + "/accounts/:id/cards/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.cards.unlink() instead.
        "::unlink::Account::cards": {
          url: urlBase + "/accounts/:id/cards/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.cards.exists() instead.
        "::exists::Account::cards": {
          url: urlBase + "/accounts/:id/cards/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Account.cards() instead.
        "::get::Account::cards": {
          isArray: true,
          url: urlBase + "/accounts/:id/cards",
          method: "GET"
        },

        // INTERNAL. Use Account.cards.create() instead.
        "::create::Account::cards": {
          url: urlBase + "/accounts/:id/cards",
          method: "POST"
        },

        // INTERNAL. Use Account.cards.destroyAll() instead.
        "::delete::Account::cards": {
          url: urlBase + "/accounts/:id/cards",
          method: "DELETE"
        },

        // INTERNAL. Use Account.cards.count() instead.
        "::count::Account::cards": {
          url: urlBase + "/accounts/:id/cards/count",
          method: "GET"
        },

        // INTERNAL. Use AccountCard.card() instead.
        "::get::AccountCard::card": {
          url: urlBase + "/account-cards/:id/card",
          method: "GET"
        },

        // INTERNAL. Use CardActivity.card() instead.
        "::get::CardActivity::card": {
          url: urlBase + "/card-activities/:id/card",
          method: "GET"
        },

        // INTERNAL. Use CardStatus.card.findById() instead.
        "::findById::CardStatus::card": {
          url: urlBase + "/card-status/:id/card/:fk",
          method: "GET"
        },

        // INTERNAL. Use CardStatus.card.destroyById() instead.
        "::destroyById::CardStatus::card": {
          url: urlBase + "/card-status/:id/card/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CardStatus.card.updateById() instead.
        "::updateById::CardStatus::card": {
          url: urlBase + "/card-status/:id/card/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CardStatus.card() instead.
        "::get::CardStatus::card": {
          isArray: true,
          url: urlBase + "/card-status/:id/card",
          method: "GET"
        },

        // INTERNAL. Use CardStatus.card.create() instead.
        "::create::CardStatus::card": {
          url: urlBase + "/card-status/:id/card",
          method: "POST"
        },

        // INTERNAL. Use CardStatus.card.destroyAll() instead.
        "::delete::CardStatus::card": {
          url: urlBase + "/card-status/:id/card",
          method: "DELETE"
        },

        // INTERNAL. Use CardStatus.card.count() instead.
        "::count::CardStatus::card": {
          url: urlBase + "/card-status/:id/card/count",
          method: "GET"
        },

        // INTERNAL. Use StatusLog.card() instead.
        "::get::StatusLog::card": {
          url: urlBase + "/status-log/:id/card",
          method: "GET"
        },

        // INTERNAL. Use Category.cards.findById() instead.
        "::findById::Category::cards": {
          url: urlBase + "/categories/:id/cards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.cards.destroyById() instead.
        "::destroyById::Category::cards": {
          url: urlBase + "/categories/:id/cards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cards.updateById() instead.
        "::updateById::Category::cards": {
          url: urlBase + "/categories/:id/cards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.cards() instead.
        "::get::Category::cards": {
          isArray: true,
          url: urlBase + "/categories/:id/cards",
          method: "GET"
        },

        // INTERNAL. Use Category.cards.create() instead.
        "::create::Category::cards": {
          url: urlBase + "/categories/:id/cards",
          method: "POST"
        },

        // INTERNAL. Use Category.cards.destroyAll() instead.
        "::delete::Category::cards": {
          url: urlBase + "/categories/:id/cards",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cards.count() instead.
        "::count::Category::cards": {
          url: urlBase + "/categories/:id/cards/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Card#updateOrCreate
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Card#update
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Card#destroyById
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Card#removeById
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Card#modelName
    * @propertyOf lbServices.Card
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Card`.
    */
    R.modelName = "Card";

    /**
     * @ngdoc object
     * @name lbServices.Card.accounts
     * @header lbServices.Card.accounts
     * @object
     * @description
     *
     * The object `Card.accounts` groups methods
     * manipulating `Account` instances related to `Card`.
     *
     * Call {@link lbServices.Card#accounts Card.accounts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Card#accounts
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Queries accounts of Card.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Card::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.accounts#count
         * @methodOf lbServices.Card.accounts
         *
         * @description
         *
         * Counts accounts of Card.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accounts.count = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::count::Card::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.accounts#create
         * @methodOf lbServices.Card.accounts
         *
         * @description
         *
         * Creates a new instance in accounts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.create = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::create::Card::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.accounts#destroyAll
         * @methodOf lbServices.Card.accounts
         *
         * @description
         *
         * Deletes all accounts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accounts.destroyAll = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::delete::Card::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.accounts#destroyById
         * @methodOf lbServices.Card.accounts
         *
         * @description
         *
         * Delete a related item by id for accounts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accounts.destroyById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::destroyById::Card::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.accounts#exists
         * @methodOf lbServices.Card.accounts
         *
         * @description
         *
         * Check the existence of accounts relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.exists = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::exists::Card::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.accounts#findById
         * @methodOf lbServices.Card.accounts
         *
         * @description
         *
         * Find a related item by id for accounts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.findById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::findById::Card::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.accounts#link
         * @methodOf lbServices.Card.accounts
         *
         * @description
         *
         * Add a related item by id for accounts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.link = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::link::Card::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.accounts#unlink
         * @methodOf lbServices.Card.accounts
         *
         * @description
         *
         * Remove the accounts relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accounts.unlink = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::unlink::Card::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.accounts#updateById
         * @methodOf lbServices.Card.accounts
         *
         * @description
         *
         * Update a related item by id for accounts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.updateById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::updateById::Card::accounts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Card.cardActivities
     * @header lbServices.Card.cardActivities
     * @object
     * @description
     *
     * The object `Card.cardActivities` groups methods
     * manipulating `CardActivity` instances related to `Card`.
     *
     * Call {@link lbServices.Card#cardActivities Card.cardActivities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Card#cardActivities
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Queries cardActivities of Card.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        R.cardActivities = function() {
          var TargetResource = $injector.get("CardActivity");
          var action = TargetResource["::get::Card::cardActivities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.cardActivities#count
         * @methodOf lbServices.Card.cardActivities
         *
         * @description
         *
         * Counts cardActivities of Card.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.cardActivities.count = function() {
          var TargetResource = $injector.get("CardActivity");
          var action = TargetResource["::count::Card::cardActivities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.cardActivities#create
         * @methodOf lbServices.Card.cardActivities
         *
         * @description
         *
         * Creates a new instance in cardActivities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        R.cardActivities.create = function() {
          var TargetResource = $injector.get("CardActivity");
          var action = TargetResource["::create::Card::cardActivities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.cardActivities#destroyAll
         * @methodOf lbServices.Card.cardActivities
         *
         * @description
         *
         * Deletes all cardActivities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cardActivities.destroyAll = function() {
          var TargetResource = $injector.get("CardActivity");
          var action = TargetResource["::delete::Card::cardActivities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.cardActivities#destroyById
         * @methodOf lbServices.Card.cardActivities
         *
         * @description
         *
         * Delete a related item by id for cardActivities
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for cardActivities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cardActivities.destroyById = function() {
          var TargetResource = $injector.get("CardActivity");
          var action = TargetResource["::destroyById::Card::cardActivities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.cardActivities#findById
         * @methodOf lbServices.Card.cardActivities
         *
         * @description
         *
         * Find a related item by id for cardActivities
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for cardActivities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        R.cardActivities.findById = function() {
          var TargetResource = $injector.get("CardActivity");
          var action = TargetResource["::findById::Card::cardActivities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.cardActivities#updateById
         * @methodOf lbServices.Card.cardActivities
         *
         * @description
         *
         * Update a related item by id for cardActivities
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for cardActivities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        R.cardActivities.updateById = function() {
          var TargetResource = $injector.get("CardActivity");
          var action = TargetResource["::updateById::Card::cardActivities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card#status
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Fetches belongsTo relation status
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardStatus` object.)
         * </em>
         */
        R.status = function() {
          var TargetResource = $injector.get("CardStatus");
          var action = TargetResource["::get::Card::status"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Card.statusLogs
     * @header lbServices.Card.statusLogs
     * @object
     * @description
     *
     * The object `Card.statusLogs` groups methods
     * manipulating `StatusLog` instances related to `Card`.
     *
     * Call {@link lbServices.Card#statusLogs Card.statusLogs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Card#statusLogs
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Queries statusLogs of Card.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        R.statusLogs = function() {
          var TargetResource = $injector.get("StatusLog");
          var action = TargetResource["::get::Card::statusLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.statusLogs#count
         * @methodOf lbServices.Card.statusLogs
         *
         * @description
         *
         * Counts statusLogs of Card.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.statusLogs.count = function() {
          var TargetResource = $injector.get("StatusLog");
          var action = TargetResource["::count::Card::statusLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.statusLogs#create
         * @methodOf lbServices.Card.statusLogs
         *
         * @description
         *
         * Creates a new instance in statusLogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        R.statusLogs.create = function() {
          var TargetResource = $injector.get("StatusLog");
          var action = TargetResource["::create::Card::statusLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.statusLogs#destroyAll
         * @methodOf lbServices.Card.statusLogs
         *
         * @description
         *
         * Deletes all statusLogs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.statusLogs.destroyAll = function() {
          var TargetResource = $injector.get("StatusLog");
          var action = TargetResource["::delete::Card::statusLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.statusLogs#destroyById
         * @methodOf lbServices.Card.statusLogs
         *
         * @description
         *
         * Delete a related item by id for statusLogs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for statusLogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.statusLogs.destroyById = function() {
          var TargetResource = $injector.get("StatusLog");
          var action = TargetResource["::destroyById::Card::statusLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.statusLogs#findById
         * @methodOf lbServices.Card.statusLogs
         *
         * @description
         *
         * Find a related item by id for statusLogs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for statusLogs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        R.statusLogs.findById = function() {
          var TargetResource = $injector.get("StatusLog");
          var action = TargetResource["::findById::Card::statusLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card.statusLogs#updateById
         * @methodOf lbServices.Card.statusLogs
         *
         * @description
         *
         * Update a related item by id for statusLogs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for statusLogs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        R.statusLogs.updateById = function() {
          var TargetResource = $injector.get("StatusLog");
          var action = TargetResource["::updateById::Card::statusLogs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Card#category
         * @methodOf lbServices.Card
         *
         * @description
         *
         * Fetches belongsTo relation category
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Card::category"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.AccountCard
 * @header lbServices.AccountCard
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccountCard` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccountCard",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/account-cards/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use AccountCard.card() instead.
        "prototype$__get__card": {
          url: urlBase + "/account-cards/:id/card",
          method: "GET"
        },

        // INTERNAL. Use AccountCard.account() instead.
        "prototype$__get__account": {
          url: urlBase + "/account-cards/:id/account",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#create
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountCard` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/account-cards",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#upsert
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountCard` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/account-cards",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#exists
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/account-cards/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#findById
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountCard` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/account-cards/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#find
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountCard` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/account-cards",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#findOne
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountCard` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/account-cards/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#updateAll
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/account-cards/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#deleteById
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/account-cards/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#count
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/account-cards/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#prototype$updateAttributes
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountCard` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/account-cards/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.AccountCard#updateOrCreate
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountCard` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#update
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#destroyById
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#removeById
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.AccountCard#modelName
    * @propertyOf lbServices.AccountCard
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AccountCard`.
    */
    R.modelName = "AccountCard";


        /**
         * @ngdoc method
         * @name lbServices.AccountCard#card
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Fetches belongsTo relation card
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.card = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::get::AccountCard::card"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AccountCard#account
         * @methodOf lbServices.AccountCard
         *
         * @description
         *
         * Fetches belongsTo relation account
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.account = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::AccountCard::account"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CardActivity
 * @header lbServices.CardActivity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CardActivity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CardActivity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/card-activities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CardActivity.card() instead.
        "prototype$__get__card": {
          url: urlBase + "/card-activities/:id/card",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#create
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/card-activities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#upsert
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/card-activities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#exists
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/card-activities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#findById
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/card-activities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#find
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/card-activities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#findOne
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/card-activities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#updateAll
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/card-activities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#deleteById
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/card-activities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#count
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/card-activities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#prototype$updateAttributes
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/card-activities/:id",
          method: "PUT"
        },

        // INTERNAL. Use Card.cardActivities.findById() instead.
        "::findById::Card::cardActivities": {
          url: urlBase + "/cards/:id/cardActivities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Card.cardActivities.destroyById() instead.
        "::destroyById::Card::cardActivities": {
          url: urlBase + "/cards/:id/cardActivities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Card.cardActivities.updateById() instead.
        "::updateById::Card::cardActivities": {
          url: urlBase + "/cards/:id/cardActivities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Card.cardActivities() instead.
        "::get::Card::cardActivities": {
          isArray: true,
          url: urlBase + "/cards/:id/cardActivities",
          method: "GET"
        },

        // INTERNAL. Use Card.cardActivities.create() instead.
        "::create::Card::cardActivities": {
          url: urlBase + "/cards/:id/cardActivities",
          method: "POST"
        },

        // INTERNAL. Use Card.cardActivities.destroyAll() instead.
        "::delete::Card::cardActivities": {
          url: urlBase + "/cards/:id/cardActivities",
          method: "DELETE"
        },

        // INTERNAL. Use Card.cardActivities.count() instead.
        "::count::Card::cardActivities": {
          url: urlBase + "/cards/:id/cardActivities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CardActivity#updateOrCreate
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardActivity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#update
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#destroyById
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CardActivity#removeById
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CardActivity#modelName
    * @propertyOf lbServices.CardActivity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CardActivity`.
    */
    R.modelName = "CardActivity";


        /**
         * @ngdoc method
         * @name lbServices.CardActivity#card
         * @methodOf lbServices.CardActivity
         *
         * @description
         *
         * Fetches belongsTo relation card
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.card = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::get::CardActivity::card"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CardStatus
 * @header lbServices.CardStatus
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CardStatus` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CardStatus",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/card-status/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CardStatus.card.findById() instead.
        "prototype$__findById__card": {
          url: urlBase + "/card-status/:id/card/:fk",
          method: "GET"
        },

        // INTERNAL. Use CardStatus.card.destroyById() instead.
        "prototype$__destroyById__card": {
          url: urlBase + "/card-status/:id/card/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CardStatus.card.updateById() instead.
        "prototype$__updateById__card": {
          url: urlBase + "/card-status/:id/card/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CardStatus.card() instead.
        "prototype$__get__card": {
          isArray: true,
          url: urlBase + "/card-status/:id/card",
          method: "GET"
        },

        // INTERNAL. Use CardStatus.card.create() instead.
        "prototype$__create__card": {
          url: urlBase + "/card-status/:id/card",
          method: "POST"
        },

        // INTERNAL. Use CardStatus.card.destroyAll() instead.
        "prototype$__delete__card": {
          url: urlBase + "/card-status/:id/card",
          method: "DELETE"
        },

        // INTERNAL. Use CardStatus.card.count() instead.
        "prototype$__count__card": {
          url: urlBase + "/card-status/:id/card/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#create
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardStatus` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/card-status",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#upsert
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardStatus` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/card-status",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#exists
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/card-status/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#findById
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardStatus` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/card-status/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#find
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardStatus` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/card-status",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#findOne
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardStatus` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/card-status/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#updateAll
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/card-status/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#deleteById
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/card-status/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#count
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/card-status/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#prototype$updateAttributes
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardStatus` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/card-status/:id",
          method: "PUT"
        },

        // INTERNAL. Use Card.status() instead.
        "::get::Card::status": {
          url: urlBase + "/cards/:id/status",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CardStatus#updateOrCreate
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CardStatus` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#update
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#destroyById
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CardStatus#removeById
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CardStatus#modelName
    * @propertyOf lbServices.CardStatus
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CardStatus`.
    */
    R.modelName = "CardStatus";

    /**
     * @ngdoc object
     * @name lbServices.CardStatus.card
     * @header lbServices.CardStatus.card
     * @object
     * @description
     *
     * The object `CardStatus.card` groups methods
     * manipulating `Card` instances related to `CardStatus`.
     *
     * Call {@link lbServices.CardStatus#card CardStatus.card()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.CardStatus#card
         * @methodOf lbServices.CardStatus
         *
         * @description
         *
         * Queries card of CardStatus.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.card = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::get::CardStatus::card"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CardStatus.card#count
         * @methodOf lbServices.CardStatus.card
         *
         * @description
         *
         * Counts card of CardStatus.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.card.count = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::count::CardStatus::card"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CardStatus.card#create
         * @methodOf lbServices.CardStatus.card
         *
         * @description
         *
         * Creates a new instance in card of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.card.create = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::create::CardStatus::card"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CardStatus.card#destroyAll
         * @methodOf lbServices.CardStatus.card
         *
         * @description
         *
         * Deletes all card of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.card.destroyAll = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::delete::CardStatus::card"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CardStatus.card#destroyById
         * @methodOf lbServices.CardStatus.card
         *
         * @description
         *
         * Delete a related item by id for card
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for card
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.card.destroyById = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::destroyById::CardStatus::card"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CardStatus.card#findById
         * @methodOf lbServices.CardStatus.card
         *
         * @description
         *
         * Find a related item by id for card
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for card
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.card.findById = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::findById::CardStatus::card"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CardStatus.card#updateById
         * @methodOf lbServices.CardStatus.card
         *
         * @description
         *
         * Update a related item by id for card
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for card
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.card.updateById = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::updateById::CardStatus::card"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.StatusLog
 * @header lbServices.StatusLog
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `StatusLog` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "StatusLog",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/status-log/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use StatusLog.card() instead.
        "prototype$__get__card": {
          url: urlBase + "/status-log/:id/card",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#create
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/status-log",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#upsert
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/status-log",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#exists
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/status-log/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#findById
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/status-log/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#find
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/status-log",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#findOne
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/status-log/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#updateAll
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/status-log/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#deleteById
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/status-log/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#count
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/status-log/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#prototype$updateAttributes
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/status-log/:id",
          method: "PUT"
        },

        // INTERNAL. Use Card.statusLogs.findById() instead.
        "::findById::Card::statusLogs": {
          url: urlBase + "/cards/:id/statusLogs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Card.statusLogs.destroyById() instead.
        "::destroyById::Card::statusLogs": {
          url: urlBase + "/cards/:id/statusLogs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Card.statusLogs.updateById() instead.
        "::updateById::Card::statusLogs": {
          url: urlBase + "/cards/:id/statusLogs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Card.statusLogs() instead.
        "::get::Card::statusLogs": {
          isArray: true,
          url: urlBase + "/cards/:id/statusLogs",
          method: "GET"
        },

        // INTERNAL. Use Card.statusLogs.create() instead.
        "::create::Card::statusLogs": {
          url: urlBase + "/cards/:id/statusLogs",
          method: "POST"
        },

        // INTERNAL. Use Card.statusLogs.destroyAll() instead.
        "::delete::Card::statusLogs": {
          url: urlBase + "/cards/:id/statusLogs",
          method: "DELETE"
        },

        // INTERNAL. Use Card.statusLogs.count() instead.
        "::count::Card::statusLogs": {
          url: urlBase + "/cards/:id/statusLogs/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.StatusLog#updateOrCreate
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `StatusLog` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#update
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#destroyById
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.StatusLog#removeById
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.StatusLog#modelName
    * @propertyOf lbServices.StatusLog
    * @description
    * The name of the model represented by this $resource,
    * i.e. `StatusLog`.
    */
    R.modelName = "StatusLog";


        /**
         * @ngdoc method
         * @name lbServices.StatusLog#card
         * @methodOf lbServices.StatusLog
         *
         * @description
         *
         * Fetches belongsTo relation card
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.card = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::get::StatusLog::card"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Project
 * @header lbServices.Project
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Project` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Project",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/projects/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Project.account() instead.
        "prototype$__get__account": {
          url: urlBase + "/projects/:id/account",
          method: "GET"
        },

        // INTERNAL. Use Project.categories.findById() instead.
        "prototype$__findById__categories": {
          url: urlBase + "/projects/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          url: urlBase + "/projects/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.categories.updateById() instead.
        "prototype$__updateById__categories": {
          url: urlBase + "/projects/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.accounts.findById() instead.
        "prototype$__findById__accounts": {
          url: urlBase + "/projects/:id/accounts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.accounts.destroyById() instead.
        "prototype$__destroyById__accounts": {
          url: urlBase + "/projects/:id/accounts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.accounts.updateById() instead.
        "prototype$__updateById__accounts": {
          url: urlBase + "/projects/:id/accounts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.accounts.link() instead.
        "prototype$__link__accounts": {
          url: urlBase + "/projects/:id/accounts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.accounts.unlink() instead.
        "prototype$__unlink__accounts": {
          url: urlBase + "/projects/:id/accounts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.accounts.exists() instead.
        "prototype$__exists__accounts": {
          url: urlBase + "/projects/:id/accounts/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Project.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/projects/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Project.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/projects/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Project.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/projects/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Project.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/projects/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Project.accounts() instead.
        "prototype$__get__accounts": {
          isArray: true,
          url: urlBase + "/projects/:id/accounts",
          method: "GET"
        },

        // INTERNAL. Use Project.accounts.create() instead.
        "prototype$__create__accounts": {
          url: urlBase + "/projects/:id/accounts",
          method: "POST"
        },

        // INTERNAL. Use Project.accounts.destroyAll() instead.
        "prototype$__delete__accounts": {
          url: urlBase + "/projects/:id/accounts",
          method: "DELETE"
        },

        // INTERNAL. Use Project.accounts.count() instead.
        "prototype$__count__accounts": {
          url: urlBase + "/projects/:id/accounts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#create
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/projects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#upsert
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/projects",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#exists
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/projects/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#findById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/projects/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#find
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/projects",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#findOne
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/projects/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#updateAll
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/projects/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#deleteById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/projects/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#count
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/projects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#prototype$updateAttributes
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/projects/:id",
          method: "PUT"
        },

        // INTERNAL. Use Account.projects.findById() instead.
        "::findById::Account::projects": {
          url: urlBase + "/accounts/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.projects.destroyById() instead.
        "::destroyById::Account::projects": {
          url: urlBase + "/accounts/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.projects.updateById() instead.
        "::updateById::Account::projects": {
          url: urlBase + "/accounts/:id/projects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.projects.link() instead.
        "::link::Account::projects": {
          url: urlBase + "/accounts/:id/projects/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.projects.unlink() instead.
        "::unlink::Account::projects": {
          url: urlBase + "/accounts/:id/projects/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.projects.exists() instead.
        "::exists::Account::projects": {
          url: urlBase + "/accounts/:id/projects/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Account.projects() instead.
        "::get::Account::projects": {
          isArray: true,
          url: urlBase + "/accounts/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use Account.projects.create() instead.
        "::create::Account::projects": {
          url: urlBase + "/accounts/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use Account.projects.destroyAll() instead.
        "::delete::Account::projects": {
          url: urlBase + "/accounts/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use Account.projects.count() instead.
        "::count::Account::projects": {
          url: urlBase + "/accounts/:id/projects/count",
          method: "GET"
        },

        // INTERNAL. Use Category.project() instead.
        "::get::Category::project": {
          url: urlBase + "/categories/:id/project",
          method: "GET"
        },

        // INTERNAL. Use AccountProject.project() instead.
        "::get::AccountProject::project": {
          url: urlBase + "/AccountProjects/:id/project",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Project#updateOrCreate
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Project#update
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Project#destroyById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Project#removeById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Project#modelName
    * @propertyOf lbServices.Project
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Project`.
    */
    R.modelName = "Project";


        /**
         * @ngdoc method
         * @name lbServices.Project#account
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Fetches belongsTo relation account
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.account = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Project::account"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Project.categories
     * @header lbServices.Project.categories
     * @object
     * @description
     *
     * The object `Project.categories` groups methods
     * manipulating `Category` instances related to `Project`.
     *
     * Call {@link lbServices.Project#categories Project.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Project#categories
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Queries categories of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Project::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.categories#count
         * @methodOf lbServices.Project.categories
         *
         * @description
         *
         * Counts categories of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::Project::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.categories#create
         * @methodOf lbServices.Project.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::Project::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.categories#destroyAll
         * @methodOf lbServices.Project.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::Project::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.categories#destroyById
         * @methodOf lbServices.Project.categories
         *
         * @description
         *
         * Delete a related item by id for categories
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::Project::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.categories#findById
         * @methodOf lbServices.Project.categories
         *
         * @description
         *
         * Find a related item by id for categories
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::Project::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.categories#updateById
         * @methodOf lbServices.Project.categories
         *
         * @description
         *
         * Update a related item by id for categories
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::Project::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Project.accounts
     * @header lbServices.Project.accounts
     * @object
     * @description
     *
     * The object `Project.accounts` groups methods
     * manipulating `Account` instances related to `Project`.
     *
     * Call {@link lbServices.Project#accounts Project.accounts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Project#accounts
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Queries accounts of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Project::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.accounts#count
         * @methodOf lbServices.Project.accounts
         *
         * @description
         *
         * Counts accounts of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accounts.count = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::count::Project::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.accounts#create
         * @methodOf lbServices.Project.accounts
         *
         * @description
         *
         * Creates a new instance in accounts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.create = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::create::Project::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.accounts#destroyAll
         * @methodOf lbServices.Project.accounts
         *
         * @description
         *
         * Deletes all accounts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accounts.destroyAll = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::delete::Project::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.accounts#destroyById
         * @methodOf lbServices.Project.accounts
         *
         * @description
         *
         * Delete a related item by id for accounts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accounts.destroyById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::destroyById::Project::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.accounts#exists
         * @methodOf lbServices.Project.accounts
         *
         * @description
         *
         * Check the existence of accounts relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.exists = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::exists::Project::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.accounts#findById
         * @methodOf lbServices.Project.accounts
         *
         * @description
         *
         * Find a related item by id for accounts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.findById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::findById::Project::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.accounts#link
         * @methodOf lbServices.Project.accounts
         *
         * @description
         *
         * Add a related item by id for accounts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.link = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::link::Project::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.accounts#unlink
         * @methodOf lbServices.Project.accounts
         *
         * @description
         *
         * Remove the accounts relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accounts.unlink = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::unlink::Project::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.accounts#updateById
         * @methodOf lbServices.Project.accounts
         *
         * @description
         *
         * Update a related item by id for accounts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.updateById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::updateById::Project::accounts"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Category",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/categories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Category.project() instead.
        "prototype$__get__project": {
          url: urlBase + "/categories/:id/project",
          method: "GET"
        },

        // INTERNAL. Use Category.cards.findById() instead.
        "prototype$__findById__cards": {
          url: urlBase + "/categories/:id/cards/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.cards.destroyById() instead.
        "prototype$__destroyById__cards": {
          url: urlBase + "/categories/:id/cards/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cards.updateById() instead.
        "prototype$__updateById__cards": {
          url: urlBase + "/categories/:id/cards/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.cards() instead.
        "prototype$__get__cards": {
          isArray: true,
          url: urlBase + "/categories/:id/cards",
          method: "GET"
        },

        // INTERNAL. Use Category.cards.create() instead.
        "prototype$__create__cards": {
          url: urlBase + "/categories/:id/cards",
          method: "POST"
        },

        // INTERNAL. Use Category.cards.destroyAll() instead.
        "prototype$__delete__cards": {
          url: urlBase + "/categories/:id/cards",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cards.count() instead.
        "prototype$__count__cards": {
          url: urlBase + "/categories/:id/cards/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#create
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#upsert
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/categories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#exists
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/categories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/categories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#find
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/categories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findOne
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/categories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#updateAll
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/categories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#deleteById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/categories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#count
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/categories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#prototype$updateAttributes
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/categories/:id",
          method: "PUT"
        },

        // INTERNAL. Use Card.category() instead.
        "::get::Card::category": {
          url: urlBase + "/cards/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Project.categories.findById() instead.
        "::findById::Project::categories": {
          url: urlBase + "/projects/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.categories.destroyById() instead.
        "::destroyById::Project::categories": {
          url: urlBase + "/projects/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.categories.updateById() instead.
        "::updateById::Project::categories": {
          url: urlBase + "/projects/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.categories() instead.
        "::get::Project::categories": {
          isArray: true,
          url: urlBase + "/projects/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Project.categories.create() instead.
        "::create::Project::categories": {
          url: urlBase + "/projects/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Project.categories.destroyAll() instead.
        "::delete::Project::categories": {
          url: urlBase + "/projects/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Project.categories.count() instead.
        "::count::Project::categories": {
          url: urlBase + "/projects/:id/categories/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Category#updateOrCreate
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Category#update
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Category#destroyById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Category#removeById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Category#modelName
    * @propertyOf lbServices.Category
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Category`.
    */
    R.modelName = "Category";


        /**
         * @ngdoc method
         * @name lbServices.Category#project
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Fetches belongsTo relation project
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.project = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::Category::project"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.cards
     * @header lbServices.Category.cards
     * @object
     * @description
     *
     * The object `Category.cards` groups methods
     * manipulating `Card` instances related to `Category`.
     *
     * Call {@link lbServices.Category#cards Category.cards()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#cards
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries cards of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::get::Category::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cards#count
         * @methodOf lbServices.Category.cards
         *
         * @description
         *
         * Counts cards of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.cards.count = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::count::Category::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cards#create
         * @methodOf lbServices.Category.cards
         *
         * @description
         *
         * Creates a new instance in cards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards.create = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::create::Category::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cards#destroyAll
         * @methodOf lbServices.Category.cards
         *
         * @description
         *
         * Deletes all cards of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cards.destroyAll = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::delete::Category::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cards#destroyById
         * @methodOf lbServices.Category.cards
         *
         * @description
         *
         * Delete a related item by id for cards
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for cards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cards.destroyById = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::destroyById::Category::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cards#findById
         * @methodOf lbServices.Category.cards
         *
         * @description
         *
         * Find a related item by id for cards
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for cards
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards.findById = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::findById::Category::cards"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cards#updateById
         * @methodOf lbServices.Category.cards
         *
         * @description
         *
         * Update a related item by id for cards
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `fk` – `{*}` - Foreign key for cards
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Card` object.)
         * </em>
         */
        R.cards.updateById = function() {
          var TargetResource = $injector.get("Card");
          var action = TargetResource["::updateById::Category::cards"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.AccountProject
 * @header lbServices.AccountProject
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccountProject` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccountProject",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/AccountProjects/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use AccountProject.account() instead.
        "prototype$__get__account": {
          url: urlBase + "/AccountProjects/:id/account",
          method: "GET"
        },

        // INTERNAL. Use AccountProject.project() instead.
        "prototype$__get__project": {
          url: urlBase + "/AccountProjects/:id/project",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#create
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountProject` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/AccountProjects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#upsert
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountProject` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/AccountProjects",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#exists
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/AccountProjects/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#findById
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountProject` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/AccountProjects/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#find
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountProject` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/AccountProjects",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#findOne
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountProject` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/AccountProjects/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#updateAll
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/AccountProjects/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#deleteById
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/AccountProjects/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#count
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/AccountProjects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#prototype$updateAttributes
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountProject` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/AccountProjects/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.AccountProject#updateOrCreate
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccountProject` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#update
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#destroyById
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#removeById
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.AccountProject#modelName
    * @propertyOf lbServices.AccountProject
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AccountProject`.
    */
    R.modelName = "AccountProject";


        /**
         * @ngdoc method
         * @name lbServices.AccountProject#account
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Fetches belongsTo relation account
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.account = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::AccountProject::account"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AccountProject#project
         * @methodOf lbServices.AccountProject
         *
         * @description
         *
         * Fetches belongsTo relation project
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Base id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.project = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::AccountProject::project"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
