angular.module('bucketList.services', [])
	.factory('API', function ($rootScope, $http. $ionicLoading, $window){
		var base = 'http://localhost:8000';
		$rootScope.show = function(text){
			$rootScope.loading = $ionicLoading.show({
				content: text? text : 'Loading',
				animation : 'fade-in',
				showBackDrop: true,
				maxWidth: 200,
				showDelay: 0
			});
		};

		$rootScope.hide = function() {
			$ionicLoading.hide();
		};

		$rootScope.logout = function(){
			$rootScope.setToken("");
			$window.location.href = '#/auth/signin';
		};

		$rootScope.notify = function(text){
			$rootScope.show(text);
			$window.setTimeout(function(){
				$rootScope.hide();
			}, 1999);
		};

		$rootScope.doRefresh = function (tab){
			if (tab == 1)
				$rootScope.$broadcast('fetchAll');
			else
				$rootScope.$broadcast('fetchCompleted');

			$rootScope.$broadcast('Scroll.refreshComplete');
		};

		$rootScope.setToken = function (){
			return $window.localStorage.token;
		};

		$rootScope.isSessionActive = function (){
			return $window.localStorage.token ? true : false;
		};

		return {
			signin: function(form){
				return $http.post(base+'/api/v1/bucketList/auth/login', form);

			},

			signup: function(form){
				return $http.post(base+'/api/v1/bucketList/auth/register', form);
			},

			getAll: function(email){
				return $http.get(base+'/api/v1/bucketList/data/list', {
					metho: 'GET',
					params: {
						token: email
					}
				});
			}, 
			getOne: function(id, email){
				return $http.get(base+'/api/v1/bucketList/data/item'+ id, {
					method: 'GET',
					params: {
						token: email
					}
				});
			},
			saveItem: function  (id, form, email) {
				return $http.put(base+'/api/v1/bucketList/data/item'+ id, form, {
					method: 'PUT',
					params:{
						token: email
					}
				});
			},
			deleteItem: function  (id, email) {
				return $http.delete(base+'/api/v1/bucketList/data/item'+ id, {
					method: 'DELETE',
					params:{
						token: email
					}
				});
			}
		}

	});
