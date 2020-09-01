<template>
  <v-row justify="center">
    <v-col>
      <v-card
        max-width="400"
        ref="form"
        style="margin: 50px auto; background: #f6f8fa; padding: 20px;"
        outlined
      >
        <h2 style="font-weight: bold; text-align: center; padding: 10px 0 20px; border-bottom: solid 1px #ccc">
          ログイン
        </h2>
        <v-card-text>
          <label for="email" style="margin-bottom: 5px; font-size: 12px;">メールアドレス</label>
          <v-text-field
            dense
            ref="email"
            v-model="email"
            :rules="[() => !!email || '入力してください']"
            :error-messages="errorMessages"
            outlined
            required
          ></v-text-field>
          <label for="email" style="margin-bottom: 5px; font-size: 12px;">パスワード</label>
          <v-text-field
            color="white"
            dense
            ref="password"
            v-model="password"
            :rules="[() => !!password || '入力してください']"
            :error-messages="errorMessages"
            outlined
            required
          ></v-text-field>
        </v-card-text>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn class="background-color-secondary" depressed large style="font-weight: bold; width: 100%;">ログイン</v-btn>
        </div>
        <v-divider class="mt-12"></v-divider>
        <div style="margin: 20px auto 20px; max-width: 325px;">
          <v-btn depressed large style="font-weight: bold; width: 100%; text-transform: none; background: #55acee; color: white; position: relative;">
            <v-icon right dark style="position: absolute; left: 0;">mdi-twitter</v-icon>
            Twitter
          </v-btn>
        </div>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn depressed large style="font-weight: bold; width: 100%; text-transform: none; background: #3b5998; color: white; position: relative;">
            <v-icon right dark style="position: absolute; left: 0;">mdi-facebook</v-icon>
            Facebook
          </v-btn>
        </div>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn depressed large style="font-weight: bold; width: 100%; text-transform: none; background: white; border: solid 1px black; position: relative;">
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