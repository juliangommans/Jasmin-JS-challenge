function cookie(type,count){
	this.name = type;
	this.cook_time = count;
	this.status = "raw";
	this.initial_time = count;
}

cookie.prototype.check_status = function(){
	if(this.cook_time < this.initial_time && this.cook_time > 0){
		this.status = "still_gooey";
	}	else if(this.cook_time === 0) {
				this.status = "just_right";
			}	else{
				this.status = "crispy";
				}
	
};

function bake(cookie){
	cookie.cook_time --;
	cookie.check_status();
}

function oven(size){
	this.contents = [];
	this.maxSize = typeof size !== 'undefined' ? size : 3;

}

oven.prototype.add = function(cookie){
	this.contents.push(cookie);
};

oven.prototype.remove = function(cookie){
	this.item = this.contents.indexOf(cookie);
	if(this.item > -1){
		this.contents.splice(this.item,1);
	}
};

oven.prototype.cook = function(){
	for(i=0;i<this.contents.length;i++){
		bake(this.contents[i]);
	}
	
};

