import firebase from "firebase";
import React, { Component } from "react";

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;
