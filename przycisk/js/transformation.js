
let one = 0

button.addEventListener("click", function () {

    if (one % 2 == 0) {
        bg.style.animation = "color 1s forwards";
        f1.style.animation = "hideFT 2s cubic-bezier(.17,.67,.83,.67) forwards";
        f2.style.animation = "hideFM 2s cubic-bezier(.17,.67,.83,.67) forwards";
        f3.style.animation = "hideFW 2s cubic-bezier(.17,.67,.83,.67) forwards";
        o.style.animation = "moveO 1s forwards";
        f4.style.animation = "rotateT 1s forwards";
        f5.style.animation = "rotateM 1s forwards";
        f6.style.animation = "color 1s forwards";
    } else {
        bg.style.animation = "colorr 1s forwards";
        f1.style.animation = "showFT 2s cubic-bezier(.1,.1,.1,.1) forwards";
        f2.style.animation = "showFM 2s cubic-bezier(.17,.67,.55,1) forwards";
        f3.style.animation = "showFW 2s cubic-bezier(.17,.67,.83,2) forwards";
        o.style.animation = "moveBackO 1s forwards";
        f4.style.animation = "rotateBackT 1s forwards";
        f5.style.animation = "rotateBackM 1s forwards";
        f6.style.animation = "colorr 1s forwards";
    }

    one++;
});