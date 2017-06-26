$(document).ready(function() {

	//creates profile Divs per user
	$(document).on("load", "#mainDiv", function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i, users) {
					$("#mainDiv").append("<div id = \"profile-" + users.id + "\"></div>");
				});
			}
		});
	});

	//creates postDivs inside the profileDiv of each user
	$(document).on("load", "#mainDiv", function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
			success: function(posts) {
				$.each(posts, function(i,posts) {
					$("#profile-" + posts.userId).append("<div id = \"postDiv-" + posts.userId + "\"></div>");
				});
			}
		});
	});

	//creates albumDivs inside the profileDiv of each user
	$(document).on("load", "#mainDiv", function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/albums',
			success: function(albums) {
				$.each(albums, function(i,albums) {
					$("#profile-" + albums.userId).append("<div id = \"albumDiv-" + albums.id + "\"></div>");
				});
			}
		});
	});

	//creates photoDiv inside the albumDiv
	$(document).on("load", "#mainDiv", function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/photos',
			success: function(photos) {
				$.each(photos, function(i,photos) {
					$("#albumDiv-" + photos.albumId).append("<div id = \"photoDiv-" + photos.id + "\"></div>");
				});
			}
		});
	});

});