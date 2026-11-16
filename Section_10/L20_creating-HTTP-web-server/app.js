'use strict';

// 1. Global State & Configuration
const config = {
  appName: 'My Project',
  debug: true,
};

// 2. DOM Elements
const elements = {
  // Example: button: document.querySelector('#submit-btn'),
};

// 3. Helper Functions
function log(message) {
  if (config.debug) {
    console.log(`[${config.appName}]:`, message);
  }
}

// 4. Event Listeners
function setupEventListeners() {
  // Example: elements.button?.addEventListener('click', handleButtonClick);
}

// 5. Initialization
function init() {
  log('App initialized');
  setupEventListeners();
}

// Run once the DOM is fully parsed
document.addEventListener('DOMContentLoaded', init);

const heading = document.getElementById('h1')