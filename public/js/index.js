// my js

// constants
const constants = {
	DESKTOP: {
		selector: "#desktop",
		path: "views/desktop.html"
	},
	PROJECT: {
		selector: "#projects",
		btn: "[data-w-btn='projects']",
		path: "views/myComputer.html"
	},
	ABOUT_ME: {
		selector: "#aboutMe",
		btn: "[data-w-btn='aboutMe']",
		path: "views/notepad.html"
	},
	WEB_DESIGN: {
		selector: ".icon-wrap.icon-wrap-home",
		path: "public/svgs/web-designer.html"
	}
}

$(document).ready(() => {
	/***************** Initialiser *******************/
	console.info("ready");
	$(constants.DESKTOP.selector).load(constants.DESKTOP.path, () => {
		$(constants.PROJECT.selector).load(constants.PROJECT.path, () => {
			console.info("Finished Initialising...");
			
			// main
			$(document).ready(main);
			$(constants.ABOUT_ME.selector).hide();
			// $(constants.PROJECTS.selectors).hide();
			$(constants.ABOUT_ME.selector).load(constants.ABOUT_ME.path, () => $(constants.WEB_DESIGN.selector).load(constants.WEB_DESIGN.path));
		});
	});
	/***************** Initialiser End *******************/
});


function main() {
	/***************** Windows Btn *******************/
	// when aboutMe btn is clicked
	$(constants.ABOUT_ME.btn).each((index, ele) => {
		$(ele).click(() => {
			console.info("click");
			
			$(constants.ABOUT_ME.selector).fadeToggle();
		});
	});
	
	// when project btn is clicked
	$(constants.PROJECT.btn).each((index, ele) => {
		$(ele).click(() => {
			console.info("click");
	
			$(constants.PROJECT.selector).fadeToggle();
		});
	});
	/***************** Windows Btn End *******************/

	/***************** Animate Svg *******************/
	$(".origin-center").each((index, element) => {
		let bbox = element.getBBox(),
			x = bbox.x,
			y = bbox.y,
			w = bbox.width,
			h = bbox.height;

		//center center
		let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';

		$(element).css("transform-origin", resultCC);
	}); // forEach

	$(".origin-left").each((index, element) => {
		let bbox = element.getBBox(),
			x = bbox.x,
			y = bbox.y;

		//top left
		let resultTL = x + 'px ' + y + 'px';

		$(element).css("transform-origin", resultTL);
	}); // forEach
	/***************** Animate Svg End *******************/
}