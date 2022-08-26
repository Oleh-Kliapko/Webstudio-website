(() => {
	const { height: headerBoxHeight } = document.querySelector(".header").getBoundingClientRect();
	document.body.style.paddingTop = `${headerBoxHeight}px`;
})();
