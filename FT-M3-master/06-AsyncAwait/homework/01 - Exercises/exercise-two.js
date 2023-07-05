"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB,
  problemCx: problemC,
  problemDx: problemD,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

async function problemA() {
  // callback version
  // exerciseUtils.readFile("poem-one/stanza-01.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });
  // exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });

  // async await version
  // Tu código acá:
  // try{
  //   await exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt").then(
  //     (stanza) => exerciseUtils.blue(stanza)
  //   ),
  //   await exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt").then(
  //     (stanza2) => exerciseUtils.blue(stanza2)
  //   )
  //   console.log("done")
  // } catch (err) {

  // }

  

  const promises = [exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt"), exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt")];
  // const stanzas = await Promise.all(promises);
  // for(const stanza of stanzas) exerciseUtils.blue(stanza)

  await Promise.all(promises).then((stanzas) => { stanzas.forEach((stanza) => exerciseUtils.blue(stanza)) } )
}

async function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //   });
  // });

  // async await version
  // Tu código acá:
  // try{
  //   filenames.map( async (filename) => {
  //     await exerciseUtils.promisifiedReadFile(filename).then(
  //       (stanza) => exerciseUtils.blue(stanza)
  //     )
  //   })
  //   console.log("done")
  // } catch (err) {

  // }

  const promises = filenames.map(file => { return exerciseUtils.promisifiedReadFile(file) });
  const stanzas = await Promise.all(promises);
  // for(const stanza of stanzas) exerciseUtils.blue(stanza)
  stanzas.forEach((stanza) => exerciseUtils.blue(stanza))
}

async function problemC() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //   });
  // });

  // async await version
  // Tu código acá:
  try{
    // filenames.map( async (filename) => {
    //   await exerciseUtils.promisifiedReadFile(filename).then(
    //     (stanza) => exerciseUtils.blue(stanza)
    //   )
    // })
    for(const file of filenames){
      const stanza = await exerciseUtils.promisifiedReadFile(file);
      exerciseUtils.blue(stanza);
    }
    console.log("done")
  } catch (err) {

  } 
}

async function problemD() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //     if (err) exerciseUtils.magenta(new Error(err));
  //   });
  // });

  // async await version
  // Tu código acá:
  try{
    // filenames.map( async (filename) => {
    //   await exerciseUtils.promisifiedReadFile(filename).then(
    //     (stanza) => exerciseUtils.blue(stanza),
    //   )
    // })
    for(const file of filenames){
      const stanza = await exerciseUtils.promisifiedReadFile(file);
      exerciseUtils.blue(stanza);
    }
  } catch (err) {
    exerciseUtils.magenta(err)
  } finally {
    console.log("done")
  }
}
