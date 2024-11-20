// Adding a simple scroll effect for the CTA button
document.querySelector('.cta').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
});
