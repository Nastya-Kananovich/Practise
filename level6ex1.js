// Find the most frequently occurring elements in arrays
function FrequentTemperature(forecast) {
    return forecast.map(day => {
        const frequencyMap = new Map();

        day.forEach((temp, index) => {
            const [count, lastIdx] = frequencyMap.get(temp) || [0, -1]; 
            frequencyMap.set(temp, [count + 1, index]);
        });

        let maxCount = -1;
        let maxTemp = null;
        let lastIndex = -1;

        for (const [temp, [count, index]] of frequencyMap.entries()) {
            if (count > maxCount || (count === maxCount && index > lastIndex)) {
                maxCount = count;
                maxTemp = temp;
                lastIndex = index;
            }
        }
        return maxTemp;
    });
}

const forecast = [
  [15, 17, 19, 21, 21, 21, 20, 16],
  [16, 17, 22, 22, 22, 20, 20, 16],
  [12, 17, 19, 20, 20, 20, 20, 18],
  [14, 15, 19, 19, 20, 22, 18, 17],
  [15, 17, 24, 24, 24, 20, 20, 20]
];
console.log(FrequentTemperature(forecast));
