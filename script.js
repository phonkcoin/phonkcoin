let score = 0;

document.getElementById('coin').addEventListener('click', function() {
    score++;
    document.getElementById('score').textContent = score;
});
