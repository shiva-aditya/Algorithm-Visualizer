function delay(time){
    return new Promise((done) =>{
        setTimeout(() => {
            done();
        }, time);
    })
}
async function selection_sort() {
    let srtBtn = document.getElementById("srt_Btn");
    let genBtn = document.getElementById("gen_Btn");
    let clrBtn = document.getElementById("clr_Btn");
    srtBtn.disabled = true;
    genBtn.disabled = true;
    clrBtn.disabled = true;
    let message = document.getElementById("message");
    message.innerHTML = "";
    const fast = document.getElementById("speed");
    var time = Number(fast.value);
    const vec = document.getElementsByClassName("box");
    for (var i = 0 ; i < vec.length ; i++){
        vec[i].style.transition = `all ${time}ms`;
    }
    //logic starts
    for (var i = 0 ; i < vec.length ; i++){
        var ind = i;
        for (var j = i ; j < vec.length ; j++){
            if (Number(vec[ind].innerHTML) > Number(vec[j].innerHTML)){
                ind = j;
            }
        }
        await delay(time);
        if (Number(vec[ind].innerHTML) < Number(vec[i].innerHTML)){
            content = vec[ind].innerHTML;
            vec[ind].innerHTML = vec[i].innerHTML;
            vec[i].innerHTML = content;
            vec[ind].style.width = vec[ind].innerHTML + "vw";
            vec[i].style.width = content + "vw";
            content = vec[ind].style.backgroundColor;
            vec[ind].style.backgroundColor = vec[i].style.backgroundColor;
            vec[i].style.backgroundColor = content;
            await delay(time);
        }
    }
    message.innerHTML = "Sorted!";
    genBtn.disabled = false;
    clrBtn.disabled = false;
}