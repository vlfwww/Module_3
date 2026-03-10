function isAgeDiverse(list) {
  let ageGroup = {
    10: 0,
    20: 0,
    30: 0,
    40: 0,
    50: 0,
    60: 0,
    70: 0,
    80: 0,
    90: 0,
    100: 0,
  };

  for (const developer of list) {
    let group;
    if (developer.age < 10) continue;
    else if (developer.age < 100) {
      group = Math.floor(developer.age / 10) * 10;
    } else {
      group = 100;
    }
    ageGroup[group]++;
  }

  return Object.values(ageGroup).every(count => count > 0);
}
