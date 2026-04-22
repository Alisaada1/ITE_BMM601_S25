document.addEventListener('DOMContentLoaded', () => {
    
    // Part 1: Page Transition
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);

    // Part 2: Scroll Animation Logic
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.member-card, .home-card, .video-card, .image-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Part 3: Interactive Mouse Tracking
    const cards = document.querySelectorAll('.member-card, .home-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Part 4: Developer Console Signature
    console.log("%c GenMedia AI System ", "color: #38bdf8; font-size: 20px; font-weight: bold; background: #0f172a; padding: 5px 10px; border-radius: 5px;");
    console.log("%c Developed by: Ali & Ghalia Team ", "color: #f472b6; font-style: italic;");
});



document.addEventListener('play', function(e){
    var mediaElements = document.querySelectorAll('video, audio');
    for(var i = 0; i < mediaElements.length; i++){
        if(mediaElements[i] != e.target){
            mediaElements[i].pause();
        }
    }
}, true);





const images = document.querySelectorAll('img');

images.forEach(img => {
    
    if (!img.src.includes('logo') && !img.src.includes('favicon')) {
        img.style.cursor = 'zoom-in';
        
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            document.body.appendChild(lightbox);

            const bigImg = document.createElement('img');
            bigImg.src = img.src;
            lightbox.appendChild(bigImg);

            setTimeout(() => lightbox.classList.add('active'), 10);

            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('active');
                setTimeout(() => lightbox.remove(), 300);
            });
        });
    }
});

function exitSite() {
    if (document.referrer !== "") {
        window.history.back();
    } else {
        window.location.href = "https://www.google.com";
    }
}

