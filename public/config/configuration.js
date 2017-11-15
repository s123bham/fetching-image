app.config(function($routeProvider){
    $routeProvider
        .when('/userLogin',{
            templateUrl:"../userLogin.html",
            controller :"userLoginCntrl"
        })
        .when('/userRegister',{
            templateUrl:"../userRegister.html",
            controller :"userRegisterCntrl"
        })
        .when('/userHome',{
        	templateUrl:"../userHome.html",
        	controller :"userHomeCntrl"
        })
        .when('/pic1',{
            templateUrl:"../pic1.html"
        })
        .when('/pic2',{
            templateUrl:"../pic2.html"
        })

        .when('/pic3',{
            templateUrl:"../pic3.html"
        })
        .when('/pic4',{
            templateUrl:"../pic4.html"
        })

        .when('/pic5',{
            templateUrl:"../pic5.html"
        })


        .when('/',{
            templateUrl:"../userLogin.html",
            controller :"userLoginCntrl"
        })
});