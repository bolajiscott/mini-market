"use strict";

var annualUseKw=0, dailyUseKw=0, i=0, x=0;

function addMonths(elem){
	var months = document.getElementById(elem).getElementsByTagName('input');
	for (i=0; i<months.length; i++) {
		x = Number(months[i].value);
		annualUseKw += x;
	} //end of If statement

	dailyUseKw = annualUseKw/360;
	return	dailyUseKw;

}// end of function


function sunHours() {
	var hrs;
	var theZone = document.forms.solarForm.zone.selectedIndex;
	theZone +=1;

	switch(theZone) {
		case 1:
			hrs = 6;
			break;
		case 2:
			hrs = 5.5;
			break;
		case 3:
			hrs = 5;
			break;
		case 4:
			hrs = 4.5;
			break;
		case 5:
			hrs = 4.2;
			break;
		case 6:
			hrs = 3.5;
			break;
		default:
			hrs = 0;
		}

	return hrs;
} // end of function



function calculateSolar(){
	dailyUseKw = addMonths('mpc');
	console.log(dailyUseKw);

	var sunHoursPerDay = sunHours();
	console.log(sunHoursPerDay);

	var minKwNeeds = dailyUseKw / sunHoursPerDay;
	console.log(minKwNeeds);

	var realKwNeeds = minKwNeeds * 1.25;
	console.log(realKwNeeds);

	var realWattNeeds = realKwNeeds * 1000;
	console.log(realWattNeeds);

	var panel = calculatePanel();
	console.log("Name " + panel[0] + " Value " + panel[1]);
}


function calculatePanel(){
	var userChoice = document.solarForm.panel.options.selectedIndex;
	var panelOption = document.solarForm.panel.options;
	var power = panelOption[userChoice].value;
	var name = panelOption[userChoice].text;

	var x = [name, power];

	return x;
}