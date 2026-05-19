# Trackk — public website

This directory contains the source for `https://trackk2save.com`. It's a
single-page marketing site plus the legal docs (Privacy / Terms /
Account-deletion landing). Hosted on GitHub Pages with Jekyll.

## Files

```
index.html         landing page
style.css          shared styles
_config.yml        Jekyll config (minimal)
_layouts/doc.html  layout for long-form pages
privacy.md         → /privacy/
terms.md           → /terms/
delete-account.md  → /delete-account/
CNAME              domain mapping for GitHub Pages
```

## Updating the legal docs

The canonical source for the legal text lives in the main app repo at
`legal/PRIVACY_POLICY.md` and `legal/TERMS_AND_CONDITIONS.md`. When
those change, regenerate the two web files:

```bash
# from the main app repo:
{ echo -e "---\nlayout: doc\ntitle: Privacy Policy\npermalink: /privacy/\n---\n"; cat legal/PRIVACY_POLICY.md; } > /path/to/trackk-web/privacy.md
{ echo -e "---\nlayout: doc\ntitle: Terms of Service\npermalink: /terms/\n---\n"; cat legal/TERMS_AND_CONDITIONS.md; } > /path/to/trackk-web/terms.md
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
