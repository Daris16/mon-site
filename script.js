/* ===== ANIMATIONS POUR LE JAVASCRIPT ===== */
.animate-in {
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Menu mobile animation */
.menu-mobile.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.menu-mobile.active span:nth-child(2) {
    opacity: 0;
}

.menu-mobile.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

.menu-mobile span {
    transition: all 0.3s ease;
}

/* Effets de hover avancés */
.expertise-card, .content-card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Progress bar */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    width: 0%;
    z-index: 10000;
    transition: width 0.1s ease;
}