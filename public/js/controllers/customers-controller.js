app.controller('customersController', function($scope, $mdDialog, $mdToast, customersFactory) {
 	$scope.customer = {};

    $scope.readCustomers = function() {
 
        customersFactory.readCustomers()
        .then(function successCallback(response){
            $scope.customers = response.data.content;
        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });
 
    }

	$scope.showCreateCustomerForm = function(event){
	    $mdDialog.show({
	        controller: DialogController,
	        templateUrl: './partials/customer.html',
	        parent: angular.element(document.body),
	        clickOutsideToClose: true,
	        scope: $scope,
	        preserveScope: true,
	        fullscreen: true
	    });
	}

	$scope.createCustomer = function(){
	    customersFactory.createCustomer($scope).then(function successCallback(response){

	        $scope.showToast(response.data.message);
	        $scope.readCustomers();

	        $scope.cancel();
	 
	        $scope.clearCustomerForm();
	 
	    }, function errorCallback(response){
	        $scope.showToast("Unable to create record.");
	    });
	}

	$scope.readOneCustomer = function(id){
	    customersFactory.readOneCustomer(id).then(function successCallback(response){

    		$scope.customer.id = response.data.id;
			$scope.customer.name = response.data.name;
			$scope.customer.creditLine = response.data.creditLine;
			$scope.customer.creditRisk = response.data.creditRisk;
			$scope.customer.interestRate = response.data.interestRate;
	 
	        $mdDialog.show({
	            controller: DialogController,
	            templateUrl: './partials/customer-detail.html',

	            parent: angular.element(document.body),
	            clickOutsideToClose: true,
	            scope: $scope,
	            preserveScope: true,
	            fullscreen: true
	        }).then(
	            function(){},
	 
	            // user clicked 'Cancel'
	            function() {
	                // clear modal content
	                $scope.clearCustomerForm();
	            }
	        );
	 
	    }, function errorCallback(response){
	        $scope.showToast("Unable to retrieve record.");
	    });
	 
	}

	$scope.showUpdateCustomerRiskForm = function(id){
	    customersFactory.readOneCustomer(id).then(function successCallback(response){

    		$scope.customer.id = response.data.id;
			$scope.customer.name = response.data.name;
			$scope.customer.creditLine = response.data.creditLine;
			$scope.customer.creditRisk = response.data.creditRisk;
			$scope.customer.interestRate = response.data.interestRate;
	 
	        $mdDialog.show({
	            controller: DialogController,
	            templateUrl: './partials/customer-update-risk.html',
	            parent: angular.element(document.body),
	            targetEvent: event,
	            clickOutsideToClose: true,
	            scope: $scope,
	            preserveScope: true,
	            fullscreen: true
	        }).then(
	            function(){},
	            // user clicked 'Cancel'
	            function() {
	                // clear modal content
	                $scope.clearCustomerForm();
	            }
	        );
	 
	    }, function errorCallback(response){
	        $scope.showToast("Unable to retrieve record.");
	    });
	}

	$scope.showUpdateCustomerForm = function(id){
	    customersFactory.readOneCustomer(id).then(function successCallback(response){

    		$scope.customer.id = response.data.id;
			$scope.customer.name = response.data.name;
			$scope.customer.creditLine = response.data.creditLine;
			$scope.customer.creditRisk = response.data.creditRisk;
			$scope.customer.interestRate = response.data.interestRate;
	 
	        $mdDialog.show({
	            controller: DialogController,
	            templateUrl: './partials/customer-update.html',
	            parent: angular.element(document.body),
	            targetEvent: event,
	            clickOutsideToClose: true,
	            scope: $scope,
	            preserveScope: true,
	            fullscreen: true
	        }).then(
	            function(){},
	            // user clicked 'Cancel'
	            function() {
	                // clear modal content
	                $scope.clearCustomerForm();
	            }
	        );
	 
	    }, function errorCallback(response){
	        $scope.showToast("Unable to retrieve record.");
	    });
	}

	$scope.showUpdateCustomerCreditLineForm = function(id){
	    customersFactory.readOneCustomer(id).then(function successCallback(response){

    		$scope.customer.id = response.data.id;
			$scope.customer.name = response.data.name;
			$scope.customer.creditLine = response.data.creditLine;
			$scope.customer.creditRisk = response.data.creditRisk;
			$scope.customer.interestRate = response.data.interestRate;
	 
	        $mdDialog.show({
	            controller: DialogController,
	            templateUrl: './partials/customer-update-credit-line.html',
	            parent: angular.element(document.body),
	            targetEvent: event,
	            clickOutsideToClose: true,
	            scope: $scope,
	            preserveScope: true,
	            fullscreen: true
	        }).then(
	            function(){},
	            // user clicked 'Cancel'
	            function() {
	                // clear modal content
	                $scope.clearCustomerForm();
	            }
	        );
	 
	    }, function errorCallback(response){
	        $scope.showToast("Unable to retrieve record.");
	    });
	}

	$scope.updateCustomer = function() {
	 
	    customersFactory.updateCustomer($scope).then(function successCallback(response){
	        $scope.showToast(response.data.message);
	        $scope.readCustomers();
	        $scope.cancel();
	        $scope.clearCustomerForm();
	 
	    },
	    function errorCallback(response) {
	        $scope.showToast("Unable to update record.");
	    });
	 
	}

	$scope.updateCustomerRisk = function() {
	    customersFactory.updateCustomer($scope).then(function successCallback(response){
	        $scope.showToast(response.data.message);
	        $scope.readCustomers();
	        $scope.cancel();
	        $scope.clearCustomerForm();
	 
	    },
	    function errorCallback(response) {
	        $scope.showToast("Unable to update record.");
	    }); 
	}

	$scope.updateCustomer = function(){
	 
	    customersFactory.updateCustomer($scope).then(function successCallback(response){
	        $scope.showToast(response.data.message);
	        $scope.readCustomers();
	        $scope.cancel();
	        $scope.clearCustomerForm();
	 
	    },
	    function errorCallback(response) {
	        $scope.showToast("Unable to update record.");
	    });
	}

	$scope.updateCustomer = function() {
	    customersFactory.updateCustomer($scope).then(function successCallback(response){
	        $scope.showToast(response.data.message);
	        $scope.readCustomers();
	        $scope.cancel();
	        $scope.clearCustomerForm();
	    },
	    function errorCallback(response) {
	        $scope.showToast("Unable to update record.");
	    });
	 
	}

	$scope.updateCustomerRisk = function() {
	    customersFactory.updateCustomerRisk($scope).then(function successCallback(response){
	        $scope.showToast(response.data.message);
	        $scope.readCustomers();
	        $scope.cancel();
	        $scope.clearCustomerForm();
	    },
	    function errorCallback(response) {
	        $scope.showToast("Unable to update record.");
	    });
	 
	}

	$scope.updateCustomerCreditLine = function() {
	    customersFactory.updateCustomerCreditLine($scope).then(function successCallback(response){
	        $scope.showToast(response.data.message);
	        $scope.readCustomers();
	        $scope.cancel();
	        $scope.clearCustomerForm();
	    },
	    function errorCallback(response) {
	        $scope.showToast("Unable to update record.");
	    });
	}

	$scope.confirmDeleteCustomer = function(event, id){
	    $scope.customer.id = id;
	    var confirm = $mdDialog.confirm()
	        .title('Você têm certeza?')
	        .textContent('O cliente será deletado.')
	        .targetEvent(event)
	        .ok('Sim')
	        .cancel('Não');
	    $mdDialog.show(confirm).then(
	        function() {
	            $scope.deleteCustomer();
	        },
	        function() {
	            // hide dialog
	        }
	    );
	}

	$scope.deleteCustomer = function(){
	    customersFactory.deleteCustomer($scope.customer.id)
	    .then(function successCallback(response){
	        $scope.showToast(response.data.message);
	        $scope.readCustomers();
	    }, function errorCallback(response){
	        $scope.showToast("Unable to delete record.");
	    });
	 
	}

	$scope.searchCustomers = function(){
		if($scope.customer_search_keywords){
		    customersFactory.searchCustomers($scope.customer_search_keywords)
		    .then(function successCallback(response){
		        $scope.customers = response.data.content;
		    }, function errorCallback(response){
		        $scope.showToast("Unable to read record.");
		    });			
		} else {
	        customersFactory.readCustomers()
	        .then(function successCallback(response){
	            $scope.customers = response.data.content;
	        }, function errorCallback(response){
	            $scope.showToast("Unable to read record.");
	        });
		}

	}

	$scope.clearCustomerForm = function(){
		$scope.customer.id = "";
		$scope.customer.name = "";
		$scope.customer.creditLine = "";
		$scope.customer.creditRisk = "";
		$scope.customer.interestRate = "";
	}

	$scope.showToast = function(message){
	    $mdToast.show(
	        $mdToast.simple()
	            .textContent(message)
	            .hideDelay(3000)
	            .position("top right")
	    );
	}

	function DialogController($scope, $mdDialog) {
	    $scope.cancel = function() {
	        $mdDialog.cancel();
	    };
	}

});