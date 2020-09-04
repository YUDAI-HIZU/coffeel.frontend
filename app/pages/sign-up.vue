<template>
  <v-row justify="center" no-gutters>
    <v-col>
      <v-card
        max-width="400"
        class="form-card"
        ref="form"
        outlined
      >
        <ValidationObserver ref="observer" v-slot="{ invalid }">
          <form>
            <h2 class="card-title">
              新規登録
            </h2>
            <v-card-text>
              <label class="form-label" for="name">ユーザー名</label>
              <ValidationProvider v-slot="{ errors }" name="ユーザー名" rules="required|max:10">
                <v-text-field
                  dense
                  ref="name"
                  v-model="name"
                  :error-messages="errors"
                  outlined
                  required
                ></v-text-field>
              </ValidationProvider>
              <label class="form-label" for="email">メールアドレス</label>
              <ValidationProvider v-slot="{ errors }" name="メールアドレス" rules="required|email">
                <v-text-field
                  dense
                  ref="email"
                  v-model="email"
                  :error-messages="errors"
                  outlined
                  required
                  type="email"
                ></v-text-field>
              </ValidationProvider>
              <label class="form-label" for="password">パスワード</label>
              <ValidationProvider v-slot="{ errors }" name="パスワード" rules="required">
                <v-text-field
                  color="white"
                  dense
                  ref="password"
                  v-model="password"
                  :error-messages="errors"
                  outlined
                  required
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </ValidationProvider>
              <label class="form-label" for="passwordConfirm">パスワード確認</label>
              <ValidationProvider v-slot="{ errors }" name="パスワード確認" rules="required|confirmed:パスワード">
                <v-text-field
                  color="white"
                  dense
                  v-model="passwordConfirm"
                  :error-messages="errors"
                  outlined
                  required
                  :type="showPasswordConfirm ? 'text' : 'password'"
                  :append-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPasswordConfirm = !showPasswordConfirm"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" rules="required" name="チェックボックス">
                <v-checkbox
                  color="deep-purple"
                  v-model="agreement"
                  :error-messages="errors"
                  value="1"
                  type="checkbox"
                >
                  <template class="text-box" v-slot:label>
                    <nuxt-link class="small-text color-accent" to="#">利用規約</nuxt-link>
                    <span class="small-text">と</span>
                    <nuxt-link class="small-text color-accent" to="#">プライバシーポリシー</nuxt-link>
                    <span class="small-text">に同意する</span>
                  </template>
                </v-checkbox>
              </ValidationProvider>
            </v-card-text>
            <div style="margin: 0 auto 20px; max-width: 325px;">
              <v-btn @click="signup" :disabled="invalid" class="background-color-secondary" depressed large style="font-weight: bold; width: 100%;">新規登録</v-btn>
            </div>
          </form>
        </ValidationObserver>
        <v-divider class="mt-12"></v-divider>
        <div style="margin: 20px auto 20px; max-width: 325px;">
          <v-btn depressed @click="twitter" large style="font-weight: bold; width: 100%; text-transform: none; background: #55acee; color: white;">
            <v-icon right dark style="position: absolute; left: 0;">mdi-twitter</v-icon>
            Twitter
          </v-btn>
        </div>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn depressed @click="facebook" large style="font-weight: bold; width: 100%; text-transform: none; background: #3b5998; color: white;">
            <v-icon right dark style="position: absolute; left: 0;">mdi-facebook</v-icon>
            Facebook
          </v-btn>
        </div>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn depressed @click="google" large style="font-weight: bold; width: 100%; text-transform: none; background: white; border: solid 1px black; position: relative;">
            <img src="~assets/images/g-logo.png" alt="" style="height: 20px; width: 20px; position: absolute; left: 5px;">
            Sign up with Google
          </v-btn>
        </div>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn depressed large to="/sign-in" style="font-weight: bold; width: 100%; text-transform: none; color: #17a9da; background: #f6f8fa;">
            既にアカウントをお持ちの方はこちら
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  data() {
    return {
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
      showPassword: false,
      showPasswordConfirm: false,
      agreement: null,
      errorMessages: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
    };
  },
  methods: {
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log(res.user)
        })
        .catch(error => {
          console.error(error)
        })
    },
    google() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(function(res) {
          console.log(res.user)
        }).catch(error => {
          console.error(error)
        })
    },
    twitter() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(function(res) {
          console.log(res.user)
        }).catch(error => {
          console.error(error)
        })
    },
    facebook() {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(function(res) {
          console.log(res.user)
        }).catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
  .form-card {
    margin: 50px auto;
    background: #f6f8fa;
    padding: 20px;
  }
  .card-title {
    font-weight: bold;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: solid 1px #ccc;
  }
  .form-label {
    margin-bottom: 5px;
    font-size: 12px;
  }
  .small-text {
    font-size: 12px;
  }
  .small-text:first-child {
    margin-left: 15px;
  }
</style>