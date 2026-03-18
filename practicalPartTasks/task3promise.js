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

function divideIntoChunks(start, end, chunkSize) {
  const chunks = [];

  for (let i = start; i <= end; i += chunkSize) {
    const chunkEnd = Math.min(i + chunkSize - 1, end);
    chunks.push([i, chunkEnd]);
  }

  return chunks;
}

async function findPrimes(start, end, chunkSize) {
  const startTime = performance.now();
  const chunkArray = divideIntoChunks(start, end, chunkSize);
  const primes = basePrimes(end);
  let processedChunks = 0;
  const progressStep = Math.floor(chunkArray.length / 10);

  const promisesArray = chunkArray.map( async ([chunkStart, chunkEnd]) => {
    const count = processChunk(chunkStart, chunkEnd, primes);
    processedChunks++;
    if (processedChunks % progressStep === 0) {
      const percent = Math.ceil((processedChunks / chunkArray.length) * 100);
      console.log(`Progress: ${percent}%`);
    }
      return count;
    });

  Promise.all(promisesArray).then((results) => {
    const totalPrimes = results.reduce((acc, val) => acc + val, 0);
    const endTime = performance.now();
    const timeElapsed = (endTime - startTime).toFixed(2);
    console.log(`Finished. Found ${totalPrimes} primes.`);
    console.log(`Execution time: ${timeElapsed} ms`);
  });
}
findPrimes(0, 55555555, 100);
