// Store original specific testimonial links
const originalTestimonialLinks = [
    "https://maps.app.goo.gl/H3kg6WBqCQjEEAsa6",
    "https://maps.app.goo.gl/NzfWySSVR6c9wPZc7",
    "https://maps.app.goo.gl/gF2hPpzcNzQjhzTZ8"
];
// Universal link for desktop for both testimonial links and the "Leave Us a Review" button
const desktopUniversalLink = "https://www.google.com/search?q=TKB+Cabinetry+North+York+review";
// Original link for "Leave Us a Review" button on mobile/tablet
const leaveReviewMobileTabletLink = "https://g.page/r/CfKPMDzHyXDxEAI/review";

// Function to apply responsive styles based on screen width
function applyResponsiveStyles() {
    const mainContainer = document.getElementById('main-container');
    const desktopLayoutWrapper = document.getElementById('desktop-layout-wrapper');
    const qrSection = document.getElementById('qr-section');
    const qrBackgroundWrapper = document.getElementById('qr-background-wrapper');
    const mainContentSection = document.getElementById('main-content-section');

    const mainHeading = document.getElementById('main-heading');
    const ratingInfo = document.getElementById('rating-info');
    const ratingInfoLink = ratingInfo.closest('a');
    const ratingScoreStars = document.getElementById('rating-score-stars');
    const starsVisualImg = document.getElementById('stars-visual-img');
    const ratingSource = document.getElementById('rating-source');
    const scoreText = document.getElementById('score-text');
    const onGoogleText = document.getElementById('on-google-text');
    const googleLogo = document.getElementById('google-logo');

    const testimonialsRow = document.getElementById('testimonials-row');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialLinks = document.querySelectorAll('.testimonial-card .testimonial-link');
    const leaveReviewButton = document.getElementById('leave-review-button');
    const reviewerNames = document.querySelectorAll('.testimonial-card .reviewer-name');

    // Define breakpoints
    const mobileBreakpoint = 575;
    const tabletBreakpoint = 976;

    const currentWidth = window.innerWidth;

    if (currentWidth <= mobileBreakpoint) {
        // --- Mobile Styles ---
        mainContainer.style.padding = '35px';
        mainContainer.style.maxHeight = 'none';

        desktopLayoutWrapper.style.display = 'block';
        qrSection.style.display = 'none';
        mainContentSection.style.width = '100%';
        mainContentSection.style.alignItems = 'center';

        mainHeading.style.fontSize = '24px';
        mainHeading.style.marginBottom = '20px';
        mainHeading.style.textAlign = 'center';

        ratingInfoLink.style.display = 'block';
        ratingInfo.style.flexDirection = 'column';
        ratingInfo.style.alignItems = 'center';
        ratingInfo.style.gap = '5px';
        ratingInfo.style.marginBottom = '60px'; // Changed to 60px for mobile

        ratingScoreStars.style.gap = '16px';
        scoreText.style.fontSize = '16px';
        starsVisualImg.style.height = '18px';

        onGoogleText.style.fontSize = '16px';
        googleLogo.style.width = '20px';
        googleLogo.style.height = 'auto';
        ratingSource.style.gap = '5px';

        testimonialsRow.style.flexDirection = 'column';
        testimonialsRow.style.gap = '20px';
        testimonialsRow.style.marginBottom = '30px';

        testimonialCards.forEach((card, index) => {
            card.style.width = '98%';
            card.style.maxWidth = '300px';
            card.style.height = 'auto';
            card.style.padding = '20px';
            card.style.margin = '0 auto';
            reviewerNames[index].style.fontSize = '18px';
            card.querySelector('p').style.fontSize = '14px';
            testimonialLinks[index].style.fontSize = '14px';
            testimonialLinks[index].style.fontFamily = 'Montserrat, sans-serif';
            testimonialLinks[index].href = originalTestimonialLinks[index];
            testimonialLinks[index].style.display = 'inline-block';
        });

        leaveReviewButton.href = leaveReviewMobileTabletLink;
        leaveReviewButton.style.display = 'inline-block';

    } else if (currentWidth > mobileBreakpoint && currentWidth <= tabletBreakpoint) {
        // --- Tablet Styles ---
        mainContainer.style.padding = '30px';
        mainContainer.style.maxHeight = 'none';

        desktopLayoutWrapper.style.display = 'block';
        qrSection.style.display = 'none';
        mainContentSection.style.width = '100%';
        mainContentSection.style.alignItems = 'center';

        mainHeading.style.fontSize = '30px';
        mainHeading.style.marginBottom = '25px';
        mainHeading.style.textAlign = 'center';

        ratingInfoLink.style.display = 'block';
        ratingInfo.style.flexDirection = 'row';
        ratingInfo.style.alignItems = 'center';
        ratingInfo.style.gap = '16px';
        ratingInfo.style.marginBottom = '60px'; // Changed to 60px for tablet

        ratingScoreStars.style.gap = '16px';
        scoreText.style.fontSize = '17px';
        starsVisualImg.style.height = '19px';

        onGoogleText.style.fontSize = '17px';
        googleLogo.style.width = '22px';
        googleLogo.style.height = 'auto';
        ratingSource.style.gap = '5px';

        testimonialsRow.style.flexDirection = 'column';
        testimonialsRow.style.flexWrap = 'nowrap';
        testimonialsRow.style.justifyContent = 'center';
        testimonialsRow.style.gap = '30px';
        testimonialsRow.style.marginBottom = '45px';

        testimonialCards.forEach((card, index) => {
            card.style.width = '95%';
            card.style.maxWidth = '621px';
            card.style.height = 'auto';
            card.style.padding = '35px';
            card.style.margin = '0 auto';
            reviewerNames[index].style.fontSize = '22px';
            card.querySelector('p').style.fontSize = '15px';
            testimonialLinks[index].style.fontSize = '14px';
            testimonialLinks[index].style.fontFamily = 'Montserrat, sans-serif';
            testimonialLinks[index].href = originalTestimonialLinks[index];
            testimonialLinks[index].style.display = 'inline-block';
        });

        leaveReviewButton.href = leaveReviewMobileTabletLink;
        leaveReviewButton.style.display = 'inline-block';

    } else {
        // --- Desktop Styles (Greater than 976px) ---
        mainContainer.style.padding = '40px';
        mainContainer.style.maxHeight = 'none';

        desktopLayoutWrapper.style.display = 'flex';
        desktopLayoutWrapper.style.flexDirection = 'row';
        desktopLayoutWrapper.style.justifyContent = 'center';
        desktopLayoutWrapper.style.alignItems = 'center';
        desktopLayoutWrapper.style.gap = '40px';

        qrSection.style.display = 'flex';
        qrSection.style.width = '200px';
        qrSection.style.alignItems = 'center';
        qrSection.style.justifyContent = 'center';
        qrSection.style.marginRight = '0';

        qrBackgroundWrapper.style.width = '170px';
        qrBackgroundWrapper.style.height = '170px';
        qrBackgroundWrapper.style.display = 'flex';
        qrBackgroundWrapper.style.alignItems = 'center';
        qrBackgroundWrapper.style.justifyContent = 'center';


        mainContentSection.style.width = `calc(100% - 200px - 40px)`;
        mainContentSection.style.alignItems = 'flex-start';

        mainHeading.style.fontSize = '36px';
        mainHeading.style.marginBottom = '40px';
        mainHeading.style.textAlign = 'left';

        ratingInfoLink.style.display = 'inline-block';
        ratingInfo.style.flexDirection = 'row';
        ratingInfo.style.alignItems = 'center';
        ratingInfo.style.gap = '16px';
        ratingInfo.style.marginBottom = '60px'; // Changed to 60px for desktop

        ratingScoreStars.style.gap = '16px';
        scoreText.style.fontSize = '18px';
        starsVisualImg.style.height = '20px';

        onGoogleText.style.fontSize = '18px';
        googleLogo.style.width = '24px';
        googleLogo.style.height = 'auto';
        ratingSource.style.gap = '5px';

        testimonialsRow.style.flexDirection = 'row';
        testimonialsRow.style.flexWrap = 'nowrap';
        testimonialsRow.style.justifyContent = 'space-between';
        const desktopCardGap = 27;
        testimonialsRow.style.gap = desktopCardGap + 'px';
        testimonialsRow.style.marginBottom = '55px';

        const availableWidthForCards = mainContentSection.offsetWidth;
        const cardCalculatedWidthPixels = (availableWidthForCards - (2 * desktopCardGap)) / 3;
        const cardCalculatedWidth = `${cardCalculatedWidthPixels}px`;


        testimonialCards.forEach((card, index) => {
            card.style.width = cardCalculatedWidth;
            card.style.maxWidth = 'none';
            card.style.height = '300px';
            card.style.padding = '40px';
            card.style.margin = '0';
            reviewerNames[index].style.fontSize = '18px';
            card.querySelector('p').style.fontSize = '14px';
            testimonialLinks[index].style.fontSize = '14px';
            testimonialLinks[index].style.fontFamily = 'Montserrat, sans-serif';
            testimonialLinks[index].href = desktopUniversalLink;
            testimonialLinks[index].style.display = 'none';
        });

        leaveReviewButton.href = desktopUniversalLink;
        leaveReviewButton.style.display = 'none';
    }
}

// Apply styles on initial page load
applyResponsiveStyles();

// Apply styles whenever the window is resized
window.addEventListener('resize', applyResponsiveStyles);