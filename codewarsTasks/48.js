function findSenior(list) {
  const maxAge = Math.max(...list.map((developer) => developer.age));
  return list.filter((developer) => developer.age === maxAge);
}