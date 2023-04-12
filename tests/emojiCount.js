/* eslint-disable */ 


        const {emojiCount} = require("../functions/emojiCount"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for emojiCount.
 */
function testEmojiCount() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "emojiCount";

    // Test case 1: Standard single-codepoint emojis
    try {
        const inputString = "Hello 😃🌎🎉";
        const expectedResult = 3;
        const actualResult = emojiCount(inputString);
        if (actualResult === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 2: Combined emojis (e.g. country flags)
    try {
        const inputString = "Flags: 🇺🇸🇨🇦🇲🇽";
        const expectedResult = 3;
        const actualResult = emojiCount(inputString);
        if (actualResult === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 3: Skin-tone-modified emojis
    try {
        const inputString = "Skin tones: 👍🏻👍🏼👍🏽👍🏾👍🏿";
        const expectedResult = 5;
        const actualResult = emojiCount(inputString);
        if (actualResult === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 4: No emojis
    try {
        const inputString = "Hello world!";
        const expectedResult = 0;
        const actualResult = emojiCount(inputString);
        if (actualResult === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 5: Invalid emoji sequence
    try {
        const inputString = "Invalid: 👨‍❌‍💼";
        const expectedResult = 0;
        const actualResult = emojiCount(inputString);
        if (actualResult === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testEmojiCount
};