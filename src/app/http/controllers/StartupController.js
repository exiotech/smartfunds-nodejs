import CRUDController from './_CRUDController';

import {
  queryStartups,
  getSingleStartup,
  createStartup,
  updateStartup,
  deleteStartup
} from 'services/startups';

class StartupController extends CRUDController {
  constructor() {
    super();
    this._modelName = 'Startup';
    this._path = '/start';

    this._query = queryStartups;
    this._getModel = getSingleStartup;
    this._createModel = createStartup;
    this._updateModel = updateStartup;
    this._deleteModel = deleteStartup;
  }
}

export default new StartupController();
