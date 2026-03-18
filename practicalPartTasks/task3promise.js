function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function basePrimes(end) {
  const primes = [];
  for (let i = 2; i <= Math.sqrt(end); i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

function processChunk(start, end, baseArray) {
  const segment = new Array(end - start + 1).fill(true);

  if (start === 0) segment[0] = false;
  if (start <= 1) segment[1 - start] = false;

  for (const p of baseArray) {
    let firstMultiple = Math.max(p * p, Math.ceil(start / p) * p);

    for (let i = firstMultiple; i <= end; i += p) {
      segment[i - start] = false;
    }
  }

  return segment.filter((el) => el === true).length;
}

async function findPrimes(start, end, chunkSize, concurrency = 4) {
  const startTime = performance.now();

  const primes = basePrimes(end);

  let totalPrimes = 0;
  let processedChunks = 0;

  const totalChunks = Math.ceil((end - start + 1) / chunkSize);
  const progressStep = Math.max(1, Math.floor(totalChunks / 10));

  let batch = [];

  for (let i = start; i <= end; i += chunkSize) {
    const chunkStart = i;
    const chunkEnd = Math.min(i + chunkSize - 1, end);

    batch.push(
      (async () => {
        const result = processChunk(chunkStart, chunkEnd, primes);

        processedChunks++;

        if (processedChunks % progressStep === 0) {
          const percent = Math.ceil((processedChunks / totalChunks) * 100);
          console.log(`Progress: ${percent}%`);
        }

        return result;
      })()
    );

    if (batch.length === concurrency) {
      const results = await Promise.all(batch);
      totalPrimes += results.reduce((a, b) => a + b, 0);
      batch = [];
    }
  }

  if (batch.length > 0) {
    const results = await Promise.all(batch);
    totalPrimes += results.reduce((a, b) => a + b, 0);
  }

  const endTime = performance.now();
  const timeElapsed = (endTime - startTime).toFixed(2);

  console.log(`Finished. Found ${totalPrimes} primes.`);
  console.log(`Execution time: ${timeElapsed} ms`);
}
findPrimes(0, 55555555, 1, 100000);