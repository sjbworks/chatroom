<template>
  <div id="app">
    <header class="header">
      <div class="header__inner">
        <template v-if="sighnIn && userName && userPic">
          <div class="header__user-image"><img :src="userPic" /></div>
          <p class="header__user-name">{{ userName }}</p>
        </template>
        <button class="header__auth-button" @click="authFunction">
          {{ authButtonText }}
        </button>
      </div>
    </header>

    <router-view :sighnIn="sighnIn" :userName="userName" :userPic="userPic">
    </router-view>
  </div>
</template>

<script>
// import firebase from 'firebase';
import { firebase } from '@/plugins/firebase';
export default {
  name: 'App',
  data() {
    return {
      userName: null,
      userPic: null,
      sighnIn: null,
      authButtonText: null,
      authFunction: function() {},
    };
  },
  created() {
    this.onAuthStateChanged();
  },
  methods: {
    onAuthStateChanged() {
      firebase.auth().onAuthStateChanged(user => {
        this.userName = user ? this.getUserName() : null;
        this.userPic = user ? this.getProfilePicUrl() : null;
        this.authButtonText = user ? 'Sign-out' : 'Sign-in with Google';
        this.authFunction = user ? this.signOut : this.signIn;
        this.sighnIn = user ? true : false;
      });
    },
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    signOut() {
      firebase.auth().signOut();
    },
    getProfilePicUrl() {
      return (
        firebase.auth().currentUser.photoURL ||
        '/static/images/profile_placeholder.png'
      );
    },
    getUserName() {
      return firebase.auth().currentUser.displayName;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
