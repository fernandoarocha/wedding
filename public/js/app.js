/**
 * Created by fernandorocha on 10/16/16.
 */

// create the module and name it scotchApp
    var app = angular.module('weedingApp', []);


    app.controller('mainController', mainController);

    mainController.$inject = ['$scope', '$rootScope'];

    function mainController($scope, $rootScope) {
        /* ==========================================================================
         Firebase methods
         ========================================================================== */

        var signInButton = document.getElementById('sign-in-button');
        var signOutButton = document.getElementById('sign-out-button');
        var splashPage = document.getElementById('page-splash');
        var userSplash = document.getElementById('user-logged');
        var sendmessage = document.getElementById('send-message');
        var recentPostsSection = document.getElementById('leavemessage');
        var listeningFirebaseRefs = [];
        $scope.templateData = [];

        // Bind sing in button
        signInButton.addEventListener('click', function () {
            var provider = new firebase.auth.FacebookAuthProvider();
            // [END createprovider]
            // [START addscopes]
            provider.addScope('user_birthday');
            // [END addscopes]
            // [START signin]

            firebase.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;

            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // [START_EXCLUDE]
                if (errorCode === 'auth/account-exists-with-different-credential') {
                    alert('You have already signed up with a different auth provider for that email.');
                    // If you are using multiple auth providers on your app you should handle linking
                    // the user's accounts here.
                } else {
                    console.error(error);
                }
                // [END_EXCLUDE]
            });

        });

        signOutButton.addEventListener('click', function () {
            firebase.auth().signOut();
        });

        sendmessage.addEventListener('click', function () {
            var message = $('#user-message').val();
            newPostForCurrentUser(message);
        });


// Listen for auth state changes
        firebase.auth().onAuthStateChanged(onAuthStateChanged);
        var currentUID;

        function onAuthStateChanged(user) {
            // We ignore token refresh events.
            if (user && currentUID === user.uid) {
                return;
            }

            cleanupUi();
            if (user) {
                currentUID = user.uid;
                splashPage.style.display = 'none';
                userSplash.style.display = '';

                writeUserData(user.uid, user.displayName, user.email, user.photoURL);
                startDatabaseQueries();
            } else {
                // Display the splash page where you can sign-in.
                splashPage.style.display = '';
                userSplash.style.display = 'none';
            }
        }

        function newPostForCurrentUser(text) {
            // [START single_value_read]
            var userId = firebase.auth().currentUser.uid;
            return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
                var username = snapshot.val().username;
                // [START_EXCLUDE]
                return writeNewPost(firebase.auth().currentUser.uid, username,
                    firebase.auth().currentUser.photoURL, text);
                // [END_EXCLUDE]
            });
            // [END single_value_read]
        }

        function writeNewPost(uid, username, picture, body) {
            // A post entry.
            var postData = {
                author: username,
                uid: uid,
                body: body,
                starCount: 0,
                authorPic: picture
            };

            // Get a key for a new Post.
            var newPostKey = firebase.database().ref().child('posts').push().key;

            // Write the new post's data simultaneously in the posts list and the user's post list.
            var updates = {};
            updates['/posts/' + newPostKey] = postData;
            updates['/user-posts/' + uid + '/' + newPostKey] = postData;

            return firebase.database().ref().update(updates);
        }

        /**
         * Writes the user's data to the database.
         */
// [START basic_write]
        function writeUserData(userId, name, email, imageUrl) {
            firebase.database().ref('users/' + userId).set({
                username: name,
                email: email,
                profile_picture: imageUrl
            });
            $('#user-img').attr('src', imageUrl);
            $('#user-name').text(name);

        }

// [END basic_write]

        /**
         * Starts listening for new posts and populates posts lists.
         */
        function startDatabaseQueries() {
            var myUserId = firebase.auth().currentUser.uid;
            var recentPostsRef = firebase.database().ref('posts').limitToLast(10);

            var fetchPosts = function (postsRef, sectionElement) {
                postsRef.on('child_added', function (data) {
                    var author = data.val().author || 'Anonymous';
                    $scope.templateData.push({body: data.val().body, text: author, authorPic: data.val().authorPic});
                    console.log($scope.templateData);
                });
            };
            fetchPosts(recentPostsRef, recentPostsSection);
            listeningFirebaseRefs.push(recentPostsRef);
        }


        function createPostElement(postId, body, text, author, authorPic) {
            var uid = firebase.auth().currentUser.uid;
            var slider = document.getElementsByClassName('slider-message')[0];
            $(slider).append(html);
            var postElement = slider.firstChild;
            var message = postElement.getElementsByClassName('slide-text')[0].innerText = body;
            var person = postElement.getElementsByClassName('title')[0].innerText = text;
            var picture = postElement.getElementsByClassName('image-message')[0].src = authorPic;

            return postElement;
        }


        /**
         * Cleanups the UI and removes all Firebase listeners.
         */
        function cleanupUi() {

        }
}





