function userController($scope) {
	$scope.fName = '';
	$scope.lName = '';
	$scope.passw1 = '';
	$scope.passw2 = '';
	$scope.users = [
	    {id: 1, fName:'Hege'  , lName:"Pege" },
	    {id: 2, fName:'Kim'   , lName:"Pim" },
	    {id: 3, fName:'Jack'  , lName:"Jones" },
	];
	$scope.edit=true;
	$scope.erro=false;
	$scope.incomplete=false;

	$scope.editUser=function(id){
		if( id='new' ){
			$scope.edit=true;
			$scope.incomplete = true;
			$scope.fName = '';
			$scope.lName = '';
		}else{
			$scope.edit= false;
			$scope.fName = $scope.users[id-1].fName;
       		$scope.lName = $scope.users[id-1].lName;        
		}
	}
}

