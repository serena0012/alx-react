// task_1/js/dashboard_main.js
import $ from 'jquery';
import debounce from 'lodash/debounce';

const updateCounter = debounce(() => {
  const count = parseInt($('#count').text()) || 0;
  $('#count').text(`${count + 1} clicks on the button`);
}, 1000);

$(document).ready(() => {
  const root = $('#root');

  root.append('<p>Holberton Dashboard</p>');
  root.append('<p>Dashboard data for the students</p>');
  root.append('<button id="clickButton">Click here to get started</button>');
  root.append('<p id="count"></p>');
  root.append('<p>Copyright - Holberton School</p>');

  $('#clickButton').on('click', updateCounter);
});
