const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];

}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
   
  let xItem = randomValueFromArray(insertX);
 // console.log(xItem);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem)
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    console.log(name);
   newStory = newStory.replace('Bob',name);
//    console.log(newStory);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286)+' stone';
    console.log(weight);
    let temperature =  Math.round((94-32)*5/9)+' centigrade';
    console.log(temperature);
    newStory = newStory.replace('94 fahrenheit',temperature);
    console.log(newStory);
    newStory = newStory.replace('300 pounds',weight);

  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}
