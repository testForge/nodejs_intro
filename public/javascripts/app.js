
var APP = {};

var app = angular.module("notesApp", []);

var notes = [];
app.controller("NoteController", ['$scope', '$http', function($scope, $http){
    $scope.notes = notes;
    $scope.loadNotes = function(){
        $http.get('/notes')
            .success(function(data){
                $scope.notes = [];
                data.notes.forEach((note, idx) =>{
                    $scope.notes.push(note);
                });

                console.log($scope.notes);
            });
    };

    $scope.editNote = (note)=>{
        $http.put('/notes', {title: note.title})
            .success(function(data){
                console.log(data);
            });
    };
}]);

