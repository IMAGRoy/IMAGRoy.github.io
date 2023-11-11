document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lastX = -1;
    let lastY = -1;

    function drawLine(x, y) {
        if (lastX === -1) {
            lastX = x;
            lastY = y;
        }

        ctx.beginPath();
        ctx.strokeStyle = 'white'; // 線條顏色
        ctx.lineWidth = 2; // 線條寬度
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();

        lastX = x;
        lastY = y;
    }

    function fadeOut() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // 半透明的黑色覆蓋層
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    setInterval(fadeOut, 100); // 每100毫秒降低一次透明度

    document.addEventListener('mousemove', (e) => {
        drawLine(e.clientX, e.clientY);
    });

    document.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        drawLine(touch.clientX, touch.clientY);
    });
});
