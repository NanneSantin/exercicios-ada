function validateString(string) {
    let letters = 0;

    for (const char of string) {
        if (isNaN(Number(char))) {
            letters++
        }
    }

    if (letters < 4) {
        return true
    }

    return false
}

module.exports = validateString;