function countGrade(scores) {
  const gradeCounts = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  gradeCounts.S = scores.filter((score) => score === 100).length;
  gradeCounts.A = scores.filter((score) => score >= 90 && score < 100).length;
  gradeCounts.B = scores.filter((score) => score >= 80 && score < 90).length;
  gradeCounts.C = scores.filter((score) => score >= 60 && score < 80).length;
  gradeCounts.D = scores.filter((score) => score >= 0 && score < 60).length;
  gradeCounts.X = scores.filter((score) => score === -1).length;
  return gradeCounts;
}
