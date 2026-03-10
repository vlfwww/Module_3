function findAdmin(list, lang) {
  return list.filter(developer => developer.githubAdmin === "yes" && developer.language === lang);
}