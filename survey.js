const readline = require('readline');
// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input name ', (answer) => {
  const name = answer;

  rl.question('What is you favorite playlist to listen to while coding? ', (answer)=>{
    const playList = answer;

    rl.question('What is you favorite breakfast food? ', (answer) => {
      const food = answer;

      rl.question('What is you favorite activity? ', (answer) => {
        const activity = answer;

        rl.question('What is something that your really good at? ', (answer) => {
          const skill = answer;
        
          console.log(`${name} listens to ${playList} while coding, devouring ${food} for breakfast, prefers ${activity} over any other acitvity, and is amazing at ${skill}.`)

          rl.close();
    
        })
      })
    })
  })
});
