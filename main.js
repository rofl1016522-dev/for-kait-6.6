// ===== 1. ЛЕНИВАЯ ЗАГРУЗКА ЛОКАЛЬНОГО ВИДЕО =====
document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadVideoBtn');
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const videoWrapper = document.getElementById('videoWrapper');
    const mainPlayer = document.getElementById('mainPlayer');
    
    if (loadButton && mainPlayer) {
        loadButton.addEventListener('click', function() {
            // Прячем плейсхолдер и показываем обертку видео
            videoPlaceholder.style.display = 'none';
            videoWrapper.style.display = 'block';
            
            // Настраиваем адаптивные стили (16:9), как у вас было для YouTube
            videoWrapper.style.position = 'relative';
            videoWrapper.style.paddingBottom = '56.25%'; /* Пропорции 16:9 */
            videoWrapper.style.height = '0';
            
            // Стилизуем сам плеер под контейнер
            mainPlayer.style.position = 'absolute';
            mainPlayer.style.top = '0';
            mainPlayer.style.left = '0';
            mainPlayer.style.width = '100%';
            mainPlayer.style.height = '100%';
            
            // Запускаем воспроизведение видео
            mainPlayer.play();
        });
    }
    
    // ===== 2. ПРОВЕРКА ЗАГРУЗКИ ИЗОБРАЖЕНИЙ (ленивая загрузка) =====
    // Все изображения уже имеют атрибут loading="lazy" в HTML
    // Дополнительно логируем успешную загрузку страницы
    console.log('Сайт успешно загружен!');
    
    // ===== 3. ДОБАВЛЯЕМ АНИМАЦИЮ ПРИ СКРОЛЛЕ (опционально) =====
    // Простая анимация появления элементов при скролле
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Применяем анимацию только если браузер поддерживает Intersection Observer
    if ('IntersectionObserver' in window) {
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
});
