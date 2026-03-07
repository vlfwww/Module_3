function findPrimes(start, end) {
  const startTime = performance.now();
  
  const limit = Math.floor(Math.sqrt(end));
  const isPrimeSmall = new Array(limit + 1).fill(true);
  isPrimeSmall[0] = isPrimeSmall[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (isPrimeSmall[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrimeSmall[j] = false;
      }
    }
  }

  const smallPrimes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrimeSmall[i]) smallPrimes.push(i);
  }

  let primesCount = 0;
  const total = end - start + 1;
  const chunkSize = 1000000;
  let currentStart = start;
  let progressThreshold = 10;

  function processChunk() {
    if (currentStart > end) {
      const endTime = performance.now();
      const timeElapsed = (endTime - startTime).toFixed(2);
      console.log(`Finished. Found ${primesCount} primes.`);
      console.log(`Execution time: ${timeElapsed} ms`);
      return;
    }

    const currentEnd = Math.min(currentStart + chunkSize - 1, end);
    const rangeLen = currentEnd - currentStart + 1;
    const isPrime = new Array(rangeLen).fill(true);

    for (let p of smallPrimes) {
      let firstMultiple = Math.max(p * p, Math.ceil(currentStart / p) * p);
      for (let j = firstMultiple; j <= currentEnd; j += p) {
        isPrime[j - currentStart] = false;
      }
    }

    for (let i = 0; i < rangeLen; i++) {
      if (currentStart + i >= 2 && isPrime[i]) {
        primesCount++;
      }
    }

    const percent = ((currentEnd - start + 1) / total) * 100;
    if (percent >= progressThreshold) {
      console.log(`Progress: ${progressThreshold}%`);
      progressThreshold += 10;
    }

    currentStart = currentEnd + 1;
    setTimeout(processChunk, 0);
  }

  processChunk();
}

findPrimes(1, 100000000);