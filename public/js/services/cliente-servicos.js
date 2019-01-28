angular.module('clienteServicos', ['ngResource'])
	.factory('recursoCliente', function($resource) {

		return $resource('/v1/fotos/:fotoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeClientes", function(recursoCliente, $q) {
		var service = {};
		service.cadastrar = function(cliente) {
			return $q(function(resolve, reject) {

				if(cliente._id) {
					recursoCliente.update({clienteId: cliente._id}, cliente, function() {
						resolve({
							mensagem: 'Cliente ' + cliente.titulo + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a cliente ' + cliente.titulo
						});
					});

				} else {
					recursoCliente.save(cliente, function() {
						resolve({
							mensagem: 'Cliente ' + cliente.titulo + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a cliente ' + cliente.titulo
						});
					});
				}
			});
		};
		return service;
    });