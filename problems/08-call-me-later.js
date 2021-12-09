class CallCenter{
	constructor(name){
		this.name = name;
	}
	sayHello(){
		return `Hello this is ${this.name}`;
	}
	callMeLater(delay){
		
	}
}



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
