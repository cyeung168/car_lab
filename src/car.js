function Car(make, model, year, color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.state = "off";
	//this.state = state;
	this.color = color;
	this.previous_owners = [];
	this.current_owner = "Manufacturer";
	this.passengers = [];
	// this.previousOwners = previousOwners;
	// this.currentOwners = currentOwners;
}

// var car1 = new Car("BMW", "X5", 2012, "Red");

Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
}

Car.prototype.paint = function(newColor){
	this.color = newColor;
}

Car.prototype.start = function() {
	this.state = "on";
}

Car.prototype.off = function(){
	this.state = "off";
}

Car.prototype.driveTo = function(destination) {
	if(this.state == "on") {
		console.log("driving to " + destination);
	}
}

Car.prototype.park = function() {
	if(this.state == "off"){
		console.log("parked!!");
	}
}

//Car.prototype.passengers = [];

Car.prototype.pick_up = function(name) {
	if(this.state === "on") {
		this.passengers.push(name);
		console.log("driving to pick up " + name)
	}
}

Car.prototype.dropOff = function(name) {
	if(this.state === "on"){
		// this.passengers.pop(name);
		this.passengers.splice(this.passengers.indexOf(name),1) 
	}
}

module.exports=Car;
