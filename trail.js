document.addEventListener('DOMContentLoaded', () => {
    const numberOfElements = 50; // 軌跡元素的數量
    const elements = [];
    const delay = 2; // 控制更新頻率
    let updateCounter = 0;

    for (let i = 0; i < numberOfElements; i++) {
        let el = document.createElement('div');
        el.className = 'trail';
        el.style.left = '-9999px'; // 初始位置設置為頁面外
        el.style.top = '-9999px';  // 初始位置設置為頁面外
        document.body.appendChild(el);
        elements.push(el);
    }

    let current = 0;

    function updatePosition(x, y) {
        let el = elements[current];
        el.style.left = x + 'px';
        el.style.top = y + 'px';
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
