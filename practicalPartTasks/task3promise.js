function findPrimes(start, end, chunkSize = 100000) {
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

  const chunks = [];
  for (let i = start; i <= end; i += chunkSize) {
    const chunkEnd = Math.min(i + chunkSize - 1, end);
    chunks.push([i, chunkEnd]);
  }

  let primesCount = 0;
  const total = end - start + 1;
  let processed = 0;
  let progressThreshold = 10;

  function processChunk([chunkStart, chunkEnd]) {
    return new Promise((resolve) => {
      const rangeLen = chunkEnd - chunkStart + 1;
      const isPrime = new Array(rangeLen).fill(true);

      for (let p of smallPrimes) {
        let firstMultiple = Math.max(p * p, Math.ceil(chunkStart / p) * p);
        for (let j = firstMultiple; j <= chunkEnd; j += p) {
          isPrime[j - chunkStart] = false;
        }
      }

      let localCount = 0;
      for (let i = 0; i < rangeLen; i++) {
        if (chunkStart + i >= 2 && isPrime[i]) localCount++;
      }

      resolve({ localCount, rangeLen }); 
    });
  }

  const promises = chunks.map(chunk => processChunk(chunk));

  Promise.all(promises).then(results => {
    for (let { localCount, rangeLen } of results) {
      primesCount += localCount;
      processed += rangeLen; 
      const percent = (processed / total) * 100;
      if (percent >= progressThreshold) {
        console.log(`Progress: ${progressThreshold}%`);
        progressThreshold += 10;
      }
    }

    const endTime = performance.now();
    console.log(`Finished. Found ${primesCount} primes.`);
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)} ms`);
  });
}

findPrimes(0, 100000000, 10000);