// =========================================================
// LEARNOVA — MAIN JAVASCRIPT
// =========================================================


// =========================================================
// HAMBURGER MENU
// =========================================================

var hamburger = document.getElementById('hamburger');
var primaryNav = document.getElementById('primaryNav');

if (hamburger && primaryNav) {

    hamburger.addEventListener('click', function () {

        var isOpen = primaryNav.classList.toggle('open');

        hamburger.setAttribute(
            'aria-expanded',
            isOpen ? 'true' : 'false'
        );

    });


    primaryNav.querySelectorAll('a').forEach(function (link) {

        link.addEventListener('click', function () {

            primaryNav.classList.remove('open');

            hamburger.setAttribute(
                'aria-expanded',
                'false'
            );

        });

    });

}


// =========================================================
// SCROLL REVEAL
// =========================================================

var revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

    var io = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add('is-visible');

                    io.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealEls.forEach(function (el) {

        io.observe(el);

    });

} else {

    revealEls.forEach(function (el) {

        el.classList.add('is-visible');

    });

}


// =========================================================
// ENROLL FORM
// DEMO CONFIRMATION ONLY
// =========================================================

var enrollForm = document.getElementById('enrollForm');
var formConfirm = document.getElementById('formConfirm');

if (enrollForm && formConfirm) {

    enrollForm.addEventListener('submit', function (e) {

        e.preventDefault();

        formConfirm.classList.add('show');

    });

}


// =========================================================
// AI TUTOR — DEMO CHAT WITH THINKING ANIMATION
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

    var messagesEl = document.getElementById('aiMessages');
    var thinkingEl = document.getElementById('aiThinking');
    var chatForm = document.getElementById('aiChatForm');
    var questionInput = document.getElementById('aiQuestion');

    if (!messagesEl || !thinkingEl || !chatForm || !questionInput) {
        return;
    }


    var demoReplies = {
        default:
            "Great question. Here's a simple way to think about it: break the idea into small pieces, learn one piece at a time, and connect them with a real example. Try asking about a specific topic — neural networks, Python loops, or interview tips.",
        neural:
            "Think of a neural network like a simplified brain. It learns patterns from examples, then uses those patterns to make predictions on new information — the same way you recognise a face after seeing it a few times.",
        machine:
            "Machine learning is teaching a computer with examples. It finds patterns in data and uses those patterns to make predictions on new information — without being hand-coded for every case.",
        python:
            "Python is a clear, readable programming language. You write instructions in plain-looking syntax, and it runs them step by step — ideal for beginners and for data, AI and web work.",
        interview:
            "For interviews: prepare 2–3 stories about projects you've built, practice explaining them in under two minutes, and always end with what you learned. Confidence comes from rehearsal.",
        data:
            "Data science is turning raw numbers into useful decisions. You clean the data, explore patterns, build models, and explain results so others can act on them."
    };

    function pickReply(text) {
        var t = (text || '').toLowerCase();
        if (t.indexOf('neural') !== -1) return demoReplies.neural;
        if (t.indexOf('machine') !== -1 || t.indexOf('ml') !== -1) return demoReplies.machine;
        if (t.indexOf('python') !== -1) return demoReplies.python;
        if (t.indexOf('interview') !== -1 || t.indexOf('resume') !== -1) return demoReplies.interview;
        if (t.indexOf('data') !== -1) return demoReplies.data;
        return demoReplies.default;
    }

    function appendMessage(text, type) {
        var div = document.createElement('div');
        div.className = 'ai-message ' + type;
        div.textContent = text;
        messagesEl.insertBefore(div, thinkingEl);
        messagesEl.scrollTop = messagesEl.scrollHeight;
        return div;
    }

    var busy = false;

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (busy) return;

        var q = questionInput.value.trim();
        if (!q) return;

        busy = true;
        questionInput.value = '';
        questionInput.disabled = true;
        chatForm.querySelector('button').disabled = true;

        appendMessage(q, 'user-message');

        thinkingEl.hidden = false;
        thinkingEl.setAttribute('aria-hidden', 'false');
        messagesEl.scrollTop = messagesEl.scrollHeight;

        var delay = 1100 + Math.floor(Math.random() * 700);

        setTimeout(function () {
            thinkingEl.hidden = true;
            thinkingEl.setAttribute('aria-hidden', 'true');

            appendMessage(pickReply(q), 'bot-message');

            busy = false;
            questionInput.disabled = false;
            chatForm.querySelector('button').disabled = false;
            questionInput.focus();
        }, delay);
    });

});
