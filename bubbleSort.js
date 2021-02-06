a = [-7,8,4,34,-9,56,-76,38,55,12,89,6];

function bubbleSort(listToSort){
    let temp = 0;
    let swap = true;
    while (swap){
        swap = false;
        for(i = 0; i < listToSort.length; i++){     
            if(listToSort[i] > listToSort[i+1]){
                temp = listToSort[i];
                listToSort[i] = listToSort[i+1];
                listToSort[i+1] = temp;
                swap = true;
            }
        }
    }
}

console.log(a);

bubbleSort(a);

console.log(a);
