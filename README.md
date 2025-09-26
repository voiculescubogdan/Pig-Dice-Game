# Pig Dice Game

### A lightweight two-player dice game built with vanilla JavaScript, HTML and CSS.

---

## 🚀 Project Description

Pig Dice Game is a small interactive frontend game where two players take turns rolling a single die. Rolls of 2–6 add to the current turn score; rolling a 1 ends the turn and switches players. The first player whose current score reaches 100 wins the round. The project focuses on DOM manipulation, game logic and basic UI state.

## ✨ Core Functionalities

### 1. Game Mechanics
* Randomly generates a dice value between 1 and 6 on each roll.
* Rolling a 1 ends the current player's turn and switches to the other player.

### 2. Scoring
* Current turn score accumulates while a player keeps rolling values 2–6.
* When a player reaches 100+ in the current score they are declared the winner.
* Round win counter increments for the winning player (session-only).

### 3. Input Validation & Feedback
* Dice faces shown via images (`dice-1.png` … `dice-6.png`).
* UI reflects active player and winner states.
* Controls are disabled after a win to prevent further interaction.

### 4. UI Controls
* "Roll dice" button to roll the die.
* "Hold" behavior implemented via press-and-hold to switch players repeatedly while held.
* "New game" button to reset the round and UI.

### 5. Simple UX Enhancements
* Hides the dice image when appropriate (start/end of round).
* Visual winner highlight on the winning player element.
* Buttons are enabled/disabled according to game state.

---

## ⚙️ Technologies Used

### Frontend
* **HTML5** — Markup and structure (`index.html`)
* **CSS3** — Styling (`style.css`)
* **JavaScript (vanilla)** — Game logic and DOM manipulation (`script.js`)

### Backend
* None — static frontend project

### Database
* None

---

## 🚀 How to Run Locally

1. **Clone the repository:**
    ```bash
    git clone https://github.com/voiculescubogdan/Pig-Dice-Game.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd Pig-Dice-Game
    ```
3. **Option 1 — Open directly:**  
   Double-click `index.html` to open in your browser.

4. **Option 2 — Use a local dev server (recommended):**  
   VS Code Live Server: Right-click `index.html` → "Open with Live Server".

---
