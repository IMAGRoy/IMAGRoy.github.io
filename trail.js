document.addEventListener('DOMContentLoaded', () => {
    const numberOfElements = 50; // 增加軌跡元素的數量
    const elements = [];
    const delay = 2; // 增加更新延遲
    let updateCounter = 0;

    for (let i = 0; i < numberOfElements; i++) {
        let el = document.createElement('img');
        el.src = './light.png';
        el.className = 'trail';
        document.body.appendChild(el);
        elements.push(el);
    }

    let current = 0;

    function updatePosition(x, y) {
        let el = elements[current];
        el.style.left = (x - el.width / 2) + 'px';
        el.style.top = (y - el.height / 2) + 'px';
        current = (current + 1) % numberOfElements;
    }

    document.addEventListener('mousemove', (e) => {
        updateCounter++;
        if (updateCounter % delay === 0) {
            updatePosition(e.pageX, e.pageY);
        }
    });

    document.addEventListener('touchmove', (e) => {
        e.preventDefault();
        updateCounter++;
        if (updateCounter % delay === 0) {
            var touch = e.touches[0];
            updatePosition(touch.pageX, touch.pageY);
        }
    });
});
