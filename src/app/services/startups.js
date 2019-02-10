import Startup from 'model/Startup';
import { parseQueryOptions } from 'lib/utils';

export function queryStartups(params) {
  const options = parseQueryOptions(params);
  const query = {};
  if (params.id) {
    query._id = params.id;
  }

  return Startup.paginate(query, options).then(result => {
    const data = {
      ...result,
      startups: result.docs
    };
    delete data.docs;
    return data;
  });
}

export function getSingleStartup(id) {
  return Startup.findById(id);
}

export async function createStartup(data, creator = null) {
  const createdById = creator ? creator._id : null;
  return Startup.create(data, createdById);
}

export function updateStartup(id, data) {
  return Startup.findById(id).then(startup => {
    startup.mergeWithData(data);
    return startup.save();
  });
}

export function deleteStartup(id, deletedBy) {
  return Startup.findById(id).then(startup => startup.delete(deletedBy));
}
