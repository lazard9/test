$('#myTabs a').click(function (e) {
	var url = $(this).attr("data-url");
	if (url == "/sequences") {
		$("#modal").show();
	}
});