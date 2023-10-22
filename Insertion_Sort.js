function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
async function insertion_sort() {
    let srtBtn = document.getElementById("srt_Btn");
    let genBtn = document.getElementById("gen_Btn");
    let clrBtn = document.getElementById("clr_Btn");
    srtBtn.disabled = true;
    genBtn.disabled = true;
    clrBtn.disabled = true;
    let message = document.getElementById("message");
    message.innerHTML = "";
    var arr = document.getElementsByClassName("box");
    const fast = document.getElementById("speed");
    var time = Number(fast.value);
    let j, key;
    for (var i = 1; i < arr.length; i++) {
        key = arr[i].innerHTML;
        j = i - 1;
        while (j >= 0) {
            arr[j].style.fontSize = "150%";
            arr[j].style.fontWeight = "bold";
            arr[j].style.color = "blue";
            arr[j + 1].style.fontSize = "150%";
            arr[j + 1].style.color = "blue";
            arr[j + 1].style.fontWeight = "bold";
            await delay(time);
            if (Number(arr[j].innerHTML) > Number(key)) {
                arr[j].style.color = "red";
                arr[j + 1].style.color = "red";
                await insertion_sort_anime(j, arr);
                await delay(time);
                arr[j].style.fontSize = "100%";
                arr[j].style.fontWeight = "800";
                arr[j].style.color = "black";
                arr[j + 1].style.fontSize = "100%";
                arr[j + 1].style.color = "black";
                arr[j + 1].style.fontWeight = "800";
                j--;
            } else {
                arr[j].style.color = "green";
                arr[j + 1].style.color = "green";
                await delay(time);
                arr[j].style.fontSize = "100%";
                arr[j].style.fontWeight = "800";
                arr[j].style.color = "black";
                arr[j + 1].style.fontSize = "100%";
                arr[j + 1].style.color = "black";
                arr[j + 1].style.fontWeight = "800";
                break;
            }
            await delay(time);
        }
    }
    message.innerHTML = "Sorted!";
    genBtn.disabled = false;
    clrBtn.disabled = false;
}
a// Anime Function
async function insertion_sort_anime(ind, arr) {
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