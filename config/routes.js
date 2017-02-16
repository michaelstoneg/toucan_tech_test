const router = require('express').Router();

const membersController = require('../controllers/member');

router.route('/members')
  .get(membersController.index)
  .post(membersController.create);


router.route('/members/:id')
  .get(membersController.show)
  .put(membersController.update)
  .patch(membersController.update)
  .delete(membersController.delete);

module.exports = router;
