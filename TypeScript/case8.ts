//Define a type Profile
type profile = {
    username: string;
    bio: string | null;
    avatarUrl?: string;
}

let userProfile: profile = {
    username: "arjunshaw",
    bio: null
};

let userProfile2: profile = {
    username: "arjunshaw",
    bio: "Software Developer",
    avatarUrl: "http://example.com/avatar.jpg"
};

function showProfile(profile: profile): void {
    let avatar = profile.avatarUrl ? profile.avatarUrl : "No Avatar";
    let bio = profile.bio !== null ? profile.bio : "No Bio";
    console.log(`Username: ${profile.username}, Bio: ${bio}, Avatar: ${avatar}`);
}

showProfile(userProfile);
showProfile(userProfile2);