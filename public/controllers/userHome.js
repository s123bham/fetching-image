app.controller("userHomeCntrl",function ($scope,$http,$location,$rootScope)
 {
	
	$scope.myProfile = function ()
    {
		$scope.dtDetails=true
		$scope.dt=$rootScope.userData;
	}
	$scope.logout=function(){
		$location.path("/userLogin")
	}
})