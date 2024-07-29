const textInput = document.getElementById('textInput');
const totalCount = document.getElementById('totalCount');
const remainingCount = document.getElementById('remainingCount');

const maxChars = 50;

textInput.addEventListener('input', () => {
    const textLength = textInput.value.length;
    totalCount.textContent = textLength;
    remainingCount.textContent = maxChars - textLength;
});