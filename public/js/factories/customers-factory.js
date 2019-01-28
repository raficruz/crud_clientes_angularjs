app.factory("customersFactory", function($http){
 
    var factory = {};
 
    factory.readCustomers = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/customer/all'
        });
    };

    factory.createCustomer = function($scope){
        return $http({
            method: 'POST',
            data: {
                'name' : $scope.customer.name,
                'creditLine': $scope.customer.creditLine,
                'creditRisk': $scope.customer.creditRisk
            },
            url: 'http://localhost:8080/customer/new'
        });
    };
 
    factory.readOneCustomer = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/customer/' + id
        });
    };

    factory.updateCustomer = function($scope){
     
        return $http({
            method: 'PUT',
            data: {
                'id' : $scope.customer.id,
                'name' : $scope.customer.name,
                'creditLine' : $scope.customer.creditLine,
                'creditRisk' : $scope.customer.creditRisk,
                'interestRate' : $scope.customer.interestRate
            },
            url: 'http://localhost:8080/customer/' + $scope.customer.id
        });
    };

    factory.updateCustomerCreditLine = function($scope){
        return $http({
            method: 'PUT',
            data: {
                'id' : $scope.customer.id,
                'name' : $scope.customer.name,
                'creditLine' : $scope.customer.creditLine,
                'creditRisk' : $scope.customer.creditRisk,
                'interestRate' : $scope.customer.interestRate
            },
            url: 'http://localhost:8080/customer/set-credit-line/' + $scope.customer.id
        });
    };

    factory.updateCustomerRisk = function($scope){
        return $http({
            method: 'PUT',
            data: {
                'id' : $scope.customer.id,
                'name' : $scope.customer.name,
                'creditLine' : $scope.customer.creditLine,
                'creditRisk' : $scope.customer.creditRisk,
                'interestRate' : $scope.customer.interestRate
            },
            url: 'http://localhost:8080/customer/set-credit-risk/' + $scope.customer.id
        });
    };

    factory.deleteCustomer = function(id){
        return $http({
            method: 'PUT',
            data: { 'id' : id },
            url: 'http://localhost:8080/customer/disable/' + id
        });
    };

    factory.searchCustomers = function(keywords){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/customer/search/' + keywords
        });
    };

    return factory;
});