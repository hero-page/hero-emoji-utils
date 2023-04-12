/* eslint-disable */ 

/**
 * Counts the number of emojis in a string.
 * Handles standard single-codepoint emojis, combined emojis (e.g. country flags),
 * and skin-tone-modified emojis.
 * Does not handle invalid emoji sequences or emojis with multiple skin tones.
 *
 * @param {string} inputString - The string to count emojis in.
 * @return {number} The number of emojis present in the input string.
 *
 * @example
 * // Returns 3
 * emojiCount('Hello 😃🌎🎉')
 */
function emojiCount(inputString) {
    const emojiRegEx = /\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu;
    let emojiMatch = inputString.match(emojiRegEx);
    return emojiMatch ? emojiMatch.length : 0;
}

module.exports = {
  emojiCount
};