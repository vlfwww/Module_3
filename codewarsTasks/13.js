function findAllJavascriptFiles(folder, callback) {
  let results = [];
  let pending = 0;

  function traverse(currentFolder) {
    pending++; 
    
    currentFolder.size((size) => {
      if (size === 0) {
        checkDone(); 
        return;
      }

      let readCount = size; 
      for (let i = 0; i < size; i++) {
        currentFolder.read(i, (file) => {
          if (typeof file === 'string') {
            if (file.endsWith('.js')) {
              results.push(file);
            }
          } else {
            traverse(file);
          }
          
          readCount--;
          if (readCount === 0) {
            checkDone(); 
          }
        });
      }
    });
  }

  function checkDone() {
    pending--; 
    if (pending === 0) {
      callback(results);
    }
  }

  traverse(folder);
}