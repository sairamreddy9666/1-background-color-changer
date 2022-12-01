const bodyE2 = document.getElementsByTagName('body');

function changeBackgroundColor(event) {
    const backgroundColor = event?.target?.value;
    bodyE2[0].style.backgroundColor = backgroundColor;
}
