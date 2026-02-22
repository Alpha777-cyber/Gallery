 // --- Dark/Light Mode Toggle (Fixed & Default Dark) ---
        const toggleBtn = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;

        // Check for saved user preference
        // Note: Default is Dark (no class). If 'light' is saved, we add the class.
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            htmlElement.classList.add('light-mode');
        } else {
            htmlElement.classList.remove('light-mode'); // Ensure dark is default
        }

        toggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('light-mode');

            // Save preference
            if (htmlElement.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });

        // --- Modal / Lightbox Logic ---
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById("modalImg");
        const captionText = document.getElementById("caption");

        function openModal(element) {
            const img = element.querySelector('img');
            const overlayText = element.querySelector('.card-overlay').innerText;

            modal.style.display = "flex";
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);

            modalImg.src = img.src;
            captionText.innerText = overlayText;
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
            document.body.style.overflow = 'auto';
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // --- Scroll Animation for Message Section ---
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const msgCard = document.getElementById('msgCard');
        if (msgCard) {
            observer.observe(msgCard);
        }