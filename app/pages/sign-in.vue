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
              ログイン
            </h2>
            <v-card-text>
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
            </v-card-text>
            <div style="margin: 0 auto 20px; max-width: 325px;">
              <v-btn @click="signIn" :disabled="invalid" class="background-color-secondary" depressed large style="font-weight: bold; width: 100%;">ログイン</v-btn>
            </div>
          </form>
        </ValidationObserver>
        <v-divider class="mt-12"></v-divider>
        <div style="margin: 20px auto 20px; max-width: 325px;">
          <v-btn depressed @click="twitterAuth" large style="font-weight: bold; width: 100%; text-transform: none; background: #55acee; color: white;">
            <v-icon right dark style="position: absolute; left: 0;">mdi-twitter</v-icon>
            Twitter
          </v-btn>
        </div>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn depressed @click="facebookAuth" large style="font-weight: bold; width: 100%; text-transform: none; background: #3b5998; color: white;">
            <v-icon right dark style="position: absolute; left: 0;">mdi-facebook</v-icon>
            Facebook
          </v-btn>
        </div>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn depressed @click="googleAuth" large style="font-weight: bold; width: 100%; text-transform: none; background: white; border: solid 1px black; position: relative;">
            <img src="~assets/images/g-logo.png" alt="" style="height: 20px; width: 20px; position: absolute; left: 5px;">
            Sign in with Google
          </v-btn>
        </div>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn depressed large to="/password-mail" style="font-weight: bold; width: 100%; text-transform: none; color: #17a9da; background: #f6f8fa;">
            パスワードを忘れた方はこちら
          </v-btn>
        </div>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn depressed large to="/sign-up" style="font-weight: bold; width: 100%; text-transform: none; color: #17a9da; background: #f6f8fa;">
            新規登録はこちら
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      agreement: null,
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch('signIn', {
        email: this.email,
        password: this.password,
      })
    },
    googleAuth() {
      this.$store.dispatch('googleAuth')
    },
    twitterAuth() {
      this.$store.dispatch('twitterAuth')
    },
    facebookAuth() {
      this.$store.dispatch('facebookAuth')
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