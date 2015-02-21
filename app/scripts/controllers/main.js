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

  $scope.oneAtATime = true;


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

    var r1 = [];

    $scope.callWebService = function(from, to) {
    //console.log('callWebService function');
    //console.log(from);
    //console.log(to);
    return $http.get('http://free.rome2rio.com/api/1.2/json/Search', {
      params: {
        key: 'VSleJCTL',
        oName: from,
        dName: to,
        flags: '0x000FFFF0'
      }
      }).success(function(response){

        $scope.CWSResponse = response;
        //console.log($scope.CWSResponse.routes[0].segments[0].tCode);
        r1.push($scope.CWSResponse.routes[0].segments[0]);
        console.log('response: ');
        console.log(response);
        console.log('r1 array: ');
        console.log(r1);
        return $scope.CWSResponse;
        
        /*var i;
        for (i = 0; i < $scope.matchResult.routes.length; i++) {
          console.log($scope.matchResult.routes[i].name);
        };*/
        
      });
  };

  

    
  $scope.getMatch = function() {
    console.log('getMatch function');
    //console.log($scope.from1.iata);
    var i;
    var from1 = $scope.from1.iata;
    var from2 = $scope.from2.iata;
    
    //var from1='BOS';
    
    

    //$scope.callWebService(from1,from2);
    
    

    for (i = 0; i < $scope.airportList.airports.length; i++) {
      if (from1 != $scope.airportList.airports[i].iata) {
        $scope.callWebService(from1,$scope.airportList.airports[i].iata);
      }
    };


    /*
    var from2= $scope.from1.iata;
    //var from2='LAX';
    for (i = 0; i < $scope.airportList.airports.length; i++) {
      if (from2 != $scope.airportList.airports[i].iata) {
        $scope.callWebService(from2,$scope.airportList.airports[i].iata);
      }
    };
    */

  };

  

});
