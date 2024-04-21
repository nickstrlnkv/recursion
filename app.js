const fibs = (n) => {
    if (n < 0)
        return 'Incorrect input';
    else if (n == 0)
        return [0];
    else if (n == 1)
        return [0, 1];
    else {
        const fibonacciArray = [0, 1];
        for (let i = 2; i < n; i++) {
            fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        }
        return fibonacciArray;
    }
}

console.log(fibs(9));

const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;
    // сравниваем два массива, поочередно сдвигая указатели
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    // обрабатываем последний элемент при разной длине массивов
    // и возвращаем один отсортированный массив
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};

const mergeSort = arr => {
    // Проверяем корректность переданных данных
    if (!arr || !arr.length) {
        return null;
    }
    //Если массив содержит один элемент просто возвращаем его
    if (arr.length <= 1) {
        return arr;
    }
    // Находим середину массива и делим его на два
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    // Для новых массивов снова вызываем сортировку,
    // сливаем их и возвращаем снова единый массив
    return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};

console.log(mergeSort([3,2,1,13,8,5,0,1]));