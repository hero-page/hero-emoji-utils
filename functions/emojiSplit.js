/* eslint-disable */ 

/**
 * Splits a string into an array of characters and emojis.
 * Handles standard single-codepoint emojis, combined emojis (e.g. country flags),
 * and skin-tone-modified emojis. It does not handle invalid emoji sequences or emojis with multiple skin tones.
 *
 * @param {string} inputString - The string to be split into characters and emojis.
 * @return {string[]} An array containing the characters and emojis from the input string.
 *
 * @example
 * // returns ['H', 'e', 'l', 'l', 'o', ' ', '😃', '🌎', '🎉']
 * emojiSplit('Hello 😃🌎🎉');
 */
function emojiSplit(inputString) {
    const regex = /[\uD800-\uDFFF][\uDE00-\uDE4F]|[\u2600-\u26FF]|(?:[\uD800-\uDFEF][\uDFFF])|./g;
    return inputString.match(regex).map((char) => char.replace(regex, '$1$2$3'));
}

module.exports = {
    emojiSplit
};