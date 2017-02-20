angular.module('membersApp')
  .controller('MembersController', MembersController);

MembersController.$inject = ['Member'];
function MembersController(Member) {

  const members = this;
  members.all = [];
  members.addMember = addMember;
  members.removeMember = removeMember;
  members.filter = undefined;
  // members.goFilter = goFilter;
  //
  // function goFilter(a) {
  //   members.filter = a;
  //   console.log('filter string', members.filter);
  // }

  members.newMember = {};

  function addMember() {

    return Member.save(members.newMember, getMembers, onError);

  }

  function getMembers() {

    return Member.query(data => {
      members.all = data;

      console.log('all members', members.all);


      function sort(arr) {
        console.log('sorting');
        arr.sort(function(a, b) {
          var schoolA=a.school.toLowerCase(), schoolB=b.school.toLowerCase();
          if (schoolA < schoolB) //sort string ascending
            return -1;
          // console.log('sorted', members.all);
          if (schoolA > schoolB)
            return 1;
          return 0; //default return value (no sorting)
        });

      }
      sort(members.all, 'school');



    }, onError);

  }

  function removeMember(member) {

    return Member.remove({ id: member._id }, getMembers, onError);

  }

  function onError(err) {
    console.log(err);
  }

  getMembers();
  console.log('members controller', 'filter', members.filter);
}
