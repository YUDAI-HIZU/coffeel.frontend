<template>
  <v-row justify="center">
    <v-col>
      <v-card
        max-width="400"
        ref="form"
        style="margin: 50px auto; background: #f6f8fa; padding: 20px;"
        outlined
      >
        <p style="text-align: center;">
          <v-icon style="font-size: 50px;">
            mdi-lock-open
          </v-icon>
        </p>
        <h2 style="font-weight: bold; text-align: center; padding: 10px 0 20px; border-bottom: solid 1px #ccc">
          パスワードの再設定
        </h2>
        <v-card-text style="font-size: 13px;">
          登録されたメールアドレスをご入力してください。パスワード再設定用のURLをメールにて送信します。
        </v-card-text>
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
        </v-card-text>
        <div style="margin: 0 auto 20px; max-width: 325px;">
          <v-btn class="background-color-secondary" depressed large style="font-weight: bold; width: 100%;">送信</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>