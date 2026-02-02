const noBtn = document.getElementById("no");
const box = document.getElementById("box");

// NO button runs away
if (noBtn && box) {
  noBtn.addEventListener("mouseover", () => {
    const maxX = box.clientWidth - noBtn.clientWidth;
    const maxY = box.clientHeight - noBtn.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

// Floating hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 25 + 18 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 200);
}

// Typing animation
function startTyping() {
  const text = "You will always be my Valentine ❤️";
  const element = document.getElementById("typingText");
  let index = 0;

  const typingInterval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      element.style.borderRight = "none";
    }
  }, 90); // typing speed
}
function playLove() {
  // Show message
  const msg = document.getElementById("loveMessage");
  msg.innerHTML = "I Love You So Much, Bubba (My Valentine) ❤️";

  // Play music
  const audio = document.getElementById("loveAudio");
  audio.play();
}

// Toggle pig popup note
function togglePigNote(event) {
  const popup = document.getElementById("pigPopup");
  if (popup.style.display === "block") {
    popup.style.display = "none"; // hide if already visible
  } else {
    popup.style.display = "block"; // show
    // Position popup next to pig
    const pigRect = event.target.getBoundingClientRect();
    const boxRect = document.querySelector(".box").getBoundingClientRect();

    // Calculate relative position inside box
    popup.style.top = pigRect.top - boxRect.top - popup.offsetHeight/2 + "px";
    popup.style.left = pigRect.right - boxRect.left + 10 + "px"; // 10px right of pig
  }
}

