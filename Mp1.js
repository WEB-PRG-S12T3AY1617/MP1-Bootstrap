	var runCreateProfile;
	var runCreatePost;
	var runCreateAlbum;
	var runCreatePhoto;
	var runCreateHome;
	var runDisplayProfile;
	var runDisplayAlbum;
	var runDisplayPhotos;
	var runHideAlbum;
	//creates profile Divs per user
	var poster, temp = -1;
	var createProfileDiv =  function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i, users) {
					$("#mainDiv").append("<div id = \"profile-" + users.id + "\" class = \"classProfileDiv\" profile-userID = \"" + users.id + "\"></div>");
				});
			},
			error: function() {
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});
	}

	//creates postDivs inside the profileDiv of each user
	var createPostDiv =  function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
			success: function(posts) {
				$.each(posts, function(i,posts) {
					$("#profile-" + posts.userId).append("<div id = \"postDiv-" + posts.id + "\" class = \"classPostDiv\" posts-userID = \"" + posts.userId + "\"	><div class = \"posterDiv\"></div><div class = \"titleDiv\"><br>Title: "+ posts.title +"</div><div class = \"bodyDiv\"> "+ posts.body +"</div></div>");

				});
			},
			error: function() {
				console.log("Oops something went wrong! Please refresh your browser");
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
				console.log("Oops something went wrong! Please refresh your browser.");
			}
		});
	}

	//creates photoDiv inside the al	bumDiv
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
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});
	}


	var createHomeDiv =  function() {
		/*
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
			success: function(posts) {
				$.each(posts, function(i,post) {
					$("div[posts-userID='" + post.userId +"']").append("<div class = \"posterDiv\"> Posted by: </div><div class = \"titleDiv\">Title: "+ post.title +"</div><div class = \"bodyDiv\">Body: "+ post.body +"</div>");
				});
			},
			error: function() {
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});*/
	}

	var displayProfileInfo = function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i,users) {
					$("#profile-" + users.id).append("<div id = \"profileInfo-" + users.id + "\"class=\"classProfileInfoDiv\"></div>");
					console.log(users.id);					
					$("#profileInfo-" + users.id).prepend("<img class = \"icon\" width = 300 height = 300 src = \"images/icon.png\" />");
					$("#profileInfo-" + users.id).append("<div class = \"profile\"><br>Name: " + users.name + "</div>");					
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Username: " + users.username + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Email: " + users.email + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Street:" + users.address.street + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Suite:" + users.address.suite + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">City:" + users.address.city + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Zip Code:" + users.address.zipcode + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Phone: " + users.phone + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Website: " + users.website + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Company Name:" + users.company.name + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Company Catch Phrase:" + users.company.catchPhrase + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profile\">Company BS:" + users.company.bs + "</div>");
					$("#profileInfo-" + users.id).hide();
					var x = users.name;
					var parent =  $("#profileInfo-" + users.id).parent();
					$(parent).find(" .classPostDiv .posterDiv:empty").text(users.name);
				});				
			},
			error: function() {
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});
	}

	var displayPhotoAlbum = function() {

		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/albums',
			success: function(albums) {
				$.each(albums, function(i,albums) {
					$("#albumDiv-" + albums.id).prepend("<div class = \"albumTitle\">" + albums.title + "</div>");
				});
			},
			error: function() {
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});
	}

	var displayPhotos = function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/photos',
			success: function(photos) {
				$.each(photos, function(i,photos) {
					$("#photoDiv-" + photos.id).append("<img src = \"" + photos.url + "\"></img>");
				});
			},
			error: function() {
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});
	}

	var hideAlbums = function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/albums',
			success: function(albums) {
				$.each(albums, function(i,albums) {
					$("#albumDiv-" + albums.id).hide();
				});
			},
			error: function() {
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});
	}

	runCreateProfile = new Promise(function(resolve,eject) {
		resolve(createProfileDiv());
	});

	runCreatePost = new Promise(function(resolve,eject) {
		resolve(createPostDiv());
	});

	runCreateAlbum = new Promise(function(resolve,eject) {
		resolve(createAlbumDiv());
	});

	runCreatePhoto = new Promise(function(resolve,eject) {
		resolve(createPhotoDiv());
	});

	runCreateHome = new Promise(function(resolve,eject) {
		resolve(createHomeDiv());
	});

	runDisplayProfile = new Promise(function(resolve,eject) {
		resolve(displayProfileInfo());
	});

	runDisplayPhotos = new Promise(function(resolve,eject) {
		resolve(displayPhotoAlbum());
	});

	runHideAlbum = new Promise(function(resolve,eject) {
		resolve(hideAlbums());
	});

	var getData = function() {
		runCreateProfile.then(function(result){
			return runCreatePost;
		}).then(function(result){
			return runCreateAlbum;
		}).then(function(result){
			return runCreatePhoto;
		}).then(function(result){
			return runCreateHome;
		}).then(function(result){
			return runDisplayProfile;
		}).then(function(result){
			return runDisplayAlbum;
		}).then(function(result){
			return runDisplayPhotos;
		}).then(function(result){
			return runHideAlbum;
		});
	}
