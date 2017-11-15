app.controller("userLoginCntrl",function ($scope,$http,$location,$rootScope) 
{
    $scope.login = function () 
    {
        var url = "http://localhost:5000/userLogin?userName="+$scope.dr.userName+"&password="+$scope.dr.password;
        $http.get(url)
       	.then(function(response)
        {
            	if(response.data !="error")
              {
            		$rootScope.userData=response.data
                	$scope.x=true
                	$location.path('/userHome')
            	}
              else
              {
            		$scope.dr.userName=""
            		$scope.dr.password=""
            		alert("Invalid username/password")
            	}
       })
    }
});