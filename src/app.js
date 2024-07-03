/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Aqui empieza mi codigo
//creo mis variables

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const domain = [".com", ".net", ".us", ".io"];

// //creo mi bucles for y concatenación de strings en el console.log.

let dominioCompleto = [];

for (let index = 0; index < pronoun.length; index++) {
  console.log("El primer array" + " " + pronoun[index]);

  for (let indexAdj = 0; indexAdj < adj.length; indexAdj++) {
    console.log("el segundo array" + " " + adj[indexAdj]);

    for (let indexNoun = 0; indexNoun < noun.length; indexNoun++) {
      console.log(" el tercer array" + " " + noun[indexNoun]);

      for (let indexDomain = 0; indexDomain < domain.length; indexDomain++) {
        console.log(" el cuarto array" + " " + domain[indexDomain]);

        dominioCompleto.push(
          `${pronoun[index]}${adj[indexAdj]}${noun[indexNoun]}${domain[indexDomain]}`
        );
      }
    }
  }
}

console.log(dominioCompleto);
