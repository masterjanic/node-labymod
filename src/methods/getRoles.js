'use strict';

const fetch = require('node-fetch');
const { availableRoles } = require('../data/Data');

/**
 * Gets the list of roles a LabyMod player has.
 * @param {string} uuid - The uuid of the user to search for.
 * @returns {Promise<unknown>}
 */
module.exports = function getRoles(uuid) {
  return new Promise((resolve, reject) => {
    if (uuid.length < 36 || uuid.length > 36) return reject(new Error('Only a 36-character UUID can be specified.'));

    fetch(`https://dl.labymod.net/userdata/${uuid}.json`)
      .then(res => res.json())
      .then(json => {
        let roles = json.g?.map(g => g.i) || [];
        resolve(availableRoles.filter(ar => roles.includes(ar.id)));
      })
      .catch(err => reject(err));
  });
};
