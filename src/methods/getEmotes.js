'use strict';

const fetch = require('node-fetch');
const { availableEmotes } = require('../data/Data');

/**
 * Gets the list of owned emotes by a user.
 * @param {string} uuid - The uuid of the user to search for.
 * @returns {Promise<unknown>}
 */
module.exports = function getEmotes(uuid) {
  return new Promise((resolve, reject) => {
    if (uuid.length < 36 || uuid.length > 36) return reject(new Error('Only a 36-character UUID can be specified.'));

    fetch(`https://dl.labymod.net/userdata/${uuid}.json`)
      .then(res => res.json())
      .then(json => {
        let emotes = json.e || [];
        resolve(availableEmotes.filter(ae => emotes.includes(ae.id)));
      })
      .catch(err => reject(err));
  });
};
