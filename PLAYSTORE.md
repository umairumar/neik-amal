# Publish Neik-Amal to Google Play

This project uses [Capacitor](https://capacitorjs.com/) to wrap the web app as a native Android app (`com.neikamal.app`).

## Prerequisites

- Node.js 18+
- [Android Studio](https://developer.android.com/studio) (includes Android SDK)
- A [Google Play Console](https://play.google.com/console) developer account ($25 one-time)

## 1. Install and sync

```bash
npm install
npm run cap:sync
```

## 2. Open in Android Studio

```bash
npm run android:open
```

Run on a device or emulator to verify the app works.

## 3. Create a signing key (first time only)

```bash
keytool -genkey -v -keystore neik-amal-upload.keystore -alias neik-amal -keyalg RSA -keysize 2048 -validity 10000
```

Copy `android/keystore.properties.example` to `android/keystore.properties` and set passwords and keystore path. **Never commit** the keystore or `keystore.properties`.

## 4. Build the Play Store bundle (.aab)

```bash
npm run android:bundle
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

Upload this file in Play Console → **Release** → **Production** → **Create new release**.

## 5. Play Console checklist

| Item | Notes |
|------|--------|
| App name | Neik-Amal |
| Short description | Daily pious deeds tracker (56 Madani tasks) |
| Privacy policy URL | Required — host a simple page (even GitHub Pages) |
| Screenshots | Phone: at least 2 (1080×1920 or similar) |
| Feature graphic | 1024×500 |
| App icon | 512×512 (use `resources/icon.png` as base) |
| Content rating | Complete the questionnaire |
| Target audience | Set age group appropriately |
| Data safety | Declare that data is stored **on device only** (localStorage) |

## 6. Updating the app

1. Edit `index.html` (source of truth).
2. Bump `versionCode` and `versionName` in `android/app/build.gradle`.
3. Run `npm run android:bundle` and upload the new `.aab`.

## Replace placeholder icons

Regenerate store-quality icons from your own artwork:

```bash
# Replace resources/icon.png (1024×1024) and resources/splash.png
npm run assets:generate
npm run cap:sync
```

## Fonts offline (optional)

The app loads Google Fonts over the network. For fully offline fonts, bundle Noto Naskh Arabic and Inter as local files in `www/fonts/` and update `index.html` CSS `@font-face` rules.
