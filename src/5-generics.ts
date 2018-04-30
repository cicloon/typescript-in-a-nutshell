// function bubbleSort( someArray: number[] ): number[] {
//   const arrayToSort = [...someArray];
//   for (let i = 0; i < arrayToSort.length; i += 1) {
//     for (let j = arrayToSort.length - 1; j >= i; j -= 1) {
//         if (arrayToSort[j] < arrayToSort[i]) {
//             const temp = arrayToSort[i];
//             arrayToSort[i] = arrayToSort[j];
//             arrayToSort[j] = temp;
//         }
//     }
//   }
//   return arrayToSort;
// }

function bubbleSort2<T>( someArray: T[] ): T[] {
  const arrayToSort: T[] = [...someArray];
  for (let i = 0; i < arrayToSort.length; i += 1) {
    for (let j = arrayToSort.length - 1; j >= i; j -= 1) {
        if (arrayToSort[j] < arrayToSort[i]) {
            const temp = arrayToSort[i];
            arrayToSort[i] = arrayToSort[j];
            arrayToSort[j] = temp;
        }
    }
  }
  return arrayToSort;
}

export const sorting = () => {
  // console.log(bubbleSort([3, 2, 7, 1, 23, 49]));
  // console.log(bubbleSort( ['b', 'd', 'x', 'a'] ));
  console.log(bubbleSort2<string>( ['b', 'd', 'x', 'a'] ));
};
