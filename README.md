
_This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



# hero-emoji-utils

A package for working with emojis in strings, allowing users to manipulate strings containing any type of emojis.

## Functions

### emojiSplit

Splits a string into an array of characters and emojis. Will handle standard single-codepoint emojis, combined emojis (e.g. country flags), and skin-tone-modified emojis. It does not handle invalid emoji sequences or emojis with multiple skin tones.

**Example usage:**

```javascript
emojiSplit('Hello 😃🌎🎉'); // -> ['H', 'e', 'l', 'l', 'o', ' ', '😃', '🌎', '🎉']
```

### emojiCount

Counts the number of emojis in a string. Will handle standard single-codepoint emojis, combined emojis (e.g. country flags), and skin-tone-modified emojis. It does not handle invalid emoji sequences or emojis with multiple skin tones.

**Example usage:**

```javascript
emojiCount('Hello 😃🌎🎉'); // -> 3
```

---

[Sam Chahine](https://github.com/kingmeers) at [Hero](https://hero.page)
                

### Tests for emojiCount

![emojiCount](https://img.shields.io/badge/emojiCount()-2%20passed%2C%203%20failed.-ff69b4)

### Tests for emojiSplit

![emojiSplit](https://img.shields.io/badge/emojiSplit()-0%20passed%2C%203%20failed.-ff69b4)