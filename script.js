/* =========================================================
   SWAIBA JAVED BAJWA - PORTFOLIO
   Modern AI + Computer Science Theme
========================================================= */

:root {
    --bg: #070b17;
    --bg-two: #0b1020;
    --card: rgba(255, 255, 255, 0.055);
    --card-hover: rgba(255, 255, 255, 0.09);

    --text: #f4f7ff;
    --muted: #a7b0c4;

    --blue: #6c8cff;
    --cyan: #55d6ff;
    --purple: #a875ff;
    --gold: #e8c66d;

    --border: rgba(255, 255, 255, 0.10);

    --shadow:
        0 20px 70px rgba(0, 0, 0, 0.35);

    --font-main: "Inter", sans-serif;
    --font-title: "Space Grotesk", sans-serif;
}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-main);
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}

::selection {
    background: var(--blue);
    color: white;
}


/* =========================================================
   BACKGROUND
========================================================= */

.background {
    position: fixed;
    inset: 0;
    z-index: -5;
    overflow: hidden;
    background:
        radial-gradient(circle at 20% 20%, rgba(108, 140, 255, 0.08), transparent 30%),
        radial-gradient(circle at 80% 70%, rgba(168, 117, 255, 0.07), transparent 30%),
        var(--bg);
}

.grid {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);

    background-size: 55px 55px;

    mask-image: linear-gradient(
        to bottom,
        black,
        transparent 90%
    );
}

.glow {
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.15;
}

.glow-one {
    background: var(--blue);
    top: -180px;
    left: -150px;
}

.glow-two {
    background: var(--purple);
    right: -180px;
    bottom: -180px;
}

#particles {
    position: absolute;
    inset: 0;
}


/* =========================================================
   LOADER
========================================================= */

#loader {
    position: fixed;
    inset: 0;
    background: #050812;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;

    transition:
        opacity 0.7s ease,
        visibility 0.7s ease;
}

#loader.hide {
    opacity: 0;
    visibility: hidden;
}

.loader-content {
    text-align: center;
}

.loader-logo {
    font-family: var(--font-title);
    font-size: 42px;
    font-weight: 800;

    background:
        linear-gradient(
            90deg,
            var(--cyan),
            var(--purple)
        );

    -webkit-background-clip: text;
    color: transparent;

    letter-spacing: 5px;
}

.loader-line {
    width: 150px;
    height: 2px;
    margin: 18px auto;

    background: linear-gradient(
        90deg,
        transparent,
        var(--cyan),
        var(--purple),
        transparent
    );

    animation: loadingLine 1.3s infinite;
}

.loader-content p {
    color: var(--muted);
    font-size: 13px;
}

@keyframes loadingLine {
    0% {
        transform: scaleX(0.3);
        opacity: 0.4;
    }

    50% {
        transform: scaleX(1);
        opacity: 1;
    }

    100% {
        transform: scaleX(0.3);
        opacity: 0.4;
    }
}


/* =========================================================
   NAVIGATION
========================================================= */

.navbar {
    position: fixed;

    top: 18px;
    left: 50%;

    transform: translateX(-50%);

    width: min(1150px, calc(100% - 30px));

    padding: 10px 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(7, 11, 23, 0.65);

    border: 1px solid var(--border);

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    border-radius: 20px;

    z-index: 1000;

    box-shadow: var(--shadow);
}

.logo {
    font-family: var(--font-title);
    font-weight: 800;
    font-size: 22px;
    padding: 8px 14px;
}

.logo span {
    color: var(--cyan);
}

nav {
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 7px;

    padding: 10px 12px;

    color: var(--muted);

    font-size: 12px;
    font-weight: 600;

    border-radius: 12px;

    transition: 0.3s ease;
}

.nav-link i {
    font-size: 12px;
}

.nav-link:hover,
.nav-link.active {
    color: white;
    background: rgba(108, 140, 255, 0.12);
    box-shadow:
        inset 0 0 0 1px rgba(108, 140, 255, 0.12);
}

.nav-link.active {
    color: var(--cyan);
}

.menu-btn {
    display: none;

    border: 0;
    background: transparent;

    color: white;
    font-size: 22px;

    cursor: pointer;

    padding: 8px;
}


/* =========================================================
   SECTIONS
========================================================= */

main {
    width: 100%;
}

.section {
    min-height: 100vh;

    padding:
        140px
        max(25px, 6vw)
        100px;

    max-width: 1350px;

    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
}

.section-header {
    margin-bottom: 60px;
}

.section-number {
    display: inline-block;

    font-family: var(--font-title);

    color: var(--cyan);

    font-size: 12px;
    font-weight: 700;

    letter-spacing: 3px;

    margin-bottom: 10px;
}

.section-header p {
    color: var(--muted);

    font-size: 11px;

    letter-spacing: 3px;

    margin-bottom: 8px;
}

.section-header h2 {
    font-family: var(--font-title);

    font-size: clamp(40px, 5vw, 70px);

    line-height: 1;
}

.section-header h2 span {
    color: var(--cyan);
}


/* =========================================================
   HOME
========================================================= */

.home-section {
    min-height: 100vh;

    display: grid;

    grid-template-columns:
        1.1fr
        0.9fr;

    align-items: center;

    gap: 60px;

    padding-top: 120px;
}

.home-content {
    position: relative;
    z-index: 3;
}

.home-badge {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    padding: 9px 14px;

    border: 1px solid var(--border);

    border-radius: 100px;

    background: rgba(255,255,255,0.04);

    color: var(--muted);

    font-size: 11px;

    margin-bottom: 25px;
}

.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #64e38b;

    box-shadow:
        0 0 15px #64e38b;

    animation: pulse 1.8s infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.45;
        transform: scale(0.75);
    }
}

.small-intro {
    color: var(--cyan);

    font-size: 11px;

    letter-spacing: 5px;

    margin-bottom: 18px;
}

.home-content h1 {
    font-family: var(--font-title);

    font-size: clamp(50px, 7vw, 95px);

    line-height: 0.95;

    letter-spacing: -4px;

    max-width: 900px;

    background:
        linear-gradient(
            110deg,
            #ffffff 20%,
            #a9b8ff 55%,
            #55d6ff 90%
        );

    -webkit-background-clip: text;
    color: transparent;
}

.home-content h2 {
    margin-top: 25px;

    font-family: var(--font-title);

    font-size: clamp(20px, 2.5vw, 31px);

    color: #dfe6ff;

    min-height: 42px;
}

.cursor {
    color: var(--cyan);

    animation: blink 0.8s infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.home-description {
    max-width: 650px;

    color: var(--muted);

    line-height: 1.9;

    font-size: 15px;

    margin-top: 18px;
}

.home-buttons {
    display: flex;
    flex-wrap: wrap;

    gap: 12px;

    margin-top: 32px;
}

.primary-btn,
.secondary-btn {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 12px;

    padding: 14px 20px;

    border-radius: 13px;

    font-size: 13px;
    font-weight: 700;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;
}

.primary-btn {
    background:
        linear-gradient(
            135deg,
            var(--blue),
            var(--purple)
        );

    color: white;

    box-shadow:
        0 12px 30px rgba(108, 140, 255, 0.22);
}

.secondary-btn {
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.04);
}

.primary-btn:hover,
.secondary-btn:hover {
    transform: translateY(-4px);
}

.primary-btn:hover {
    box-shadow:
        0 18px 45px rgba(108, 140, 255, 0.35);
}

.secondary-btn:hover {
    background: rgba(255,255,255,0.08);
}

.home-socials {
    display: flex;
    gap: 10px;

    margin-top: 28px;
}

.home-socials a,
.footer-socials a {
    width: 38px;
    height: 38px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    border: 1px solid var(--border);

    color: var(--muted);

    transition: 0.3s ease;
}

.home-socials a:hover,
.footer-socials a:hover {
    color: white;

    background: var(--blue);

    border-color: var(--blue);

    transform: translateY(-4px);
}


/* =========================================================
   HERO COMPUTER
========================================================= */

.hero-visual {
    position: relative;

    min-height: 470px;

    display: grid;
    place-items: center;
}

.computer-card {
    width: min(450px, 90%);

    border:
        1px solid
        rgba(255,255,255,0.13);

    background:
        rgba(255,255,255,0.045);

    backdrop-filter: blur(15px);

    border-radius: 20px;

    overflow: hidden;

    box-shadow:
        0 30px 100px rgba(0,0,0,0.4),

        0 0 60px rgba(108,140,255,0.08);

    transform:
        perspective(1000px)
        rotateY(-7deg);

    transition: 0.5s ease;
}

.computer-card:hover {
    transform:
        perspective(1000px)
        rotateY(0deg)
        translateY(-10px);
}

.computer-top {
    height: 40px;

    display: flex;
    align-items: center;

    gap: 7px;

    padding: 0 15px;

    border-bottom:
        1px solid
        rgba(255,255,255,0.08);
}

.computer-top span {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: rgba(255,255,255,0.3);
}

.computer-screen {
    padding: 35px 25px;

    min-height: 260px;

    font-family: monospace;

    font-size: 13px;

    line-height: 2;
}

.code-line {
    color: #c9d1e8;
}

.code-purple {
    color: #c38cff;
}

.code-blue {
    color: #67b8ff;
}

.code-green {
    color: #70e3a3;
}

.code-orange {
    color: #ffbd72;
}

.indent {
    padding-left: 25px;
}

.orbit {
    position: absolute;

    border:
        1px solid
        rgba(108,140,255,0.18);

    border-radius: 50%;

    animation: orbitSpin 14s linear infinite;
}

.orbit-one {
    width: 470px;
    height: 470px;
}

.orbit-two {
    width: 350px;
    height: 350px;

    border-color:
        rgba(85,214,255,0.13);

    animation-duration: 10s;

    animation-direction: reverse;
}

@keyframes orbitSpin {
    to {
        transform: rotate(360deg);
    }
}

.floating-icon {
    position: absolute;

    width: 55px;
    height: 55px;

    display: grid;
    place-items: center;

    border-radius: 16px;

    background:
        rgba(12,18,35,0.85);

    border:
        1px solid
        rgba(255,255,255,0.12);

    color: var(--cyan);

    box-shadow:
        0 15px 40px rgba(0,0,0,0.3);

    backdrop-filter: blur(12px);

    animation: floating 4s ease-in-out infinite;
}

.icon-one {
    top: 35px;
    left: 5%;
}

.icon-two {
    right: 4%;
    top: 110px;

    animation-delay: 0.7s;
}

.icon-three {
    left: 8%;
    bottom: 75px;

    animation-delay: 1.3s;
}

.icon-four {
    right: 8%;
    bottom: 30px;

    animation-delay: 2s;
}

@keyframes floating {
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

.scroll-indicator {
    position: absolute;

    bottom: 25px;
    left: 50%;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;

    color: var(--muted);

    font-size: 10px;

    letter-spacing: 2px;
}

.scroll-indicator i {
    color: var(--cyan);

    animation: scrollArrow 1.5s infinite;
}

@keyframes scrollArrow {
    50% {
        transform: translateY(6px);
    }
}


/* =========================================================
   ABOUT
========================================================= */

.about-grid {
    display: grid;

    grid-template-columns:
        0.8fr
        1.2fr;

    gap: 80px;

    align-items: center;
}

.about-visual {
    min-height: 390px;

    display: grid;
    place-items: center;

    position: relative;
}

.profile-ring {
    width: 270px;
    height: 270px;

    border-radius: 50%;

    display: grid;
    place-items: center;

    border:
        1px solid
        rgba(85,214,255,0.35);

    background:
        radial-gradient(
            circle,
            rgba(108,140,255,0.15),
            rgba(255,255,255,0.02)
        );

    box-shadow:
        0 0 80px rgba(85,214,255,0.08);

    position: relative;
}

.profile-ring::before {
    content: "";

    position: absolute;

    inset: -20px;

    border-radius: 50%;

    border:
        1px dashed
        rgba(108,140,255,0.25);

    animation: orbitSpin 20s linear infinite;
}

.profile-initials {
    font-family: var(--font-title);

    font-size: 65px;

    font-weight: 800;

    color: white;
}

.about-floating-card {
    position: absolute;

    bottom: 35px;
    right: 5%;

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 13px 16px;

    background:
        rgba(12,18,35,0.85);

    border:
        1px solid
        var(--border);

    border-radius: 13px;

    font-size: 12px;

    box-shadow: var(--shadow);
}

.about-floating-card i {
    color: var(--cyan);
}

.about-content h3 {
    font-family: var(--font-title);

    font-size: clamp(27px, 3vw, 42px);

    line-height: 1.25;

    margin-bottom: 25px;
}

.about-content h3 span {
    color: var(--cyan);
}

.about-content p {
    color: var(--muted);

    line-height: 1.9;

    font-size: 14px;

    margin-bottom: 18px;
}

.about-stats {
    display: flex;
    gap: 12px;

    margin-top: 28px;
}

.stat-card {
    flex: 1;

    padding: 18px;

    border:
        1px solid
        var(--border);

    background:
        rgba(255,255,255,0.04);

    border-radius: 15px;

    text-align: center;
}

.stat-card strong {
    display: block;

    font-family: var(--font-title);

    font-size: 23px;

    color: var(--cyan);
}

.stat-card span {
    color: var(--muted);

    font-size: 11px;
}


/* =========================================================
   EDUCATION
========================================================= */

.timeline {
    position: relative;

    max-width: 850px;

    margin: auto;

    width: 100%;
}

.timeline::before {
    content: "";

    position: absolute;

    left: 27px;
    top: 0;
    bottom: 0;

    width: 1px;

    background:
        linear-gradient(
            var(--cyan),
            rgba(108,140,255,0.05)
        );
}

.timeline-item {
    position: relative;

    padding-left: 75px;

    margin-bottom: 45px;
}

.timeline-icon {
    position: absolute;

    left: 0;

    width: 55px;
    height: 55px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: #0c1427;

    border:
        1px solid
        rgba(85,214,255,0.4);

    color: var(--cyan);

    z-index: 2;
}

.timeline-card {
    padding: 28px;

    border:
        1px solid
        var(--border);

    background:
        rgba(255,255,255,0.04);

    border-radius: 18px;

    transition: 0.3s ease;
}

.timeline-card:hover {
    transform: translateX(8px);

    background:
        rgba(255,255,255,0.065);
}

.timeline-date {
    color: var(--cyan);

    font-size: 11px;

    letter-spacing: 2px;

    font-weight: 700;
}

.timeline-card h3 {
    font-family: var(--font-title);

    font-size: 22px;

    margin: 12px 0 7px;
}

.timeline-card h4 {
    color: #ccd5ff;

    font-size: 14px;

    margin-bottom: 15px;
}

.timeline-card p {
    color: var(--muted);

    font-size: 13px;

    line-height: 1.8;
}


/* =========================================================
   SKILLS
========================================================= */

.skills-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 15px;
}

.skill-card {
    padding: 25px;

    border:
        1px solid
        var(--border);

    background:
        rgba(255,255,255,0.035);

    border-radius: 18px;

    transition:
        transform 0.35s ease,
        border 0.35s ease,
        background 0.35s ease;

    position: relative;

    overflow: hidden;
}

.skill-card::after {
    content: "";

    position: absolute;

    width: 120px;
    height: 120px;

    border-radius: 50%;

    background:
        rgba(85,214,255,0.07);

    filter: blur(30px);

    right: -60px;
    top: -60px;
}

.skill-card:hover {
    transform: translateY(-8px);

    border-color:
        rgba(85,214,255,0.3);

    background:
        var(--card-hover);
}

.skill-icon {
    width: 45px;
    height: 45px;

    display: grid;
    place-items: center;

    border-radius: 12px;

    background:
        rgba(85,214,255,0.09);

    color: var(--cyan);

    margin-bottom: 18px;
}

.skill-card h3 {
    font-family: var(--font-title);

    font-size: 16px;

    margin-bottom: 9px;
}

.skill-card p {
    color: var(--muted);

    font-size: 12px;

    line-height: 1.7;
}


/* =========================================================
   PROJECTS
========================================================= */

.projects-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;
}

.project-card {
    position: relative;

    padding: 30px;

    min-height: 300px;

    border:
        1px solid
        var(--border);

    background:
        rgba(255,255,255,0.04);

    border-radius: 20px;

    overflow: hidden;

    transition:
        transform 0.35s ease,
        border 0.35s ease;
}

.project-card:hover {
    transform:
        translateY(-10px);

    border-color:
        rgba(108,140,255,0.35);
}

.project-number {
    position: absolute;

    top: 20px;
    right: 25px;

    font-family: var(--font-title);

    font-size: 35px;

    color:
        rgba(255,255,255,0.06);

    font-weight: 800;
}

.project-icon {
    width: 52px;
    height: 52px;

    display: grid;
    place-items: center;

    border-radius: 14px;

    background:
        linear-gradient(
            135deg,
            rgba(108,140,255,0.15),
            rgba(168,117,255,0.1)
        );

    color: var(--cyan);

    margin-bottom: 28px;
}

.project-card h3 {
    font-family: var(--font-title);

    font-size: 21px;

    margin-bottom: 15px;
}

.project-card p {
    color: var(--muted);

    font-size: 13px;

    line-height: 1.8;
}

.project-tags {
    display: flex;
    gap: 7px;

    margin-top: 25px;
}

.project-tags span {
    font-size: 10px;

    padding: 7px 10px;

    border-radius: 50px;

    background:
        rgba(85,214,255,0.08);

    color: var(--cyan);
}


/* =========================================================
   LEADERSHIP
========================================================= */

.leadership-section {
    position: relative;
}

.leadership-card {
    display: grid;

    grid-template-columns: 150px 1fr;

    gap: 40px;

    align-items: center;

    padding: 55px;

    border:
        1px solid
        rgba(232,198,109)
background:
        radial-gradient(
            circle at 20% 50%,
            rgba(232,198,109,0.08),
            transparent 35%
        ),
        rgba(255,255,255,0.035);

    border-radius: 25px;

    box-shadow:
        0 30px 100px rgba(0,0,0,0.25);
}

.leadership-icon {
    width: 120px;
    height: 120px;

    display: grid;
    place-items: center;

    border-radius: 30px;

    color: var(--gold);

    font-size: 45px;

    background:
        rgba(232,198,109,0.08);

    border:
        1px solid
        rgba(232,198,109,0.25);

    box-shadow:
        0 0 60px rgba(232,198,109,0.07);
}

.leadership-label {
    color: var(--gold);

    font-size: 10px;

    letter-spacing: 3px;

    font-weight: 700;
}

.leadership-content h3 {
    font-family: var(--font-title);

    font-size: clamp(25px, 3vw, 40px);

    margin: 12px 0 15px;
}

.leadership-content > p {
    color: var(--muted);

    max-width: 750px;

    line-height: 1.9;

    font-size: 14px;
}

.leadership-points {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 12px;

    margin-top: 25px;
}

.leadership-points div {
    display: flex;

    align-items: center;

    gap: 10px;

    color: #d8dff2;

    font-size: 12px;
}

.leadership-points i {
    color: var(--gold);
}


/* =========================================================
   CONTACT
========================================================= */

.contact-section {
    min-height: 90vh;
}

.contact-wrapper {
    max-width: 800px;

    width: 100%;

    margin: auto;
}

.contact-main {
    text-align: center;

    padding: 55px 35px;

    border:
        1px solid
        var(--border);

    border-radius: 25px;

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(108,140,255,0.10),
            transparent 45%
        ),
        rgba(255,255,255,0.035);
}

.contact-symbol {
    width: 65px;
    height: 65px;

    display: grid;
    place-items: center;

    margin: auto;

    border-radius: 20px;

    background:
        rgba(85,214,255,0.08);

    color: var(--cyan);

    font-size: 24px;
}

.contact-main h3 {
    font-family: var(--font-title);

    font-size: clamp(28px, 4vw, 45px);

    margin: 25px 0 15px;
}

.contact-main > p {
    color: var(--muted);

    line-height: 1.8;

    font-size: 14px;

    max-width: 600px;

    margin: auto;
}

.contact-buttons {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 12px;

    margin-top: 30px;
}

.contact-button {
    display: flex;

    align-items: center;

    gap: 14px;

    text-align: left;

    padding: 17px;

    border:
        1px solid
        var(--border);

    background:
        rgba(255,255,255,0.04);

    border-radius: 15px;

    transition: 0.3s ease;
}

.contact-button > i:first-child {
    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border-radius: 12px;

    color: var(--cyan);

    background:
        rgba(85,214,255,0.08);
}

.contact-button div {
    flex: 1;
}

.contact-button small {
    display: block;

    color: var(--muted);

    font-size: 10px;

    margin-bottom: 4px;
}

.contact-button span {
    font-size: 12px;

    font-weight: 600;
}

.external-icon {
    color: var(--muted);

    font-size: 11px;
}

.contact-button:hover {
    transform: translateY(-5px);

    border-color:
        rgba(85,214,255,0.35);

    background:
        rgba(85,214,255,0.06);
}


/* =========================================================
   FOOTER
========================================================= */

footer {
    text-align: center;

    padding: 50px 25px;

    border-top:
        1px solid
        var(--border);

    background:
        rgba(0,0,0,0.15);
}

.footer-logo {
    font-family: var(--font-title);

    font-size: 20px;

    font-weight: 700;
}

footer > p {
    color: var(--muted);

    font-size: 11px;

    margin-top: 10px;
}

.footer-socials {
    display: flex;

    justify-content: center;

    gap: 10px;

    margin: 20px 0;
}

.copyright {
    opacity: 0.6;
}


/* =========================================================
   BACK TO TOP
========================================================= */

#back-to-top {
    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 43px;
    height: 43px;

    border-radius: 13px;

    border:
        1px solid
        var(--border);

    background:
        rgba(10,16,31,0.8);

    color: var(--cyan);

    cursor: pointer;

    opacity: 0;

    visibility: hidden;

    transform: translateY(15px);

    transition: 0.3s ease;

    z-index: 500;
}

#back-to-top.show {
    opacity: 1;

    visibility: visible;

    transform: translateY(0);
}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

.section-header,
.about-grid,
.timeline-item,
.skill-card,
.project-card,
.leadership-card,
.contact-main {
    opacity: 0;

    transform: translateY(35px);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.show-section {
    opacity: 1;

    transform: translateY(0);
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 1050px) {

    nav {
        gap: 0;
    }

    .nav-link {
        padding: 9px;
    }

    .nav-link span {
        display: none;
    }

    .skills-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

}


@media (max-width: 800px) {

    .navbar {
        top: 10px;
    }

    nav {
        position: absolute;

        top: 65px;
        left: 0;
        right: 0;

        display: none;

        flex-direction: column;

        padding: 10px;

        border:
            1px solid
            var(--border);

        border-radius: 17px;

        background:
            rgba(7,11,23,0.95);

        backdrop-filter: blur(20px);
    }

    nav.open {
        display: flex;
    }

    .nav-link {
        width: 100%;

        justify-content: flex-start;

        padding: 13px;

        gap: 12px;
    }

    .nav-link span {
        display: inline;
    }

    .menu-btn {
        display: block;
    }

    .home-section {
        grid-template-columns: 1fr;

        text-align: center;

        padding-top: 140px;
    }

    .home-description {
        margin-left: auto;
        margin-right: auto;
    }

    .home-buttons,
    .home-socials {
        justify-content: center;
    }

    .hero-visual {
        min-height: 350px;
    }

    .computer-card {
        width: 90%;
    }

    .orbit-one {
        width: 350px;
        height: 350px;
    }

    .orbit-two {
        width: 270px;
        height: 270px;
    }

    .about-grid {
        grid-template-columns: 1fr;

        gap: 35px;
    }

    .about-visual {
        min-height: 300px;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .leadership-card {
        grid-template-columns: 1fr;

        text-align: center;

        padding: 35px;
    }

    .leadership-icon {
        margin: auto;
    }

    .leadership-points {
        text-align: left;
    }

}


@media (max-width: 550px) {

    .section {
        padding:
            125px
            18px
            75px;
    }

    .home-content h1 {
        font-size: 48px;

        letter-spacing: -2px;
    }

    .home-content h2 {
        font-size: 21px;
    }

    .home-description {
        font-size: 13px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .about-stats {
        flex-direction: column;
    }

    .contact-buttons {
        grid-template-columns: 1fr;
    }

    .timeline-item {
        padding-left: 62px;
    }

    .timeline::before {
        left: 24px;
    }

    .timeline-icon {
        width: 48px;
        height: 48px;
    }

    .computer-screen {
        font-size: 10px;
    }

    .floating-icon {
        width: 43px;
        height: 43px;
    }

    .icon-one {
        left: 0;
    }

    .icon-two {
        right: 0;
    }

}
