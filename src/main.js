import Swiper, {
	A11y,
	Autoplay,
	EffectCoverflow,
	FreeMode,
	Pagination,
	Navigation,
} from "swiper";

import $ from "jquery";

Swiper.use([EffectCoverflow, Pagination, Autoplay, FreeMode, Navigation]);
window.Swiper = Swiper;
window.$ = $;

window.showElement = function (idShow, idHide) {
	$(`#${idShow}`).addClass("opacity-100");
	$(`#${idHide}`).removeClass("opacity-100");
	$(`#${idHide}`).addClass("opacity-0");
	$(`#${idShow}`).removeClass("opacity-0");
};
window.swapNodes = function (node1, node2) {
	const temp = document.createComment("");
	node2.replaceWith(temp);
	node1.replaceWith(node2);
	temp.replaceWith(node1);
};
$(function () {
	$("[data-client_id]").on("click", function () {
		const hideElement = $(".border-primary>[data-client_id]");
		const idShow = `client-${$(this).data("client_id")}`;
		const idHide = `client-${hideElement.data("client_id")}`;
		if (idHide == idShow) {
			return;
		}
		swapNodes(hideElement[0], this);
		showElement(idShow, idHide);
	});

	let maxHeight = 0;

	$("[id^='client']").each(function () {
		this.clientHeight > maxHeight && (maxHeight = this.clientHeight);
	});

	$("style[name='inline']").text(`
		@media (max-width: 767px) { 
			#client-feedback-container{
				height: ${maxHeight + 96}px;
			}
		 }
	`);
});

// Show list service header
$(function () {
	// Handle scroll change background-color header
	$(window).on("scroll", function () {
		var scrollPosition = $(this).scrollTop();
		if (scrollPosition > 100) {
			$("#header__nav").css(
				"background",
				"linear-gradient(180deg, #FFFFFF 42.5%, rgba(255, 255, 255, 0) 149.38%)"
			);
			$("#header__nav-logo").attr("src", "./assets/images/logo-icon.svg");
		} else {
			$("#header__nav").css("background", "#fff");
			$("#header__nav-logo").attr("src", "./assets/images/logo.png");
		}
		// Close header nav when scroll
		$("#header__nav-mobile").css("display", "none");
	});

	// Toggle menu for mobile
	$("#header__control-menu").on("click", function () {
		$("#header__nav-mobile").css("display", "block");
	});

	// Close header
	$("#header__control-close").on("click", function () {
		$("#header__nav-mobile").css("display", "none");
	});

	// Toggle menu services mobile
	$("#services__control-menu").on("click", function () {
		$("#services__menu").css("display", "block");
		$("#header__menu").css("display", "none");
	});

	// Go back main menu
	$("#go-back-menu").on("click", function () {
		$("#services__menu").css("display", "none");
		$("#header__menu").css("display", "block");
	});

	// Get height header
	$("#services__dropdown").css(
		"top",
		`${$("#header__nav").outerHeight() - 1}px`
	);

	$(".services-menu").hover(
		function () {
			$(".image-estimate").addClass("hidden");
		},
		function () {
			$(".image-estimate").removeClass("hidden");
		}
	);
	$("[data-service_id]").on("click", function () {
		const hideElement = $(".opacity-100[id^=service-]");
		const idShow = `service-${$(this).data("service_id")}`;
		const idHide = `service-${hideElement.data("service_id")}`;

		if (idHide == idShow) {
			return;
		}
		// swapNodes(hideElement[0], this);
		showElement(idShow, idHide);
	});
});
