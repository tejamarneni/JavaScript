function bubbleSort(listToSort) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < listToSort.length - 1; i++) {
            if (listToSort[i] > listToSort[i + 1]) {
                // Swap elements
                [listToSort[i], listToSort[i + 1]] = [listToSort[i + 1], listToSort[i]];
                swapped = true;
            }
        }
    } while (swapped);
}

const myList = [-7, 8, 4, 34, -9, 56, -76, 38, 55, 12, 89, 6];
bubbleSort(myList);
console.log(myList);
