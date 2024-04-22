/*await the lucky draw results

Create a getResults function that uses async and await. 
Inside of the function, call the luckyDraw function for each 
of the players: Tina, Jorge, Julien

Log out the resolved value for each promise and handle any 
promise rejections.
*/
function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
  try {
    const result1 = await luckyDraw("Tina");
    console.log(result1);
    const result2 = await luckyDraw("Jorge");
    console.log(result2);
    const result3 = await luckyDraw("Julien");
    console.log(result3);
  } catch (error) {
    console.error(error);
  }
}

getResults();
