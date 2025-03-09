/* Project list

Every time a user runs a program, they should get a new, randomized output.
To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. 


Project Objectives:

Build a message generator program using JavaScript
Use Git version control
Use command line
Develop locally on your computer

*/


const arr1 = [
    "That was absolutely",
    "Dude, what an",
    "Check out this",
    "No way, what a ",
    "Whoa, such a",
    "Get ready for ths",
    "Holy cow, he's throwing down that",
    "Shaka brah, full send that"
  ];
  
  const arr2 = [
    "epic shred",
    "insane drop",
    "radical move",
    "killer grind",
    "mental flip",
    "savage boost",
    "wild carve"
  ];
  
  const arr3 = [
    "for the win!",
    "totally sick!",
    "off the chain!",
    "straight fire!",
    "to the max!",
    "unreal vibes!",
    "next level!"
  ];

  const indexSelect = arr => {
    let arrayLength = arr.length;
    let arrayRandom = Math.floor(Math.random() * arrayLength);    
    
    
    return arr[arrayRandom];
  }


  console.log(indexSelect(arr1) + " " + indexSelect(arr2) + " " + indexSelect(arr3));




