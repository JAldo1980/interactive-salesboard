// declare variables
const starProduct = document.getElementById("star");
const flameProduct = document.getElementById("flame");
const salesOutput = document.getElementById("sales-output");
const salesCounter = document.getElementById("sales-counter");
const achievementsCounter = document.getElementById("achievements-counter");
const achievementOutput = document.getElementById("achievement-output");
const totalRevOutput = document.getElementById("total-rev-output");
const totalComOutput = document.getElementById("total-com-output");
const darkModeBtn = document.getElementById("dark-mode-btn");
const resetBtn = document.getElementById("reset");
const wrapper = document.querySelector(".wrapper");

let totalRevenue = 0;
let totalCommision = 0;
let totalSales = 0;
let totalAchievements = 0;

// Product A object
let productA = {
  emoji: "⭐",
  revenue: 200,
  commision: 50,
};

// Product B object
let productB = {
  emoji: "🔥",
  revenue: 300,
  commision: 75,
};

const achievementsArray = ["🔔", "💰", "🏆", "📈", "💸"];

// functions

// calculate revenue function
function addRevenue(val) {
  totalRevenue += val;
  return totalRevenue;
}

// calculate commision Function
function addCommision(val) {
  totalCommision += val;
  return totalCommision;
}

// COUNT total sales function
function increaseSalesCount() {
  totalSales++;
  salesCounter.textContent = "Live Sales - " + totalSales;

  if (totalSales >= 26) {
    salesCounter.textContent = "Live Sales - DAILY TARGET HIT! 🎯";
  }
}

// calculate achievements function
function determineAchievements() {
  if (totalRevenue >= 1) {
    achievementOutput.textContent = " " + achievementsArray[0];
    achievementsCounter.textContent = "Live Achievements - 1";
  }

  if (totalRevenue > 2499) {
    achievementOutput.textContent += " " + achievementsArray[1];
    achievementsCounter.textContent = "Live Achievements - 2";
  }

  if (totalSales >= 14) {
    achievementOutput.textContent += " " + achievementsArray[2];
    achievementsCounter.textContent = "Live Achievements - 3";
  }

  if (totalRevenue > 4999 && totalRevenue < 9998) {
    achievementOutput.textContent += " " + achievementsArray[3];
    achievementsCounter.textContent = "Live Achievements - 4";
  }

  if (totalSales >= 25) {
    achievementOutput.textContent += " " + achievementsArray[4];
    achievementsCounter.textContent = "Live Achievements - (5) COMPLETED!";
  }
}

// event listeners for product buttons
// ⭐️ Product A
starProduct.addEventListener("click", function () {
  salesOutput.textContent += productA.emoji;
  totalRevOutput.textContent = `$${addRevenue(productA.revenue)}`;
  totalComOutput.textContent = `$${addCommision(productA.commision)}`;

  determineAchievements();
  increaseSalesCount();
  disableBtn(star);
});

// 🔥 Product B
flameProduct.addEventListener("click", function () {
  salesOutput.textContent += productB.emoji;
  totalRevOutput.textContent = `$${addRevenue(productB.revenue)}`;
  totalComOutput.textContent = `$${addCommision(productB.commision)}`;
  determineAchievements();
  increaseSalesCount();
  disableBtn(flame);
});

// disable button function
function disableBtn(product) {
  if (totalSales >= 26) product.disabled = true;
  else product.disabled = false;
}

// STRECH GOALS: 1. Dark Mode. 2. Add more achievments - complete

// NOTE: I struggled on the local storage strech goal - I did not include that functionality (I will need to do more work in that area!)

// DARK MODE

darkModeBtn.addEventListener("click", function () {
  darkModeBtn.classList.toggle("active");
  wrapper.classList.toggle("page-active");
});

// RESET BUTTON

resetBtn.addEventListener("click", function () {
  totalRevenue = 0;
  totalRevOutput.textContent = "$";
  totalCommision = 0;
  totalComOutput.textContent = "$";
  totalSales = 0;
  salesCounter.textContent = "Live Sales - ";
  totalAchievements = 0;
  achievementsCounter.textContent = "Live Achievements - ";
  achievementOutput.textContent = " ";
  salesOutput.textContent = "";
  disableBtn(flame);
  disableBtn(star);
});

// Hey. I appreciate the time you've taken to review the code - this was certainly a challenge but I found it fun and learnt a ton too.
// Question - one problem I had was making the 'star emoji' wrap down to a lower line -  if you keep inputting the star emoji - it continues off page (I hope that made some sense?!) - weirdly, the 'flame emoji' didn't seem to have that problem - that seemed to wrapp through to a lower line just fine? Do you have any thoughts on this?

// Any thoughts you have on refactoring etc would be welcome too.

// Thanks so much again! James.
