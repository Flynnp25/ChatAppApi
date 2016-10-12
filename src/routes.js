'use strict';

import errors from './components/errors';
import { Router } from 'express'

const router = new Router();

// Insert routes below
router.use('/api/user', require('./api/user'));

// All undefined asset or api routes should return a 404
router.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(errors[404]);

export default router
