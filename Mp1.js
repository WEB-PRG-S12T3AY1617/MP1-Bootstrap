
	//creates profile Divs per user
	var createProfileDiv =  function() {
		console.log("hello");
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i, users) {
					$("#mainDiv").append("<div id = \"profile-" + users.id + "\" class = \"classProfileDiv\"></div>");
				});
			},
			error: function() {
				alert("Oops something went wrong! Please refresh your browser");
			}
		});
		createPostDiv();
		createAlbumDiv();
	}

	//creates postDivs inside the profileDiv of each user
	var createPostDiv =  function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
			success: function(posts) {
				$.each(posts, function(i,posts) {
					console.log("hello world");
					$("#profile-" + posts.userId).append("<div id = \"postDiv-" + posts.userId + "\" class = \"classPostDiv\"></div>");
				});
			},
			error: function() {
				alert("Oops something went wrong! Please refresh your browser");
			}
		});
	}

	//creates albumDivs inside the profileDiv of each user
	var createAlbumDiv = function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/albums',
			success: function(albums) {
				$.each(albums, function(i,albums) {
					$("#profile-" + albums.userId).append("<div id = \"albumDiv-" + albums.id + "\" class = \"classAlbumDiv\"></div>");
				});
			},
			error: function() {
				alert("Oops something went wrong! Please refresh your browser");
			}
		});
		createPhotoDiv();
	}

	//creates photoDiv inside the albumDiv
	var createPhotoDiv = function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/photos',
			success: function(photos) {
				$.each(photos, function(i,photos) {
					$("#albumDiv-" + photos.albumId).append("<div id = \"photoDiv-" + photos.id + "\" class = \"classPhotoDiv\"></div>");
				});
			},
			error: function() {
				alert("Oops something went wrong! Please refresh your browser");
			}
		});
	}