const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const generatePage = () => 'Name: Jane, Github: janehub';
    console.log(generatePage());

// Code from Module 9.1
// const printProfileData = profileDataArr => {
//     //This...
//     for (let i=0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('============');

//     //is the same as this...
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });
// };

// printProfileData(profileDataArgs);