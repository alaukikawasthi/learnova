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
// LEARNOVA — AI TUTOR
// PROFESSIONAL THINKING ANIMATION
// =========================================================

document.addEventListener("DOMContentLoaded", function () {


    // -----------------------------------------------------
    // AI TUTOR SEARCH / THINKING TEXT
    // -----------------------------------------------------

    var tutorSearching =
        document.querySelector(".ai-tutor-searching");


    if (tutorSearching) {

        var messages = [

            "AI Tutor is thinking",

            "Finding the best explanation",

            "Personalizing your learning",

            "Analyzing your question",

            "Preparing your answer"

        ];


        var messageIndex = 0;


        function updateTutorMessage() {

            tutorSearching.innerHTML =

                '<span class="ai-tutor-message">' +
                    messages[messageIndex] +
                '</span>' +

                '<span class="ai-tutor-dots">' +

                    '<span>.</span>' +
                    '<span>.</span>' +
                    '<span>.</span>' +

                '</span>';


            messageIndex =
                (messageIndex + 1) % messages.length;

        }


        updateTutorMessage();


        setInterval(
            updateTutorMessage,
            2200
        );

    }


    // -----------------------------------------------------
    // AI TUTOR ORB INTERACTION
    // -----------------------------------------------------

    var tutorOrb =
        document.querySelector(".ai-tutor-orb");


    if (tutorOrb) {

        tutorOrb.addEventListener(
            "mouseenter",
            function () {

                tutorOrb.style.transform =
                    "scale(1.08)";

            }
        );


        tutorOrb.addEventListener(
            "mouseleave",
            function () {

                tutorOrb.style.transform = "";

            }
        );


        tutorOrb.addEventListener(
            "click",
            function () {

                tutorOrb.style.transform =
                    "scale(0.92)";


                setTimeout(
                    function () {

                        tutorOrb.style.transform =
                            "scale(1.08)";

                    },
                    150
                );


                setTimeout(
                    function () {

                        tutorOrb.style.transform = "";

                    },
                    400
                );

            }
        );

    }


    // -----------------------------------------------------
    // AI TUTOR — PERIODIC "THINKING" EFFECT
    // -----------------------------------------------------

    var tutorCard =
        document.querySelector(".ai-tutor-card");


    if (tutorCard) {

        setInterval(
            function () {

                tutorCard.classList.add(
                    "ai-tutor-thinking"
                );


                setTimeout(
                    function () {

                        tutorCard.classList.remove(
                            "ai-tutor-thinking"
                        );

                    },
                    1200
                );

            },
            5000
        );

    }


    // -----------------------------------------------------
    // QR CODE — OPTIONAL SMOOTH HOVER
    // -----------------------------------------------------

    var qrBox =
        document.querySelector(".qr-box");


    if (qrBox) {

        qrBox.addEventListener(
            "mouseenter",
            function () {

                qrBox.style.transform =
                    "translateY(-3px) scale(1.03)";

            }
        );


        qrBox.addEventListener(
            "mouseleave",
            function () {

                qrBox.style.transform = "";

            }
        );

    }

});
