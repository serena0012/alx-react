/* function named getFullYear that will return the current year*/

export function getFullYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

/*a function named getFooterCopy*/
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}