const Member = require('../models/Member');

function membersIndex(request, response) {
  Member.find(function(error, members) {
    if(error) return response.status(500).json({message: 'Could not find any member'});

    response.json(members);
  });
}

function membersCreate(request, response) {
  var member = new Member(request.body);
  Member.save(function(error) {
    if(error) return response.status(400).json({messsage: 'Could not ceate member', error: error});
    response.json(member);
  });
}

function membersShow(request, response) {
  var id = request.params.id;

  Member.findById({_id: id}, function(error, member) {
    if(error) return response.status(500).json({message: 'Could not find member', error: error});
    if(!member) return response.status(404).json({message: 'Not found'});

    response.json(member);
  });
}

function membersUpdate(request, response) {
  var id = request.params.id;

  Member.findById({_id: id}, function(error, member) {
    if(error) return response.status(500).json({message: 'Could not find member', error: error});
    if(!member) return response.status(404).json({message: 'Not found'});

    if(request.body.name) member.name = request.body.name;
    if(request.body.email) member.email = request.body.email;
    if(request.body.school) member.school = request.body.school;

    member.save(function(error) {
      if(error) return response.status(400).json({messsage: 'Could not update member', error: error});

      response.json(member);
    });
  });
}

function membersDelete(request, response) {
  var id = request.params.id;

  Member.remove({_id: id}, function(error) {
    if(error) return response.status(500).json({message: 'Could not delete member', error: error });

    response.status(204).send();
  });
}

module.exports = {
  index: membersIndex,
  create: membersCreate,
  show: membersShow,
  update: membersUpdate,
  delete: membersDelete
};
