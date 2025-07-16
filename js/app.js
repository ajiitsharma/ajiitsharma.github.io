/* Animate on scroll */
AOS.init({ once: true, duration: 1500 });

/* Navbar hide on scroll down / show on scroll up */
let last = 0;
const nav = document.getElementById("navbar");
// window.addEventListener("scroll", () => {
// 	const current = window.scrollY;
// 	if (current > last && current > 80) nav.classList.add("nav-hide");
// 	else nav.classList.remove("nav-hide");
// 	last = current;
// });

/* Dynamic year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Contact form placeholder */
document.getElementById("contactForm").addEventListener("submit", (e) => {
	e.preventDefault();
	alert("Hook up Netlify Forms, Formspree, or EmailJS here.");
});
