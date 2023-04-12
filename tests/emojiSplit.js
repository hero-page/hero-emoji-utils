/* eslint-disable */ 


        const {emojiSplit} = require("../functions/emojiSplit"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests the emojiSplit function.
 */
function testEmojiSplit() {
    const name_of_function = "emojiSplit";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        const result = emojiSplit('Hello 😃🌎🎉');
        const expectedResult = ['H', 'e', 'l', 'l', 'o', ' ', '😃', '🌎', '🎉'];
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const result = emojiSplit('I ❤️ code! 💻');
        const expectedResult = ['I', ' ', '❤', '️', ' ', 'c', 'o', 'd', 'e', '!', ' ', '💻']
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const result = emojiSplit('');
        const expectedResult = [];
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    addToReadme(
        generateTestBadge(
            name_of_function,
            number_of_tests_passed,
            number_of_tests_failed
        )
    );
}

module.exports = {
    testEmojiSplit
};