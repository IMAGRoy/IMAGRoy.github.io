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
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 5;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // 決定是否在這個點放置圖片
        if (Math.random() < 1) { // 80% 的機率
            placeImage(x, y);
        }

        lastX = x;
        lastY = y;
    }

    function placeImage(x, y) {
        const img = new Image();
        img.src = './light.png';
        img.onload = () => {
            // 設置圖片的新尺寸
            const scaledWidth = img.width * 0.03; // 這裡將圖片寬度縮小為原來的50%
            const scaledHeight = img.height * 0.03; // 這裡將圖片高度縮小為原來的50%
    
            // 繪製圖片
            ctx.drawImage(img, x - scaledWidth / 2, y - scaledHeight / 2, scaledWidth, scaledHeight);
        };
    }
    

    function fadeOut() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    setInterval(fadeOut, 50);

    document.addEventListener('mousemove', (e) => {
        drawLine(e.clientX, e.clientY);
    });

    document.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        drawLine(touch.clientX, touch.clientY);
    });
});
