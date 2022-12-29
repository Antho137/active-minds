// access html elements
document.getElementById('waterContent').style.display = 'none';
document.getElementById('airPollutionContent').style.display = 'none';
document.getElementById('computersTab').className = 'accordionPanelTab highlight';

// hiding contents and tabs
function hidePanels() {
    document.getElementById('computersContent').style.display = 'none';
    document.getElementById('waterContent').style.display = 'none';
    document.getElementById('airPollutionContent').style.display = 'none';
    document.getElementById('computersTab').className = 'accordionPanelTab';
    document.getElementById('waterTab').className = 'accordionPanelTab';
    document.getElementById('airPollutionTab').className = 'accordionPanelTab';
}

// showing contents element and tab
function showComputers() {
    hidePanels(); // hiding others tabs 
    document.getElementById('computersContent').style.display = 'block';
    document.getElementById('computersTab').className = 'accordionPanelTab highlight';
}

// showing contents element and tab
function showWater() {
    hidePanels(); // hiding others tabs 
    document.getElementById('waterContent').style.display = 'block';
    document.getElementById('waterTab').className = 'accordionPanelTab highlight';       
}

// showing contents element and tab
function showAirPollution() {
    hidePanels(); // hiding others tabs 
    document.getElementById('airPollutionContent').style.display = 'block';
    document.getElementById('airPollutionTab').className = 'accordionPanelTab highlight';
}

// function that determine the current year
function updateYear() {
	var now = new Date();// today date
	var theYear = now.getFullYear();
	var thisYear = document.getElementById("ye");
	thisYear.innerHTML = theYear;
	return theYear;// return the current year
}

function changeButton() {
    // accessing html elements and if check input is true, clicking the button shows element content.

	if (document.getElementById('Warning').checked === true) {
		document.getElementById('topicDescript').innerHTML = "Setting as priority economic growth over environmental protection is to ignore the disaster that can be resulted. All aspects expected as important for people's better life can be fulfilled without harm the environment. <br> Today, consequences from this ignorance are evident. One of these among many others is the extreme weather events! A healthful environment is a primordial need of living species.";
    }

	if (document.getElementById('pollution').checked === true) {
		document.getElementById('topicDescript').innerHTML = "The new reality people must now confront is the serious impacts that accompany air and water pollution. Air and water pollution are both factors that harm the earth and cause million of deaths every year worldwide. <br> The standard of better life humans is seeking to attain can't be possible as long as the relationships that must exist between the environment and living species has not been considered.";
    }
    
	if (document.getElementById('net').checked === true) {
		document.getElementById('topicDescript').innerHTML = "Internet has been one of the principal driver of the global community in the world. It created opportunities for different people around the globe to be connected.<br> This innovation enables world's people to communicate and be informed of what is happening arround the world. Of course, with online education, people of different countries share common experience which is to gain new skills.";
    }
    
	if (document.getElementById('global').checked === true) {
		document.getElementById('topicDescript').innerHTML = "As, global society become an evidence and cooperation in the form of trade blocks a reality, many countries remain outside! <br> Dissolving barriers of time and distance is welcome but it is limited to resolve a true challenge of world's people which is to enjoy the life as it must be (justice and peace)! <br> Of course, new opportunities has been created for better live's standards but this remain a big dream for most of Us.";
    }
}	

// create event from user interaction
function createEventListener() {
	document.getElementById("submitBtn").addEventListener("click", changeButton, false);
	document.getElementById("computersTab").addEventListener("click", showComputers, false);
	document.getElementById("airPollutionTab").addEventListener("click", showAirPollution, false);
	document.getElementById("waterTab").addEventListener("click", showWater, false);
	updateYear();

    // element set to display per default when window loads in the page 
	document.getElementById('topicDescript').innerHTML = "Setting as priority economic growth over environmental protection is to ignore the disaster that can be resulted. All aspects expected as important for people's better life can be fulfilled without harm the environment. <br> Today, consequences from this ignorance are evident. One of these among many others is the extreme weather events! A healthful environment is a primordial need of living species.";
}

window.addEventListener("load", createEventListener);