angular.module('plunker', ['ui.bootstrap']);
function AssistantCtrl($scope, $rootScope) {
  $scope.oneAtATime = true;
  /*
  status = 1 : TO DO
  status = 2 : IN PROGRESS
  status = 3 : DONE
  */
  $rootScope.groups = [
    {
      title: "Coordonnées",
      preview: "ClicRDV, 9 Rue Maurice Mallet, 92521 Issy les Mouline...",
      content: "http://localhost:3000/assets/partials/coordonnees-template.html",
      status: 3
    },
    {
      title: "Secteur d'activité",
      preview: "Docteur généraliste",
      content: "http://localhost:3000/assets/partials/secteur-activite-template.html",
      status: 3
    },
    {
      title: "Prise de rendez-vous par Internet",
      preview: "Activée",
      content: "http://localhost:3000/assets/partials/rendez-vous-internet-template.html",
      status: 3
    },
    {
      title: "Horaires",
      preview: "",
      content: "http://localhost:3000/assets/partials/horaire-template.html",
      status: 1
    },
    {
      title: "Agendas",
      preview: "",
      content: "http://localhost:3000/assets/partials/agenda-template.html",
      status: 1
    },
    {
      title: "RDV proposés",
      preview: "",
      content: "http://localhost:3000/assets/partials/rendez-vous-proproses-template.html",
      status: 1
    }
  ];

  $rootScope.groupNb = $scope.groups.length;

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}