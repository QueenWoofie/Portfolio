document.addEventListener("mousemove", (event) => {
    createStar(event.pageX, event.pageY);
});

function createStar(x, y) {
    const star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;

    star.style.left = `${x + offsetX}px`;
    star.style.top = `${y + offsetY}px`;

    setTimeout(() => {
        star.remove();
    }, 800);
}