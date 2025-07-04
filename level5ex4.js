function orderWeight(str) {

    const numbers = str.trim().split(/\s+/);

    function weightOf(numStr) {
        return numStr.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    numbers.sort((a, b) => {
        const weightA = weightOf(a);
        const weightB = weightOf(b);

        if (weightA === weightB) {
            return a.localeCompare(b);
        }
        return weightA - weightB;
    });
    return numbers.join(' ');
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));
console.log(orderWeight("   103  123   4444 99 2000   "));
console.log(orderWeight(""));
