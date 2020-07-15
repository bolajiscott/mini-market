function getCalculate(){
	let text = document.getElementById('stock');
	let text1 = text.getElementsByTagName('input');
	let listItem = []
	let totalCost = 0;
	for (i=0; i<text1.length; i++) {

		if (text1[i].checked){
			totalCost = totalCost + Number(text1[i].value);
			listItem = listItem  + "<br/>" + text1[i].id + " cost " + text1[i].value;
			


		}
	}

	let output = document.getElementById('output').innerHTML = listItem + "<br/> And your Total Cost is: " + totalCost;
// 	var total=price*quantity
// alert("total: $"+total)


}


 getDoneShoping =()=>{

	let checkout = document.getElementById('checkout').getElementsByTagName('button');
	let stockItems = document.getElementById('formCheckbox');

	stockItems.innerHTML = 'Please Enter your Payment: <input type="text" id="pay" name="pay" value="">';
	checkout[0].style.display = "none";

}
