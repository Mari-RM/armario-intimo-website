function toggleText(elementId) {
    var textElement = document.getElementById(elementId);

    var isShowing = textElement.classList.contains('show');

    if (isShowing) {
        textElement.classList.remove('show');
    } else {
        textElement.classList.add('show');
    }
}