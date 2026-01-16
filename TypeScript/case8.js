var userProfile = {
    username: "arjunshaw",
    bio: null
};
var userProfile2 = {
    username: "arjunshaw",
    bio: "Software Developer",
    avatarUrl: "http://example.com/avatar.jpg"
};
function showProfile(profile) {
    var avatar = profile.avatarUrl ? profile.avatarUrl : "No Avatar";
    var bio = profile.bio !== null ? profile.bio : "No Bio";
    console.log("Username: ".concat(profile.username, ", Bio: ").concat(bio, ", Avatar: ").concat(avatar));
}
showProfile(userProfile);
showProfile(userProfile2);
