/* -------------------------------------------------------------------------- */
/*                             Human Readable Time                            */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/52685f7382004e774f0001f7
/* Write a function, which takes a non-negative integer (seconds) as input 
and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59) */

function humanReadable(seconds) {
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor((seconds / 60) % 60);
  seconds %= 60;
  return [hours, minutes, seconds].map((num) => num.toString().padStart(2, "0")).join(":");
}
