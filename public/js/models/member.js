angular
  .module('membersApp')
  .factory('Memeber', Memeber);

Memeber.$inject = ['$resource'];

function Memeber ($resource) {
  const Memeber = new $resource('/members/:id', { id: '@_id'}, {
    update: { method: 'PUT' }
  });

  return Memeber;

}
