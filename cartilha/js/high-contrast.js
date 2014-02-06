function contrast($id) {
	if ($id == "high-contrast") {
		$("head").append("<link rel='stylesheet' href='css/high-contrast.css' title='High Contrast Style'>")
	} else {
		$('link[title="High Contrast Style"]').remove();
	}
}
