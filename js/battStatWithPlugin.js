/*
 * Script for Battery Status
 * References: https://www.w3.org, cordova-plugin-battery-status
 * by Earl Royce Hugo
 */

function battStat() {
	// Cancel vibrate if running
	navigator.vibrate(0);
	
	window.addEventListener("batterystatus", onBatteryStatus, false);
		
	function onBatteryStatus (status) {
		var batteryLevel = `${Math.round(status.level)}%`;
		var batteryCharge = status.isPlugged ? "Charging" : "Not Charging";
			
		document.getElementById("displayResult").innerHTML = batteryLevel + "<br>" + batteryCharge;
	}
		
	onBatteryStatus();

}