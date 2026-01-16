function password(pass) {
    try {
        if (pass.length < 8) {
            throw new Error("password is too week");
        }
        console.log("success" + pass);
    }
    catch (err) {
        console.log("error");
    }
}
password("password123");
