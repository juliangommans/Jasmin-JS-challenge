$(document).ready(function(){

	var masterChef = new oven();

$('#new_batch').on('submit',function(e){
	e.preventDefault();

	var $values = {};
	$.each($('#new_batch').serializeArray(), function(i, field) {
		$values[field.name] = field.value;
	});
	var $newBatch = new cookie($values.batch_type,$values.bake_time);

	ovenRack(masterChef,$newBatch);
	updateState(masterChef);

});

function ovenRack(oven,cookie){

	if(oven.contents.length < oven.maxSize){
		oven.add(cookie);
	}	else{
		alert("Your oven is full");
	}
}

function updateState(oven){

	for(i=0;i<oven.contents.length;i++){
		$('#name_' + i).text(oven.contents[i].name);
		$('#rack_' + i).text(oven.contents[i].status);
		$('#name_' + i).attr("class", oven.contents[i].status);
		$('#rack_' + i).attr("class", oven.contents[i].status);
	}
}

$('#bake').on('click', function(){
	masterChef.cook();
	updateState(masterChef);
});


















});