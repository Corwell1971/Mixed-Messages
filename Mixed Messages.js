// Function to generate a random index
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  
  // Message parts
  const subjects = ['Elephant', 'Banana', 'Penguin', 'Rainbow', 'Wizard'];
  const actions = ['danced with', 'ate', 'flew to', 'juggled', 'tickled'];
  const objects = ['a pizza', 'a giraffe', 'the moon', 'a rainbow', 'a magic wand'];
  
  // Function to generate a random message
  function generateRandomMessage() {
    const randomSubject = subjects[getRandomIndex(subjects)];
    const randomAction = actions[getRandomIndex(actions)];
    const randomObject = objects[getRandomIndex(objects)];
  
    return `${randomSubject} ${randomAction} ${randomObject}.`;
  }
  
  // Display a random message when the program is run
  console.log(generateRandomMessage());