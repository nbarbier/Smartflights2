'use strict';

/**
 * @ngdoc function
 * @name smartFlightsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartFlightsApp
 */
angular.module('smartFlightsApp')
  .controller('MainCtrl', function($scope, $http) {
  
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();
  

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };
  
  $scope.format = 'dd-MM-yyyy';

  $scope.selected = undefined;
  


  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('http://free.rome2rio.com/api/1.2/json/Autocomplete', {
      params: {
        query: val,
        key: 'VSleJCTL'
      }
    }).then(function(response){
      return response.data.places.map(function(item){
        return item.longName;
        /*$scope.AirportName = item.name;
        $scope.AirportCode = item.code;
        $scope.AirportLocation = item.location;

        return $scope.results={name:item.name, code:item.code, item.location};
        */
      });
    });
  };

  /*$scope.getLocation = function(val) {
    return $http.get('http://airportcode.riobard.com/search', {
      params: {
        q: val,
        fmt: 'JSON'
      }
    }).success(function(response){
      return response.data.map(function(item){
        return item.name + ' (' +item.code + '), ' + item.location;
      });
    });
  };*/

  $scope.airportList = {'airports': [
        {'name':'Hartsfield–Jackson Atlanta International Airport','iata':'ATL','location':'Atlanta, GA'},
        {'name':'Los Angeles International Airport','iata':'LAX','location':'Los Angeles, CA'},
        {'name':'O Hare International Airport','iata':'ORD','location':'Chicago, IL'},
        {'name':'Dallas/Fort Worth International Airport','iata':'DFW','location':'Dallas/Fort Worth, TX'},
        {'name':'Denver International Airport','iata':'DEN','location':'Denver, CO'},
        {'name':'John F. Kennedy International Airport','iata':'JFK','location':'New York, NY'},
        {'name':'San Francisco International Airport','iata':'SFO','location':'San Francisco, CA'},
        {'name':'Charlotte Douglas International Airport','iata':'CLT','location':'Charlotte, NC'},
        {'name':'McCarran International Airport','iata':'LAS','location':'Las Vegas, NV'},
        {'name':'Phoenix Sky Harbor International Airport','iata':'PHX','location':'Phoenix, AZ'},
        {'name':'Miami International Airport','iata':'MIA','location':'Miami, FL'},
        {'name':'George Bush Intercontinental Airport','iata':'IAH','location':'Houston, TX'},
        {'name':'Newark Liberty International Airport','iata':'EWR','location':'Newark/New York, NJ'},
        {'name':'Orlando International Airport','iata':'MCO','location':'Orlando, FL'},
        {'name':'Seattle–Tacoma International Airport','iata':'SEA','location':'Seattle, WA'},
        {'name':'Minneapolis–Saint Paul International Airport','iata':'MSP','location':'Minneapolis/St. Paul, MN'},
        {'name':'Detroit Metropolitan Wayne County Airport','iata':'DTW','location':'Detroit, MI'},
        {'name':'Logan International Airport','iata':'BOS','location':'Boston, MA'},
        {'name':'Philadelphia International Airport','iata':'PHL','location':'Philadelphia, PA'},
        {'name':'LaGuardia Airport','iata':'LGA','location':'New York, NY'}
        ]
    };


    $scope.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];


    $scope.callWebService = function(from, to) {
    console.log('callWebService function');
    console.log(from);
    console.log(to);
    return $http.get('http://free.rome2rio.com/api/1.2/json/Search', {
      params: {
        key: 'VSleJCTL',
        //oName: $scope.from1,
        oName: from,
        dName: to,
        flags: '0x000FFFF0'
      }
    }).success(function(response){
      $scope.matchResult=response;
      console.log('INNER RESULT');
      console.log($scope.matchResult);
      console.log($scope.matchResult.places[0].longName);
      console.log($scope.matchResult.places[1].longName);
      var i;
      for (i = 0; i < $scope.matchResult.routes.length; i++) {
      console.log($scope.matchResult.routes[i].name);
    }; 
      });
  };
    
  $scope.getMatch = function() {
    console.log('getMatch function');
    //console.log($scope.from1.iata);
    var i;
    var from1= $scope.from1.iata;
    //var from1='BOS';
    for (i = 0; i < $scope.airportList.airports.length; i++) {
      if (from1 != $scope.airportList.airports[i].iata) {
        $scope.callWebService(from1,$scope.airportList.airports[i].iata);
      }
    };

    var from2= $scope.from1.iata;
    //var from2='LAX';
    for (i = 0; i < $scope.airportList.airports.length; i++) {
      if (from2 != $scope.airportList.airports[i].iata) {
        $scope.callWebService(from2,$scope.airportList.airports[i].iata);
      }
    };

  };



});