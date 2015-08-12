angular.module('map', [])
  // Defining our map controller
  .controller('mapController', function($scope){
    // Setting our $scope statename that will change on click
    // Will pass in later to get data from state selection DB
    $scope.stateName = "";

    $scope.display = function(){
      $('#vmap').vectorMap({ map: 'usa_en',
    backgroundColor: '#1640BC',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    enableZoom: true,
    hoverColor: '#8AA0DE',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegion: null, 
    onRegionClick: function(element, code, region)
    { 
      $('#stateInfo #stateName').text(region);
      $.ajax({
        url:'http://localhost:5678/state?'+region,
        type: 'post',
        data: {
          'state' : region
        },
        dataType: 'text',
        success: function (data){
          console.log('Success')
        }
      })
    }
  });
    }
    }
  )