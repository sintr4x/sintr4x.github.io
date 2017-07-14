 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC0kUYQaxQ6Lrz9_Jmj1gSnjKw9IP_UYbI",
    authDomain: "pannkakor-9c87b.firebaseapp.com",
    databaseURL: "https://pannkakor-9c87b.firebaseio.com",
    projectId: "pannkakor-9c87b",
    storageBucket: "",
    messagingSenderId: "649190659186"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
        text: "",
        skribent: ""
    };

    $scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
};
});

$(document).ready(function(){
    $("#bokstav-a").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#bokstav-b").click(function(){
        $("#panel2").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#bokstav-c").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});