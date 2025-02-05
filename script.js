'use strict';

const currentDate = document.querySelector('.date');
const currentTime = document.querySelector('.time');

const now = new Date();

const year = now.getFullYear();
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const day = `${now.getDate()}`.padStart(2, 0);
const hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const ampm = hour >= 12 ? 'AM' : 'PM';

// hour = hour % 12 || 12

currentDate.textContent = `Date: ${day}/${month}/${year}`;
currentTime.textContent = `Time: ${hour}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
