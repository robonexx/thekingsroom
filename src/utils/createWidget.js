/**
 * Module dependencies
 */

import load from 'load-script';

/**
 * Create a new widget by requesting and using the SoundCloud Widget API.
 *
 * @param {String} id - reference to iframe element for widget
 * @param {Function} cb
 */

const createWidget = (id, cb) => {
    // load the API, it's namespaced as `window.SC`
  return load('https://w.soundcloud.com/player/api.js', () => {
    return cb(window.SC.Widget(id)); // eslint-disable-line new-cap
  });
};

/**
 * Expose `createWidget`
 */

export default createWidget;