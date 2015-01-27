'use strict';

/**
 * @ngdoc function
 * @name phrPrototypeApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the phrPrototypeApp
 */
angular.module('phrPrototypeApp')
  .controller('ProfileCtrl', function ($scope, $location, $anchorScroll, account, profile) {

  	$scope.profile = {};

    $scope.navClick = function (element) {
        var old = $location.hash();
        $location.hash(element);
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        $location.hash(old);
    };

  	// account.account(function(err, accountInfo) {

  		
  	// 	$scope.profile = accountInfo;
   //    console.log('account info', accountInfo);

  	// 	//Shims for HL7 weirdness.
  	// 	var tmpDOB = moment(accountInfo.dob[0].date).format('YYYY-MM-DD');

  	// 	$scope.profile.dob = tmpDOB;
  	// 	$scope.profile.primaryEmail = accountInfo.email[0].email;
  	// });

  profile.showProfile(function(err, profileInfo) {
    $scope.profile = profileInfo;
    // console.log('profile controller', $scope.profile.email);
  });

  	//console.log($scope.profile);

  });
