angular.module('listaTelefonica')
  .controller('listaTelefonicaCtrl', function ($scope) {

    $scope.app = "Lista Telefonica";

    $scope.contatos = [
      { nome: 'Aquiles', telefone: '99999999', data: new Date() },
      { nome: 'Thauany', telefone: '99999999', data: new Date() },
      { nome: 'Clarice', telefone: '99999999', data: new Date() }
    ];

    $scope.operadoras = [
      { nome: 'Tim', codigo: '1', categoria: 'Celular' },
      { nome: 'Claro', codigo: '2', categoria: 'Celular' },
      { nome: 'Oi', codigo: '3', categoria: 'Celular' },
      { nome: 'Vivo', codigo: '4', categoria: 'Celular' },
      { nome: 'GVT', codigo: '5', categoria: 'Fixo' },
      { nome: 'Embratel', codigo: '6', categoria: 'Fixo' }
    ];

    $scope.adicionarContato = function (contato) {
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato; //Limpa o form
      $scope.contatoForm.$setPristine(); //Remove a mensagem obrigatoria após adicionar
    }

    $scope.apagarContatos = function (contatos) {
      $scope.contatos = contatos.filter(function (contato) {
        if (!contato.selecionado) return contato;
      });
    };

    $scope.isContatoSelecionado = function (contatos) {
      return contatos.some(function (contato) {
        return contato.selecionado;
      });
    };



  });