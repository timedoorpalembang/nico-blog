function changeText() {
    var replaceText = document.
    getElementByClassName("mini-text");
    replaceText[0].innerHTML = "scroll untuk melihat";

    document.getElementId("icon-up").style.display = "none";
    <button id="icon-up" onclick="changeText()"> <i class="far fa-hand-point-up"></i></button>
    

    document.getElementId("icon-down").style.display= "block";
}