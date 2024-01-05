function adjustRatio(inputValue, ratio, inputPosition) {
  // Initialize an empty array to store the results
  let results = [];
  // Calculate the factor by dividing the input value by the corresponding ratio value
  let factor = inputValue / ratio[inputPosition];
  // Loop through the ratio and multiply each value by the factor
  for (let value of ratio) {
    // Push the result to the array
    results.push(value * factor);
  }
  // Return the array of results
  return results;
}
const answer = [];
// Test the function with some examples
// answer.push(adjustRatio(10, [1, 2, 4], 0)); // [2, 4, 8]
// console.log(adjustRatio(5, [1, 2, 4], 1)); // [5, 10, 20]
// console.log(adjustRatio(1, [1, 2, 4], 2)); // [4, 8, 16]

//display the first one
// answer.map((element) =>
//   console.log(
//     `The Elements are ${element[0]} , ${element[1]} and ${element[2]}`
//   )
// );

const btn = document.getElementsByClassName("btn");
const Refresh = document.getElementsByClassName("Refresh");
const cement = document.getElementsByClassName("cement");
const sand = document.getElementsByClassName("sand");
const gravel = document.getElementsByClassName("gravel");
const gravelspan = document.getElementsByClassName("gravelspan");
const gravelcoma = document.getElementsByClassName("gravelcoma");

btn[0].addEventListener("click", (event) => {
  event.preventDefault();
  // if entry is empty
  if (
    document.getElementsByClassName("cement_ratio")[0].value === "" ||
    document.getElementsByClassName("sand_ratio")[0].value === ""
  ) {
    document.getElementsByClassName("error")[0].innerHTML =
      "Please fill atleast two Ratios of Cement, Sand or Gravel";
  } else {
    document.getElementsByClassName("error")[0].style.display = "none";
    const cement_ratio = parseInt(
      document.getElementsByClassName("cement_ratio")[0].value
    );
    const ratio = parseInt(document.getElementsByClassName("ratios")[0].value);
    const sand_ratio = parseInt(
      document.getElementsByClassName("sand_ratio")[0].value
    );
    const gravel_ratio = parseInt(
      document.getElementsByClassName("gravel_ratio")[0].value
    );

    const select = document.getElementById("aggregate").value;
    const selectionIndex = {
      cementss: 0,
      sandss: 1,
      gravelss: 2,
    };
    if (!gravel_ratio) {
      gravel[0].style.display = "none";
      gravelspan[0].style.display = "none";
      gravelcoma[0].style.display = "none";
    } else {
      gravel[0].style.display = "inline";
      gravelspan[0].style.display = "inline";
      gravelcoma[0].style.display = "inline";
    }
    const selectedIndex = selectionIndex[select];
    if (selectedIndex !== undefined) {
      const adjustedRatios = adjustRatio(
        ratio,
        [cement_ratio, sand_ratio, gravel_ratio],
        selectedIndex
      );
      cement[0].innerHTML = Number.isInteger(adjustedRatios[0])
        ? adjustedRatios[0]
        : adjustedRatios[0].toFixed(2);
      sand[0].innerHTML = Number.isInteger(adjustedRatios[1])
        ? adjustedRatios[1]
        : adjustedRatios[1].toFixed(2);
      gravel[0].innerHTML = Number.isInteger(adjustedRatios[2])
        ? adjustedRatios[2]
        : adjustedRatios[2].toFixed(2);
    }
  }
  // adding referesh button
  Refresh[0].addEventListener("click", (event) => {
    event.preventDefault();
    cement[0].innerHTML = 0;
    sand[0].innerHTML = 0;
    gravel[0].innerHTML = 0;
  });

  // check if gravel_ratio is < 0
});
