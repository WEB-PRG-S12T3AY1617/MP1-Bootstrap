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
		createPostDiv();
	}

	//creates postDivs inside the profileDiv of each user
	var createPostDiv =  function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
			success: function(posts) {
				$.each(posts, function(i,posts) {
					$("#profile-" + posts.userId).append("<div id = \"postDiv-" + posts.id + "\" class = \"classPostDiv\" posts-userID = \"" + posts.userId + "\"	><div class = \"posterDiv\"> Posted by: </div><div class = \"titleDiv\">Title: "+ posts.title +"</div><div class = \"bodyDiv\">Body: "+ posts.body +"</div></div>");
				//  $(".classPostDiv").hide();
				});
			},
			error: function() {
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});
		createAlbumDiv();
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
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});
		createPhotoDiv();
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
		createHomeDiv();
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
		displayProfileInfo();
	}

	var displayProfileInfo = function() {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i,users) {
					$("#profile-" + users.id).append("<div id = \"profileInfo-" + users.id + "\"></div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileName\">Name: " + users.name + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileUsername\">Username: " + users.username + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileEmail\">Email: " + users.email + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileAddress\">Address:</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileAddressStreet\">Street:" + users.address.street + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileAddressSuite\">Suite:" + users.address.suite + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileAddressCity\">City:" + users.address.city + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileAddressZip\">Zip Code:" + users.address.zipcode + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profilePhone\">Phone: " + users.phone + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileWebsite\">Website: " + users.website + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileCompany\">Company: </div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileCompanyName\">Name:" + users.company.name + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileCompanyCatch\">Catch Phrase:" + users.company.catchPhrase + "</div>");
					$("#profileInfo-" + users.id).append("<div class = \"profileCompanyBS\">BS:" + users.company.bs + "</div>");
					$("#profileInfo-" + users.id).hide();
				});
			},
			error: function() {
				console.log("Oops something went wrong! Please refresh your browser");
			}
		});
		displayPhotoAlbum();
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
		displayPhotos();
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
		hideAlbums();
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
