function sayJoke(apiUrl, jokeId) {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {

      if (!data || !Array.isArray(data.jokes)) {
        throw new Error(`No jokes at url: ${apiUrl}`);
      }

      const jokes = data.jokes.filter((joke) => joke.id === jokeId);
      
      if (jokes.length === 0) {
        throw new Error(`No jokes found id: ${jokeId}`);
      }

      return {
        saySetup() {
          return jokes[0].setup;
        },
        sayPunchLine() {
          return jokes[0].punchLine;
        },
      };

    });
}
