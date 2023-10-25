let srtBtn = document.getElementById("srt_Btn");
let genBtn = document.getElementById("gen_Btn");
let clrBtn = document.getElementById("clr_Btn");
const pare = document.getElementById("par");
const rangeInput = document.getElementById("myrange");
const speed = document.getElementById("speed");
let message = document.getElementById("message");
let op = document.getElementById("algo");
let content = document.getElementById("matter");
op.addEventListener("change", function () {
    let heady = document.getElementById("heading");
    if (op.value == "None"){
        content.style.display = "none";
        heady.innerHTML = "";
        document.getElementById("one").innerHTML = "";
        document.getElementById("code").innerHTML = "";
    }
    else {
        content.style.display = "flex";
        if (op.value == "Bubble_Sort"){
            heady.innerHTML = "Bubble Sort";
            heady.style.textDecoration = "underline";
            document.getElementById("one").innerHTML =  `Bubble sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until no swaps are needed, indicating that the list is sorted. Bubble sort is easy to understand and implement, but it's not very efficient for large datasets. Its time complexity is O(n^2) in the worst case, where n is the number of elements in the list. Despite its inefficiency, bubble sort is sometimes used for educational purposes to illustrate sorting algorithms and concepts.`;
            document.getElementById("code").innerHTML =
            `Sudo Code:
function bubbleSort(arr):
    n = length(arr)
    for i from 0 to n-1:
        swapped = False
        for j from 0 to n-1-i:
            if arr[j] > arr[j+1]:
                swap(arr[j], arr[j+1])
                swapped = True
        if not swapped:
            break
        `;
        }
        else if (op.value == "Insertion_Sort"){
            heady.innerHTML = "Insertion Sort";
            heady.style.textDecoration = "underline";
            document.getElementById("one").innerHTML = `Insertion sort is another simple sorting algorithm that builds the final sorted array one item at a time. It works by taking one element at a time from the unsorted part of the array and placing it in its correct position within the sorted portion. This process continues until all elements are sorted. Insertion sort is particularly efficient for small datasets or nearly sorted lists. Its time complexity is O(n^2) in the worst case, but it can be more efficient than bubble sort due to its adaptive nature. Insertion sort is easy to implement and is often used for sorting small arrays.`;
            document.getElementById("code").innerHTML =
            `Sudo Code:
function InsertionSort(arr):
    n = length(arr)
    for i from 1 to n - 1:
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = key
        `;
        }
        else if (op.value == "Selection_Sort"){
            heady.innerHTML = "Selection Sort";
            heady.style.textDecoration = "underline";
            document.getElementById("one").innerHTML = `Selection Sort is a simple comparison-based sorting algorithm that divides an array into two parts - sorted and unsorted. It repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the leftmost element of the unsorted part. This process continues until the entire array is sorted. Selection Sort has a time complexity of O(n^2), making it inefficient for large datasets. However, it's simple to implement and requires minimal memory, which can be advantageous for small datasets or as a building block in more complex algorithms.`;
            document.getElementById("code").innerHTML = 
`Sudo Code:
function selectionSort(arr):
n = length of arr
for i from 0 to n-1:
    minIndex = i
    for j from i+1 to n:
        if arr[j] < arr[minIndex]:
            minIndex = j
    swap arr[i] and arr[minIndex]
    `;
        }
    }
});
window.addEventListener("load", function () {
    rangeInput.value = 5;
    speed.value = 1000; 
    content.style.display = "none";
    op.value = "None";
});
rangeInput.addEventListener("input", function () {
    const rangeValue = rangeInput.value;
    document.getElementById("dis").innerHTML = "Slider Value is: " + rangeValue;
});
let time = Number(speed.value);
speed.addEventListener("input", function () {
    const rangeValue = Number(speed.value);
    document.getElementById("sp").innerHTML = "Animation Speed is: " + (rangeValue / 1000).toFixed(1) + 's';
    time = rangeValue;
});
// Generate Function 
function gene() {
    srtBtn.disabled = false;
    clrBtn.disabled = false;
    message.innerHTML = "";
    let colo = ["#b91c1c", "#d97706", "#15803d", "#38bdf8", "#4c1d95", "#fb7185", "#a3e635", "#52525b"], ind = 0;
    pare.style.display = "block";
    const num = rangeInput.value;
    pare.innerHTML = "";
    for (var i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        let x = Math.floor(Math.random() * (100 - 2 + 1)) + 2;
        div.innerHTML = x;
        div.style.width = x + "vw";
        x = Math.floor(Math.random() * 7);
        div.style.backgroundColor = colo[x];
        pare.appendChild(div);
    }
}

// bubble sort Function
function delay(time) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, time);
    });
}
async function bubble_sort() {
    let arr = document.querySelectorAll('.box');
    srtBtn.disabled = true;
    genBtn.disabled = true;
    clrBtn.disabled = true;
    message.innerHTML = "";
    let flag = 1, count;
    while (flag) {
        count = 0;
        for (var i = 0; i < arr.length - 1; i++) {
            let one_ele = arr[i];
            let two_ele = arr[i + 1];
            // changes the div colour animation
            one_ele.style.fontSize = "150%";
            one_ele.style.fontWeight = "bold";
            one_ele.style.color = "blue";
            two_ele.style.fontSize = "150%";
            two_ele.style.color = "blue";
            two_ele.style.fontWeight = "bold";
            await delay(Number(time));
            if (Number(one_ele.innerHTML) <= Number(two_ele.innerHTML)) {
                one_ele.style.color = "green";
                two_ele.style.color = "green";
            }
            else {
                count++;
                one_ele.style.color = "red";
                two_ele.style.color = "red";
                await bubble_sort_anime(i, arr);
            }
            await delay(Number(time));
            one_ele.style.fontSize = "100%";
            one_ele.style.fontWeight = "800";
            one_ele.style.color = "black";
            two_ele.style.fontSize = "100%";
            two_ele.style.fontWeight = "800";
            two_ele.style.color = "black";
        }
        if (!count) flag = 0;
    }
    if (!count) message.innerHTML = "Sorted!";
    genBtn.disabled = false;
    clrBtn.disabled = false;
}

// Anime Function
async function bubble_sort_anime(ind, arr) {
    let one_ele = arr[ind];
    let two_ele = arr[ind + 1];
    var rgb_one = window.getComputedStyle(one_ele).backgroundColor;
    rgb_one = rgb_one.match(/\d+/g);
    var rgb_two = window.getComputedStyle(two_ele).backgroundColor;
    rgb_two = rgb_two.match(/\d+/g);
    const content = one_ele.innerHTML;
    // animation 1: disappear
    function one() {
        one_ele.style.border = "0px";
        one_ele.style.backgroundColor = "rgb(204, 251, 241)";
        one_ele.innerHTML = "";
        two();
    }

    // animation 2: move up
    function two() {
        let id = null, cnt = 0, del = (0.5 / 100) * time;
        console.log(del);
        clearInterval(id);
        id = setInterval(frame, del);
        function frame() {
            if (cnt == 5) {
                clearInterval(id);
                one_ele.style.backgroundColor = `rgb(${rgb_two[0]}, ${rgb_two[1]}, ${rgb_two[2]})`;
                one_ele.style.border = "1px solid black";
                one_ele.style.width = two_ele.innerHTML + "vw";
                one_ele.innerHTML = two_ele.innerHTML;
                two_ele.style.border = "0px";
                two_ele.style.backgroundColor = "rgb(204, 251, 241)";
                two_ele.style.height = "5%";
                two_ele.innerHTML = content;
                two_ele.style.width = content + "vw";
                two_ele.style.bottom = 0 + "vh";
                three();
            }
            else {
                two_ele.style.bottom = cnt + "vh";
                cnt += 0.5;
            }
        }
    }
    // animation 3: reappear
    function three() {
        let id = null, a = 255, b = 255, c = 255, del = (1.5 / 100) * time;
        clearInterval(id);
        id = setInterval(frame, del);
        function frame() {
            if (a <= rgb_one[0] && b <= rgb_one[1] && c <= rgb_one[2]) {
                clearInterval(id);
                two_ele.innerHTML = content;
                two_ele.style.border = "1px solid black";
            }
            else {
                if (a > rgb_one[0]) a -= 5;
                if (b > rgb_one[1]) b -= 5;
                if (c > rgb_one[2]) c -= 5;
            }
            var newColor = `rgb(${a}, ${b}, ${c})`;
            two_ele.style.backgroundColor = newColor;
        }
    }
    return new Promise((done) => {
        one();
        setTimeout(() => {
            done();
        }, time);
    });
}


// Clear Function
function clean() {
    srtBtn.disabled = true;
    clrBtn.disabled = true;
    message.innerHTML = "";
    document.getElementById("par").innerHTML = "";
}