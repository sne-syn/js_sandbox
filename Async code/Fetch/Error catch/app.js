function simulate(withError = false) {
    return new Promise((resolve, reject) => {
      if (withError) reject(new Error('💩 Rejected with an error 💩'));
      else resolve('🚀 All good here 🚀');
    });
  }
//   Then run one of these at a time.. https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/16864188#questions/9425333
  
  // no errors
  simulate()
    .then(response => console.log(`We got no error🙋🏻, ${response}`))
    .catch(error => console.log(`We caught an error😿, ${error}`));
   
  // with an error
  simulate(true)
    .then(response => console.log(`We got no error🙋🏻, ${response}`))
    .catch(error => console.log(`We caught an error😿, ${error}`));
   
  // we can throw an error any time and the next 'catch' will catch it
  simulate()
    .then(response => console.log(`We got no error🙋🏻, ${response}`))
    .then(() => {
      throw new Error('💩💩😵😵');
    })
    .catch(error => console.log(`We caught an error😿, ${error}`));
   
  // as soon as an error is thrown, it skips to the next catch
  simulate()
    .then(response => console.log(`We got no error🙋🏻, ${response}`))
    .then(() => {
      throw new Error('💩💩😵😵');
    })
    .then(() => console.log('this is skipped over, because error above'))
    .catch(error => console.log(`We caught an error😿, ${error}`));
   
  // we can use finally to run some code whatever the result
  simulate()
    .then(response => console.log(`We got no error🙋🏻, ${response}`))
    .then(() => {
      throw new Error('💩💩😵😵');
    })
    .then(() => console.log('this is skipped over, because error above'))
    .catch(error => console.log(`We caught an error😿, ${error}`))
    .finally(() => console.log('Finally will always run whatever the outcome'));