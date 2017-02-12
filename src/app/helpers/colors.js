const colors = ['', 'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green',
  'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
  'silver', 'teal', 'white', 'yellow'];

let iteration = 0;

export default function getNewColor() {
  iteration = iteration === colors.length ?  1 : iteration += 1;
  return colors[iteration];
}
