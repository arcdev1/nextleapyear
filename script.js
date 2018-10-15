document.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById('content').style.display = 'block'
})

const thisYear = new Date().getFullYear()

document.getElementById('thisYear').innerText = thisYear
document.getElementById('nextLeapYear').innerText = nextLeapYear(thisYear)
document.getElementById(
  'isLeapYear'
).innerText = `${isLeapYear(thisYear) ? ' also a leap year!' : ' not a leap year.'} `
document.getElementById('yearToCheck').value = thisYear + 1

function checkYear () {
  const year = document.getElementById('yearToCheck').value || thisYear
  document.getElementById('isLeap').innerText = isLeapYear(year)
    ? ' Yes!'
    : ' No.'
}
/*
		 * Every year that is exactly divisible by four is a leap year,
		 * except for years that are exactly divisible by 100,
		 * but these centurial years are leap years
		 * if they are exactly divisible by 400.
         *
		 * For example, the years 1700, 1800, and 1900 were not leap years,
		 * but the years 1600 and 2000 were.
		**/
function nextLeapYear (currentYear = new Date().getFullYear()) {
  let nextLeap = currentYear + 4 - currentYear % 4
  if (nextLeap > 99 && nextLeap % 100 === 0 && nextLeap % 400 !== 0) {
    nextLeap += 4
  }
  return nextLeap
}

function isLeapYear (year = new Date().getFullYear()) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
