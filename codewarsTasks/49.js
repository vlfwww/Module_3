function askForMissingDetails(list) {
  return list.filter(developer => {
    for (let key in developer) {
      if (developer[key] === null) {
        developer.question = `Hi, could you please provide your ${key}.`;
        return true;
      }
    }
    return false; 
  });
}