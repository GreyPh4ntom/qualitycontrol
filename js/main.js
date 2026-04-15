/* ============================================
   QUALITYCONTROL - Main JavaScript
   Animations, Gallery, Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Preloader ---
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 1500);
    });
    
    // Fallback: hide preloader after 3 seconds max
    setTimeout(function() {
        preloader.classList.add('hidden');
    }, 3000);
    
    // --- Custom Cursor ---
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(function() {
                cursorFollower.style.left = (e.clientX - 16) + 'px';
                cursorFollower.style.top = (e.clientY - 16) + 'px';
            }, 100);
        });
        
        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .gallery-item, .service-card');
        hoverElements.forEach(function(el) {
            el.addEventListener('mouseenter', function() {
                cursorFollower.style.transform = 'scale(1.5)';
                cursorFollower.style.opacity = '0.8';
            });
            el.addEventListener('mouseleave', function() {
                cursorFollower.style.transform = 'scale(1)';
                cursorFollower.style.opacity = '0.5';
            });
        });
    }
    
    // --- Navigation ---
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    
    // --- Particles ---
    const particlesContainer = document.querySelector('.particles');
    
    function createParticles() {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            particlesContainer.appendChild(particle);
        }
    }
    
    createParticles();
    
    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .contact-card, .stat, .testimonial-card');
    
    function handleScrollAnimation() {
        animatedElements.forEach(function(el) {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Run on load
    
    // --- Counter Animation ---
    const counters = document.querySelectorAll('.stat-number');
    let counterAnimated = false;
    
    function animateCounters() {
        if (counterAnimated) return;
        
        const statsSection = document.querySelector('.about-stats');
        if (!statsSection) return;
        
        const sectionTop = statsSection.getBoundingClientRect().top;
        
        if (sectionTop < window.innerHeight - 100) {
            counterAnimated = true;
            
            counters.forEach(function(counter) {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                function updateCounter() {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString() + '+';
                    }
                }
                
                updateCounter();
            });
        }
    }
    
    window.addEventListener('scroll', animateCounters);
    
    // --- Gallery Filter ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(function(item) {
                const categories = item.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
    
    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-nav.prev');
    const lightboxNext = document.querySelector('.lightbox-nav.next');
    let currentLightboxIndex = 0;
    let visibleItems = [];
    
    function updateVisibleItems() {
        visibleItems = Array.from(galleryItems).filter(function(item) {
            return !item.classList.contains('hidden');
        });
    }
    
    function openLightbox(index) {
        updateVisibleItems();
        currentLightboxIndex = index;
        const item = visibleItems[index];
        if (!item) return;
        
        const title = item.querySelector('.gallery-info h4').textContent;
        lightboxTitle.textContent = title;
        lightbox.classList.add('active');
        document.body.classList.add('no-scroll');
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    function navigateLightbox(direction) {
        updateVisibleItems();
        currentLightboxIndex += direction;
        
        if (currentLightboxIndex < 0) {
            currentLightboxIndex = visibleItems.length - 1;
        } else if (currentLightboxIndex >= visibleItems.length) {
            currentLightboxIndex = 0;
        }
        
        const item = visibleItems[currentLightboxIndex];
        const title = item.querySelector('.gallery-info h4').textContent;
        lightboxTitle.textContent = title;
    }
    
    // Add click events to gallery items
    galleryItems.forEach(function(item, index) {
        const zoomBtn = item.querySelector('.gallery-zoom');
        if (zoomBtn) {
            zoomBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                updateVisibleItems();
                const visibleIndex = visibleItems.indexOf(item);
                openLightbox(visibleIndex);
            });
        }
        
        item.addEventListener('click', function() {
            updateVisibleItems();
            const visibleIndex = visibleItems.indexOf(item);
            openLightbox(visibleIndex);
        });
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', function() {
        navigateLightbox(-1);
    });
    lightboxNext.addEventListener('click', function() {
        navigateLightbox(1);
    });
    
    // Close lightbox on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    });
    
    // --- Testimonials Slider ---
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const sliderDots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;
    let slideInterval;
    
    // Create dots
    testimonialCards.forEach(function(_, index) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', function() {
            goToSlide(index);
        });
        sliderDots.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function goToSlide(index) {
        testimonialCards.forEach(function(card) {
            card.classList.remove('active');
        });
        dots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        
        currentSlide = index;
        testimonialCards[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= testimonialCards.length) {
            next = 0;
        }
        goToSlide(next);
    }
    
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = testimonialCards.length - 1;
        }
        goToSlide(prev);
    }
    
    nextBtn.addEventListener('click', function() {
        nextSlide();
        resetAutoSlide();
    });
    
    prevBtn.addEventListener('click', function() {
        prevSlide();
        resetAutoSlide();
    });
    
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }
    
    startAutoSlide();
    
    // --- Back to Top Button ---
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // --- Contact Form ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Create WhatsApp message
            let whatsappMessage = 'Hello Zackry! I\'d like to book an appointment.%0A%0A';
            whatsappMessage += 'Name: ' + encodeURIComponent(name) + '%0A';
            whatsappMessage += 'Email: ' + encodeURIComponent(email) + '%0A';
            if (phone) whatsappMessage += 'Phone: ' + encodeURIComponent(phone) + '%0A';
            whatsappMessage += 'Service: ' + encodeURIComponent(service) + '%0A';
            if (message) whatsappMessage += 'Message: ' + encodeURIComponent(message) + '%0A';
            
            // Open WhatsApp with pre-filled message
            // IMPORTANT: Replace 1234567890 with actual WhatsApp number
            const whatsappURL = 'https://wa.me/1234567890?text=' + whatsappMessage;
            window.open(whatsappURL, '_blank');
            
            // Show success message
            alert('Thank you! Redirecting you to WhatsApp to complete your booking.');
            
            // Reset form
            this.reset();
        });
    }
    
    // --- Parallax Effect on Hero ---
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (window.innerWidth > 768) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                if (scrolled < window.innerHeight) {
                    heroContent.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
                    heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
                }
            });
        }
    }
    
    parallaxEffect();
    
    // --- Tilt Effect on Service Cards ---
    function tiltEffect() {
        if (window.innerWidth <= 768) return;
        
        const cards = document.querySelectorAll('.service-card, .contact-card');
        
        cards.forEach(function(card) {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }
    
    tiltEffect();
    
    // --- Reveal Animation on Scroll ---
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.about-image, .about-content, .section-header');
        
        reveals.forEach(function(element) {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    // --- Typing Effect for Hero (Optional Enhancement) ---
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }
    
    // --- Performance: Reduce animations for users who prefer reduced motion ---
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.particle').forEach(function(p) {
            p.style.animation = 'none';
        });
    }
    
});
