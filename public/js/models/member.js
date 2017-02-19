angular
  .module('membersApp')
  .factory('Member', Member);

Member.$inject = ['$resource'];

function Member ($resource) {
  const Member = new $resource('/members/:id', { id: '@_id'}, {
    update: { method: 'PUT' }
  });

  return Member;

}
