(function(){
    const count = 50;
    const snowflakeImages = [
        "flake1.gif", "flake2.gif", "flake3.gif", 
        "flake4.gif", "flake5.gif"
    ];

    // Массив объектов снежинок
    const snowflakes = [];
    let height, width;

    // Обновление размеров документа
    function updateWindowSize() {
        height = document.body.scrollHeight;
        width = document.body.scrollWidth;
    }

    // Создание снежинок
    function createSnowflakes() {
        updateWindowSize(); // Обновление размеров перед созданием снежинок
        for (let i = 0; i < count; i++) {
            const imageSrc = "/tpl/img/" + snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];
            const snowflake = document.createElement('img');

            snowflake.style.zIndex = '50';
            snowflake.id = "snowflake" + i;
            snowflake.src = imageSrc;
            snowflake.style.position = "absolute";
            snowflake.style.pointerEvents = "none"; // Снежинки не блокируют клики
            snowflake.style.maxWidth = "50px"; // Ограничение размера снежинок
            snowflake.style.animation = `rotate ${Math.random() * 3 + 2}s linear infinite`;
            document.body.appendChild(snowflake);

            snowflakes.push({
                element: snowflake,
                x: Math.random() * (width -70), // Убедимся, что снежинка не выходит за правый край
                y: Math.random() * (height - 70), // Убедимся, что снежинка не выходит за нижний край
                speed: Math.random() * 1.5 + 1,
                step: Math.random() * 0.05 + 0.02,
                xStep: 0
            });
        }
    }

    // Анимация падения снежинок
    function fall() {
        snowflakes.forEach(snowflake => {
            snowflake.xStep += snowflake.step;
            snowflake.x += snowflake.speed * Math.sin(snowflake.xStep);
            snowflake.y += snowflake.speed;

            if (snowflake.y > height - 50) {
                snowflake.y = -50;
                snowflake.x = Math.random() * (width - 70); // Убедимся, что снежинка не выходит за правый край
                snowflake.speed = Math.random() * 1.5 + 1;
                snowflake.step = Math.random() * 0.05 + 0.02;
            }

            if (snowflake.x > width - 70) {
                snowflake.x = width - 70; // Ограничение справа
            } else if (snowflake.x < 0) {
                snowflake.x = 0; // Ограничение слева
            }

            snowflake.element.style.left = snowflake.x + "px";
            snowflake.element.style.top = snowflake.y + "px";
        });

        requestAnimationFrame(fall);
    }

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    `;
    document.head.appendChild(style);

    // Инициализация
    window.addEventListener('load', () => {
        createSnowflakes();
        fall();
    });
    window.addEventListener('resize', updateWindowSize);
  })()