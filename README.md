# Trackk — public website

This directory contains the source for `https://trackk2save.com`. It's a
single-page marketing site plus the legal docs (Privacy / Terms /
Account-deletion landing). Hosted on GitHub Pages with Jekyll.

## Files

```
index.html              landing page
404.html                catch-all: serves /join/<code> group-invite links (see below)
get/index.html          trackk2save.com/get?src=<place>: one QR for everyone (see below)
get/icon.png            the app icon (also the home page's icon and favicon)
stores.js               store links for every page, and the iosLive switch (see below)
style.css               shared styles
_config.yml             Jekyll config — note the `include: .well-known` line
_layouts/doc.html       layout for long-form pages
privacy.md              → /privacy/
terms.md                → /terms/
delete-account.md       → /delete-account/
CNAME                   domain mapping for GitHub Pages
.well-known/assetlinks.json   Android App Links Digital Asset Links file
.well-known/apple-app-site-association   iPhone universal links (same /join links),
                        for Team ID LBZ286N6Z7 + bundle com.trackk.app
```

## Group-invite links (`/join/<code>`) and Android App Links

Invite links look like `https://trackk2save.com/join/<code>`. Two pieces
make them work:

- **`.well-known/assetlinks.json`** declares which Android app (package +
  signing-cert SHA-256 fingerprints) may handle these links. When the app is
  installed and Android has verified this file, tapping the link opens the app
  straight into the group — the website is never shown. It lists **both** the
  Play App Signing key and the upload key so verification holds for Play
  installs and direct-installed test builds alike.
  - ⚠️ Jekyll skips dot-folders by default, so `_config.yml` has an explicit
    `include: - .well-known`. Without it the file 404s and verification fails.
    Confirm it's live: `curl -s https://trackk2save.com/.well-known/assetlinks.json`.
- **`404.html`** is the browser fallback for users *without* the app. GitHub
  Pages has no rewrite rules, so `/join/<code>` matches no file and Pages
  serves `404.html` (its JS reads the code from the path and forwards to the
  Play Store with `referrer=join_<code>` for deferred deep-linking). On an
  iPhone it offers the App Store instead and says to tap the invite again
  after installing (the App Store carries no join code), or says the iPhone
  app is coming while `iosLive` is false. It shows a normal "not found"
  message for any non-`/join/` path.

## One link for printed QR codes (`/get`)

`https://trackk2save.com/get?src=<place>` sends an iPhone to the App Store
and an Android phone to Google Play; a laptop sees both buttons. `src`
names where the code was scanned (`card`, `table`, `church-st`…) and goes
with them to the store: Google Play gets it as the install referrer
(`utm_source=<src>`, shown in Play Console's acquisition reports), the App
Store as a campaign (`ct=<src>`, App Store Connect → App Analytics).

## The iPhone switch (`stores.js`)

The home page, `/get` and the `/join` fallback all read `stores.js`:

- `iosLive`: `false` until the App Store shows Trackk. While false, iPhones
  are told the app is coming (never sent to Google Play or to an empty App
  Store page) and the home page's App Store button reads "iPhone: coming
  soon". Set it to `true` the day Apple releases the app; that one line
  switches every page.
- `appStoreId`: App Store Connect → the app → App Information → Apple ID.
- `appStorePt`: the provider token, the `pt=` value when App Store Connect
  generates a campaign link. Optional: without it the store link works, only
  the per-place report on `/get` is missing.

## Updating the legal docs

The canonical source for the legal text lives in the main app repo at
`legal/PRIVACY_POLICY.md` and `legal/TERMS_AND_CONDITIONS.md`. When
those change, regenerate the two web files.

The `legal/` copies cross-link each other with relative `.md` paths
(`./TERMS_AND_CONDITIONS.md`) so they're clickable when browsing the
repo. On the published site those paths 404 — the pages live at the
`/privacy/` and `/terms/` permalinks — so the regen below rewrites those
links with `sed`. Do **not** drop the `sed` step or the cross-links break.

```bash
# from the main app repo:
{ echo -e "---\nlayout: doc\ntitle: Privacy Policy\npermalink: /privacy/\n---\n"; sed 's#](\./TERMS_AND_CONDITIONS\.md)#](/terms/)#g' legal/PRIVACY_POLICY.md; } > /path/to/trackk-web/privacy.md
{ echo -e "---\nlayout: doc\ntitle: Terms of Service\npermalink: /terms/\n---\n"; sed 's#](\./PRIVACY_POLICY\.md)#](/privacy/)#g' legal/TERMS_AND_CONDITIONS.md; } > /path/to/trackk-web/terms.md
```

Bump the `Last updated` date in the markdown front-matter, commit, and
push. GitHub Pages will rebuild within ~1 minute.

## Deploying

1. Create a new public GitHub repo, e.g. `trackk-web`.
2. Copy every file in this directory into the repo root.
3. Push to `main`.
4. In the repo settings → **Pages** → set **Source** to `Deploy from a
   branch`, branch `main`, folder `/`.
5. Wait for the first build (≈ 30 s) — at this point the site is live
   at `https://<username>.github.io/trackk-web/`.
6. At your domain registrar, add DNS records (see DNS section below).
7. Back in repo settings → Pages → Custom domain → enter
   `trackk2save.com` and click **Save**. Tick **Enforce HTTPS** once
   GitHub finishes issuing the cert.

## DNS

If your registrar supports CNAME on the apex, set:

```
CNAME  @  <username>.github.io
```

If it doesn't (most don't), use these four A records (current GitHub
Pages IPs):

```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

Plus a CNAME for `www`:

```
CNAME  www  <username>.github.io
```

Propagation usually takes 10 minutes to an hour.
