export function toggleFizz(setFizzArray) {
  setFizzArray([]);
  for (var i = 1; i <= 100; i++) {
    if (i < 3) {
      setFizzArray((prevArray) => [...prevArray, `fizz`]);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);

      setFizzArray((prevArray) => [...prevArray, `FIZZ BUZZ`]);
    } else if (i % 3 === 0) {
      setFizzArray((prevArray) => [...prevArray, `fizz`]);
    } else if (i % 5 === 0) {
      setFizzArray((prevArray) => [...prevArray, `buzz`]);
    } else {
      setFizzArray((prevArray) => [...prevArray, `Nuthin'`]);
    }
  }
}
