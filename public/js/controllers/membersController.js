angular.module('membersApp')
  .controller('MembersController', MembersController);

MembersController.$inject = ['Member'];
function MembersController(Member) {

  const members = this;
  members.all = [];
  members.addMember = addMember;
  members.removeMember = removeMember;

  members.newMember = {};

  function addMember() {

    return Member.save(members.newMember, getMembers, onError);

  }

  function getMembers() {

    return Member.query(data => {
      members.all = data;
    }, onError);

  }

  function removeMember(member) {

    return Member.remove({ id: member._id }, getMembers, onError);

  }

  function onError(err) {
    console.log(err);
  }

  getMembers();
  console.log('members controller');
}
