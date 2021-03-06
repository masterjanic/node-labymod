'use strict';

const fetch = require('node-fetch');
const { availableEmotes } = require('../data/Data');

/**
 * Fetches the daily emotes of the LabyMod shop.
 * @param {('all', 'rare', 'raw')} type - Defines the output type.
 * @returns {Promise<unknown>}
 */
module.exports = function getShop(type = 'all') {
  return new Promise((resolve, reject) => {
    fetch('https://dl.labymod.net/advertisement/entries.json')
      .then(res => res.json())
      .then(json => {
        let dailyEmotes = json.dailyEmotes.map(e => e.id);

        type = type.toLowerCase();
        if (!['raw', 'all', 'rare'].includes(type)) type = 'all';

        if (type === 'raw') return resolve(dailyEmotes);
        if (type === 'all') return resolve(availableEmotes.filter(ae => dailyEmotes.includes(ae.id)));
        if (type === 'rare') return resolve(availableEmotes.filter(ae => dailyEmotes.includes(ae.id) && ae.rare));
      })
      .catch(err => reject(err));
  });
};
