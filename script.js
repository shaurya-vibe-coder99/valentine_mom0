// 1. DATA CONFIGURATION
const questions = [
    {
        question: "💘 What is the best way to meet your soulmate?",
        answers: [
            "⛷️ On a skiing trip just a day after valentines",
            "🛒 In a grocery store while shopping",
            "😏 In an orgy",
            "📱 While swiping on hinge",
            "💍 Arranged marriage"
        ],
        correct: 0
    },
    {
        question: "🍽️ What is Shaurya's absolute favorite thing to eat in the world?",
        answers: [
            "🍕 Cheeseburst pizza",
            "🍔 Crunchy chicken burger",
            "🔥 Qureshi ke kebab",
            "🍑 Vini's Ass",
            "🍮 Rasmalai"
        ],
        correct: 3
    },
    {
        question: "🎮 Which activity will Shaurya always choose?",
        answers: [
            "🎮 Playing valorant with the bois",
            "🚽 Pooping",
            "💞 Listening to Vini yap and staring in her eyes",
            "👹 Watching stupid big monster movies",
            "🏋️ Going to the gym"
        ],
        correct: 2
    }
];

let currentQuestion = 0;

// 2. WELCOME SCREEN
function enterSite() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('landing-screen').classList.remove('hidden');
    
    // Play Music
    const music = document.getElementById('bgMusic');
    music.volume = 0.4;
    music.play().catch(() => console.log("Music play blocked - interaction needed"));

    startHearts();
}

// 3. LANDING SCREEN LOGIC
function moveButton() {
    const btn = document.getElementById('noBtn');
    const maxX = window.innerWidth - btn.offsetWidth - 30;
    const maxY = window.innerHeight - btn.offsetHeight - 30;
    
    btn.style.position = 'fixed';
    btn.style.left = Math.random() * maxX + 'px';
    btn.style.top = Math.random() * maxY + 'px';
}

function goToTransition() {
    document.getElementById('landing-screen').classList.add('hidden');
    document.getElementById('transition-screen').classList.remove('hidden');
}

// 4. QUIZ LOGIC
function startQuiz() {
    document.getElementById('transition-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-text').innerText = q.question;
    
    const container = document.getElementById('answers-container');
    container.innerHTML = '';
    
    q.answers.forEach((ans, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerText = ans;
        btn.onclick = () => checkAnswer(index);
        container.appendChild(btn);
    });

    const progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showFinalScreen();
        }
    } else {
        triggerChaos();
    }
}

// 5. CHAOS (WRONG ANSWER)
function triggerChaos() {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 400);

    for (let i = 0; i < 25; i++) {
        const text = document.createElement('div');
        text.className = 'chaos-text';
        text.innerText = '🍑 SPANK';
        text.style.left = Math.random() * 100 + 'vw';
        text.style.top = Math.random() * 100 + 'vh';
        document.body.appendChild(text);
        setTimeout(() => text.remove(), 1000);
    }
}

// 6. GLOBAL HEARTS
function startHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerText = ['❤️', '💖', '💘', '🌸'][Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }, 400);
}

// 7. FINAL SCREEN
function showFinalScreen() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('success-screen').classList.remove('hidden');
    document.getElementById('progress-bar').style.width = '100%';
    
    startCountdown();
    createConfetti();
}

function startCountdown() {
    // Target: Feb 14, 2026, 4:00 PM IST (GMT+5:30)
    const target = new Date("2026-02-14T16:00:00+05:30").getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff < 0) {
            document.getElementById('countdown').innerText = "💖 It's Date Time!";
            clearInterval(timer);
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText = `⏳ ${d}d ${h}h ${m}m ${s}s until our date 💕`;
    }, 1000);
}

function createConfetti() {
    const colors = ['#ff4d6d', '#ff758c', '#ffffff', '#ffccd5'];
    for (let i = 0; i < 150; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDuration = Math.random() * 3 + 2 + 's';
        c.style.opacity = Math.random();
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }
}

// 8. LAUNCH DATE
function launchDate() {
    const btn = document.getElementById('launchBtn');
    let count = 3;
    btn.disabled = true;

    const interval = setInterval(() => {
        if (count > 0) {
            btn.innerText = `Launching in ${count}...`;
            count--;
        } else {
            clearInterval(interval);
            btn.innerText = "🚀 Taking you to our date...";
            window.open('https://calendar.app.google/TfzaqEaDmg82K56U6', '_blank');
            // Reset button text after a delay
            setTimeout(() => {
                btn.innerText = "💻 Start Our Valentine Date";
                btn.disabled = false;
            }, 3000);
        }
    }, 1000);
}