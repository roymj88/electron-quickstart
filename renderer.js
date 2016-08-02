// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

$(document).on("click", ".submit", function(){
	var firstname 	= $(".firstname").val();
	var lastname 	= $(".lastname").val();

	if(!firstname){
		alert("First Name is required!");
	}else if(!lastname){
		alert("Last Name is required!");
	}else{

		var html  = "<tr>";
			html += "<td>"+firstname+"</td>";
			html += "<td>"+lastname+"</td>";
			html += "</tr>";

		$("table.list").find("tbody").append(html);
		$(".firstname").val("");
		$(".lastname").val("");
	}

});
