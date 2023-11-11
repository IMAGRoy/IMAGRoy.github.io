document.addEventListener('DOMContentLoaded', () => {
    const numberOfElements = 20; // 軌跡元素的數量
    const elements = [];

    for (let i = 0; i < numberOfElements; i++) {
        let el = document.createElement('img');
        el.src = './light.png'; // 指定圖片路徑
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
        updatePosition(e.pageX, e.pageY);
    });

    document.addEventListener('touchmove', (e) => {
        e.preventDefault(); // 防止窗口拖動
        var touch = e.touches[0];
        updatePosition(touch.pageX, touch.pageY);
    });

    // 防止觸摸時的縮放和滾動
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('touchend', (e) => {
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchcancel', (e) => {
        e.preventDefault();
    }, { passive: false });
});
