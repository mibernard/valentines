document.getElementById('yesBtn').style.display = 'none';
document.getElementById('noBtn').style.display = 'none';
const messages = [
  'Hi Natalie :)',
  'this is your pookie bear',
  'i just wanted to let you know',
  'You mean the world to me.',
  '(more than valo)',
  'together, every moment is special <3',
  'so, what do you say?',
  'Will you be my Valentine?',
];
const btnMessages = ['hello', 'hi pookie', 'mhmm', 'ok and..', 'f you', 'thats crazy', 'to what...?', '...'];

let currentIndex = 0; // Start with the first message
document.addEventListener('DOMContentLoaded', (event) => {
  // Initialize the modal with the first message from the array
  document.getElementById('messageText').textContent = messages[0];
  document.getElementById('nextBtn').textContent = btnMessages[0];
});

document.getElementById('nextBtn').addEventListener('click', function () {
  currentIndex++; // Move to the next message
  if (currentIndex == 1) {
    const audio = document.getElementById('backgroundMusic');
    audio.volume = 0.2; // Set volume to 20% to not be too intrusive
    audio.play();
  }
  if (currentIndex >= messages.length) {
    document.getElementById('nextBtn').style.display = 'none'; // Hide the Next button
    document.getElementById('yesBtn').style.display = 'block';
    document.getElementById('noBtn').style.display = 'block';
  } else {
    document.getElementById('messageText').textContent = messages[currentIndex];
    document.getElementById('nextBtn').textContent = btnMessages[currentIndex];
  }
});

document.addEventListener('DOMContentLoaded', (event) => {});

// Function to teleport the button
function teleportButton(button) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const maxX = viewportWidth - button.offsetWidth;
  const maxY = viewportHeight - button.offsetHeight;

  button.style.position = 'fixed'; // Use 'fixed' to ensure it's relative to the viewport
  button.style.top = Math.random() * maxY + 'px';
  button.style.left = Math.random() * maxX + 'px';
}

// Getting the "No" button
const noButton = document.getElementById('noBtn');

// Adding mouseenter event for desktop
//   noButton.addEventListener('mousedown', function () {
//     teleportButton(this);
//   });

// Adding touchstart event for mobile
// The 'touchstart' event is used to trigger the function on touching the element
noButton.addEventListener(
  'touchstart',
  function (event) {
    event.preventDefault(); // Prevent the default touch action (like scrolling or zooming)
    teleportButton(this);
  },
  false
);

document.addEventListener('mousemove', (event) => {
  const btn = document.getElementById('noBtn');
  const btnRect = btn.getBoundingClientRect();
  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;
  const distanceThreshold = 100; // Distance in pixels when the button starts moving

  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const distanceX = btnCenterX - mouseX;
  const distanceY = btnCenterY - mouseY;
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  if (distance < distanceThreshold) {
    // Calculate a movement factor based on the distance and threshold
    const moveFactor = 2 - distance / distanceThreshold;
    // Define how far the button should move
    const moveDistance = 200; // Max distance in pixels the button will move

    // Calculate the new position
    let moveX = moveDistance * moveFactor * (distanceX / Math.abs(distanceX));
    let moveY = moveDistance * moveFactor * (distanceY / Math.abs(distanceY));

    // Prevent the button from moving too far
    moveX = isNaN(moveX) ? 0 : moveX;
    moveY = isNaN(moveY) ? 0 : moveY;

    btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  } else {
    // Reset button position if the mouse is far away
    btn.style.transform = 'translate(0, 0)';
  }
});

const pleaText = document.getElementById('pleaText');
const msgText = document.getElementById('messageText');
let isFirstPress = true; // Flag to track if the button has been pressed

function appendPlease() {
  if (isFirstPress) {
    pleaText.style.display = 'block'; // Make the pleaText visible
    msgText.style.display = 'none';
    isFirstPress = false; // Update flag so this only happens once
  }
  pleaText.textContent += ' please'; // Append " Please" to the current text
}

// Listen for mousedown (desktop) and touchstart (mobile) events
noButton.addEventListener('mousedown', appendPlease);
noButton.addEventListener('touchstart', function (event) {
  event.preventDefault(); // Prevent the default touch action
  appendPlease();
  // const currentFontSize = parseFloat(window.getComputedStyle(this, null).getPropertyValue('font-size'));
  // const currentPadding = parseFloat(window.getComputedStyle(this, null).getPropertyValue('padding'));

  // // Decrease font size and padding by 10%, or to a minimum value to prevent it from becoming too small
  // this.style.fontSize = (currentFontSize * 0.9 > 10 ? currentFontSize * 0.9 : 10) + 'px';
  // this.style.padding = (currentPadding * 0.9 > 5 ? currentPadding * 0.9 : 5) + 'px';
});

function yesButtonFunc() {
  document.body.style.backgroundImage = "url('assets/fireworks2.gif')";
  document.getElementById('yesBtn').style.display = 'none';
  document.getElementById('noBtn').style.display = 'none';
  pleaText.style.display = 'none';
  msgText.style.display = 'block';
  msgText.textContent = 'youre mine now hahahahhahhaha';
  msgText.innerHTML += '<br><br>happy valentines love you bb :) <3<3<3<3';

  const newImage = document.createElement('img');
  newImage.src = 'assets/us.jpg'; // Your image path
  newImage.alt = 'A special image'; // Alt text for accessibility
  newImage.className = 'dynamic-img'; // Apply CSS class for styling
  // Select the dialog menu div
  const dialogMenu = document.getElementById('dialog-menu');

  // Insert the new image as the first child of the dialog menu
  dialogMenu.insertBefore(newImage, dialogMenu.firstChild);
}

document.getElementById('yesBtn').addEventListener('click', yesButtonFunc);
document.getElementById('yesBtn').addEventListener('touchstart', yesButtonFunc);
