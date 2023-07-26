import dataset from "./Wine-Data.json";

// Utility function to calculate the mean of an array of numbers
const calculateMean = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

// Utility function to calculate the median of an array of numbers
const calculateMedian = (numbers) => {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  } else {
    return sortedNumbers[middleIndex];
  }
};

// Utility function to calculate the mode of an array of numbers
const calculateMode = (numbers) => {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mode;

  numbers.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mode = num;
    }
  });

  return mode;
};

// Calculate class-wise mean, median, and mode for Flavanoids and Gamma
const calculateClassWiseStats = (dataset) => {
  const alcoholStats = {};
  const gamma = {};

  dataset.forEach((data) => {
    let { Alcohol, Flavanoids, Ash, Hue, Magnesium } = data;

    if (!alcoholStats[Alcohol]) {
      alcoholStats[Alcohol] = [];
      gamma[Alcohol] = [];
    }
    if (typeof Flavanoids === "string") {
      Flavanoids = Number(Flavanoids);
    }
    alcoholStats[Alcohol].push(Flavanoids);
    if (Magnesium != 0) {
      gamma[Alcohol].push((Ash * Hue) / Magnesium);
    }
  });

  for (const alcoholClass in alcoholStats) {
    const flavanoidsValues = alcoholStats[alcoholClass];
    const gammaValues = gamma[alcoholClass];
    console.log(" flavanoidsValues ", flavanoidsValues, alcoholClass);
    const mean = calculateMean(flavanoidsValues);
    const median = calculateMedian(flavanoidsValues);
    const mode = calculateMode(flavanoidsValues);
    const meanGamma = calculateMean(gammaValues);
    const medianGamma = calculateMedian(gammaValues);
    const modeGamma = calculateMode(gammaValues);

    alcoholStats[alcoholClass] = {
      mean: mean.toFixed(3),
      median: median.toFixed(3),
      mode: mode.toFixed(3),
    };
    gamma[alcoholClass] = {
      mean: meanGamma.toFixed(3),
      median: medianGamma.toFixed(3),
      mode: modeGamma.toFixed(3),
    };
  }

  return { alcoholStats, gamma };
};

export const { alcoholStats, gamma } = calculateClassWiseStats(dataset);
