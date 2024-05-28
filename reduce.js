  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExpierence = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExpierence);

// Grouping by a property, and totaling it too
let expierenceByProfesson = teamMembers.reduce((acc, curr) => {
  let key =  curr.profession;
  if(!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});
console.log(expierenceByProfesson);

// let students = [
//   {
//       name: 'John',
//       subjects: ['maths', 'english', 'cad'],
//       teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
//       results: {maths: 90, english: 75, cad: 87},
//   },
//   {
//       name: 'Emily',
//       subjects: ['science', 'english', 'art'],
//       teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
//       results: {science: 93, english: 73, art: 95},
//   },
//   {
//       name: 'Adam',
//       subjects: ['science', 'maths', 'art'],
//       teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
//       results: {science: 93, english: 88, maths: 97, art: 95},
//   },
//   {
//       name: 'Fran',
//       subjects: ['science', 'english', 'art'],
//       teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
//       results: {science: 93, english: 87, art: 95},
//   }
// ];
// const biggest = students.reduce((acc, student) => {
//   if (!acc.name) {
//       acc.name = "";
//       acc.max = 0;
//   }
//   const englishScore = student.results.english !== undefined ? student.results.english : -1;
//   if (englishScore > acc.max) {
//       acc.name = student.name;
//       acc.max = englishScore;
//   }
//   return acc;
// }, {});

// console.log(`name: ${biggest.name}, max: ${biggest.max}`);