angular.module('plunker', ['ui.bootstrap']);
function AssistantCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Coordonnées",
      preview: "ClicRDV, 9 Rue Maurice Mallet, 92521 Issy les Mouline...",
      content: "test.html"
    },
    {
      title: "Secteur d'activité",
      preview: "Docteur généraliste",
      content: "partials/coordonnees-template.html"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}