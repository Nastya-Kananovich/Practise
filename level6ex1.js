//Find the most frequently occurring elements in arrays
//Input:
//A 5-day JSON weather forecast which consist of 5 arrays. Each of the 5 arrays includes 8 numbers which represent 3-hourly temperature forecast for a given day.
//Output:
//An array which includes the most frequent number (temperature) from each of the 5 arrays (days). In case there is a tie, return the value present later in a given array (day).
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