---
layout: doc
title: Privacy Policy
permalink: /privacy/
---

# Trackk — Privacy Policy

**Effective date:** TBD — set on Play Store launch
**Last updated:** 28 May 2026

This Privacy Policy explains what personal data **Trackk Technologies, a sole proprietorship of Ms. Vandana S**
("**we**", "**our**", "**us**") collects about you when you use the
Trackk mobile application or related services (the "**Service**"), how
we use it, with whom we share it, how we protect it, and the choices
and rights you have.

This Policy forms part of, and should be read together with, our
[Terms of Service](/terms/). By using the Service you
acknowledge the practices described here.

---

## Contents

1. [A One-Page Summary](#1-a-one-page-summary)
2. [Information We Collect](#2-information-we-collect)
3. [How We Use Your Information](#3-how-we-use-your-information)
4. [Legal Bases for Processing](#4-legal-bases-for-processing)
5. [How We Share Your Information](#5-how-we-share-your-information)
6. [Where Your Data Is Stored](#6-where-your-data-is-stored)
7. [How Long We Keep Your Data](#7-how-long-we-keep-your-data)
8. [How We Protect Your Data](#8-how-we-protect-your-data)
9. [Your Rights and Choices](#9-your-rights-and-choices)
10. [Children](#10-children)
11. [Cookies and Similar Technologies](#11-cookies-and-similar-technologies)
12. [India-Specific Disclosures (DPDPA, 2023)](#12-india-specific-disclosures-dpdpa-2023)
13. [Region-Specific Rights](#13-region-specific-rights)
14. [Permissions Disclosure (Play Store / App Store)](#14-permissions-disclosure-play-store--app-store)
14A. [Apple-Specific Disclosures (iOS, when available)](#14a-apple-specific-disclosures-ios-when-available)
15. [Changes to This Policy](#15-changes-to-this-policy)
16. [Contact Us](#16-contact-us)

---

## 1. A One-Page Summary

We've also written this out in plain English at the top so you don't
have to dig:

- **You own your data.** Transactions, groups, goals, notes, and tags
  belong to you. You can export everything as JSON at any time.
- **SMS stays on your device.** When you enable SMS detection (Android
  only), parsing happens locally. We do **not** upload your raw SMS,
  OTPs, or unrelated messages to our servers. Only the parsed
  transaction fields (amount, merchant, timestamp) are saved to your
  own private cloud space, accessible only to you.
- **We don't sell your data. Ever.** Not to advertisers, not to data
  brokers, not to any third party.
- **We don't have access to your bank.** We never ask for and never
  store your banking credentials, OTP codes, card numbers, or CVVs.
- **You can delete everything.** Profile → Delete Account permanently
  removes your data from our active systems.

The rest of this document is the formal version.

---

## 2. Information We Collect

### 2.1 Information you provide

- **Account information** — name, profile photo (if any), email
  address, phone number, age (optional), UPI ID / VPA (optional — only
  if you add one in Profile to receive group settlements), and password
  (only when you choose email/password sign-in — stored hashed by
  Firebase Authentication, never visible to us in clear text). The exact
  fields collected depend on which sign-in method you choose:
  Google Sign-In, Sign in with Apple (when iOS launches),
  email + password, or phone number with OTP.
- **Profile preferences** — display name, preferred currency, language,
  theme, default tracker, notification preferences.
- **Personal financial records** stored against your account:
  - **Transactions** — amount, merchant, description, category,
    tags, notes, timestamp, payment-mode hints (UPI / Card /
    Cash), receipt image URI you choose to attach.
  - **Goals** — target amounts, target dates, savings progress,
    streak counters, custom finance items (salary, monthly
    expenses, EMIs, maintenance, planned monthly savings).
  - **Budgets** — overall and per-category monthly budgets, alert
    thresholds.
  - **Subscriptions** — recurring services you track, their
    amount, billing cycle, next-due date.
  - **Investments** — instrument name, type, invested amount,
    current value, notes.
  - **EMIs** — loan name, principal, monthly amount, tenure,
    interest rate, notes.
  - **Reimbursement trips** — trip name, dates, associated
    transactions, attached receipt image URIs.
- **Group data** — group name, group photo (if you upload one),
  member list (display name + phone / email, plus UPI ID where a
  member has added one, of each invited member), group expenses,
  splits, settlements, comments. If you
  import a member via **"Add from contacts"** (Android, see §2.2),
  the name, phone number, and contact photo of the entries you
  select are saved against that group.
- **Referral data** — when you sign up via someone else's referral
  link, your account is linked to the referrer's ID so the referrer
  can be credited with the reward. When you share your own link,
  we record which accounts signed up via it (their UID, sign-up
  date) for the same purpose.
- **Support correspondence** — messages, screenshots, and any
  attachments you send to us. When you submit feedback in-app, we
  automatically attach your platform (iOS / Android), OS version,
  app version, and device locale to help us debug.

### 2.2 Information generated by your device, with your permission

- **SMS content (Android only, optional).** When you grant the
  `READ_SMS` permission, the app scans messages from a curated list of
  bank, card, UPI, lender, broker, and mutual-fund-registrar senders to
  detect debit/credit events. **Parsing is performed locally on your
  device.** Only the structured output (amount, merchant string,
  timestamp, payment-mode hint, sender identifier) is stored. We do not
  read OTPs, personal conversations, marketing messages, or any non-
  transactional content, and we do not transmit raw SMS bodies to our
  servers. We deliberately discard one-time passwords if encountered.
- **Contacts (Android only, optional).** If you grant the
  `READ_CONTACTS` permission and tap the "Add from contacts" button
  when creating or editing a group, the app reads your contact list so
  that you can select members to invite. **Only the contacts you
  actively select** (display name and phone number, and optionally
  email if you have it stored) are saved against that group. We do
  not bulk-upload your address book, we do not store contacts you
  have not chosen, and we do not transmit contact data anywhere
  except as part of the group record you create. You can revoke this
  permission at any time in device settings; the app continues to
  function and you can still add members by typing their phone /
  email manually.
- **Email mailbox access (planned, all platforms — not active in the
  current Android release).** A future version of the Service will
  offer an **optional** "Connect Email" feature in Profile that, with
  your explicit OAuth consent, scans transactional emails from a
  curated list of bank, card, UPI, and aggregator senders in your
  Gmail, Outlook, or Yahoo Mail inbox. When this feature ships, we
  will: request the **minimum scope necessary** (read-only access to
  message metadata and bodies from the allowed-sender list);
  process emails server-side via Trackk-operated Google Cloud
  Functions in the `asia-south1` region; store only the parsed
  structured fields (amount, merchant, timestamp, sender) in your
  private cloud space; never store or transmit OTPs, marketing
  email, or any non-transactional content; and let you disconnect
  any mailbox at any time, which immediately revokes the OAuth
  refresh token and deletes stored mailbox metadata. **This Privacy
  Policy and the in-app consent screen will be updated before the
  feature is enabled.** Until then, no email content is accessed,
  even if related code is present in the app binary.
- **iOS Shortcuts deep-link source (planned, iOS only — not active
  in the current release).** When iOS support launches, you may
  optionally configure Apple Shortcuts automations that hand
  transaction data (amount, merchant, timestamp) to Trackk via the
  `trackk://transaction?...` URL scheme. **Trackk does not read SMS,
  Apple Pay, Wallet, or banking data directly on iOS** — it only
  receives the data your Shortcut chooses to send. The Shortcut runs
  entirely on your device, under your control, and you can delete it
  at any time from the Shortcuts app.
- **Camera (Android & iOS, optional).** Requested only when you
  tap "Attach receipt" while editing a reimbursement-trip expense
  and choose "Take photo." The captured image is stored as a local
  file URI against the transaction. The image file itself is not
  uploaded to our cloud — only the local URI is stored, so
  receipts stay on the device that captured them.
- **Photo library (Android & iOS, optional).** Requested when you
  tap "Attach receipt" and choose "Choose from gallery," or when
  you tap to set a group photo in Group Settings. We only see the
  single image you select; the rest of your library is not
  scanned or read. Like camera-captured receipts, the image file
  stays on your device — only the local URI is stored.
- **Push notifications (Android & iOS, optional).** Used to surface
  detected transactions, debt-reminder nudges, and budget alerts.
  Notification text is generated on-device for SMS-detected
  transactions, and on-server for email-detected transactions
  (when the planned email feature ships). Debt reminders use a
  low-importance Android channel — no sound, no heads-up — and
  are rate-limited to a maximum of two per day across all groups
  and one per group per week, only between 10am and 8pm in your
  local time zone.
- **Approximate device and app information** — operating system
  version, app version, device model, language, time zone, crash logs,
  and high-level diagnostic events, used to keep the Service running
  and to debug issues.

### 2.3 Information collected automatically

- **Sign-in identifiers** — Firebase Authentication user ID, sign-in
  provider (Google / Apple / email / phone), last sign-in time, and
  IP address recorded by Firebase for authentication and
  abuse-prevention purposes.
- **Phone-OTP verification metadata.** When you sign in with a phone
  number, Firebase Authentication records the phone number, the IP
  address of the verification request, and the success / failure
  outcome — including for failed attempts — for up to **30 days**
  to prevent SMS-OTP abuse and brute-force attacks. This record is
  kept by Google on Firebase's servers and is not visible to us
  beyond the aggregate counters Firebase exposes in our console.
- **Device tokens.** When you allow push notifications, your
  device's Firebase Cloud Messaging (FCM) token is stored at
  `/users/{your-uid}/devices/{token-id}` alongside the platform
  (iOS / Android), the time the token was issued, and a refresh
  timestamp. The token rotates automatically; tokens older than the
  most recent registration on a given device are pruned. The token
  cannot be used to identify your device outside Firebase.
- **Activity counters.** A lifetime "active days" counter is
  incremented at most once per calendar day when you open the app
  while signed in. This is used to surface gentle streak metrics
  in-app and to power the savings-goal carry-forward calculation.
- **Sync metadata** — timestamps on records to enable conflict
  resolution between devices.
- **Activity logs.** Firebase Authentication and Cloud Functions
  retain operational logs (sign-in timestamps, function invocations,
  error traces) for up to 30 days for diagnostic and abuse-prevention
  purposes.

### 2.4 What we **do not** collect

- Bank account numbers, banking passwords, internet-banking
  credentials, full card numbers, CVVs, or PINs. The Service has no
  ability to log in to your bank.
- The body content of SMS messages (except transiently, in-memory, for
  on-device parsing).
- OTPs. If detected, they are discarded.
- Precise device location, your full contact list (beyond the
  specific entries you choose to select via "Add from contacts" — see
  §2.2), photos, microphone, or camera feeds (except a single photo
  you actively choose to attach as a receipt).
- Health, biometric, sexual orientation, political, religious, or other
  special-category data.
- Information from children under 18.

---

## 3. How We Use Your Information

We use the data described above strictly to:

| Purpose | Examples |
| --- | --- |
| Provide core features | Sign-in, syncing your ledger between devices, detecting and showing transactions, computing group balances, generating reports |
| Personalisation | Default currency, language, theme, suggested categories based on your past tagging |
| Service operations & security | Account management, abuse prevention, rate-limiting, fraud detection on sign-in |
| Communications | Operational emails (sign-in alerts, account-deletion confirmations), in-app messages |
| Legal compliance | Responding to lawful requests, meeting tax/audit obligations, enforcing the Terms |
| Product improvement | Aggregated, de-identified analytics (e.g. "X% of users use the goals feature"). We never combine this with personally identifying data for marketing |

We **do not**:

- sell or rent your personal data;
- share it with advertisers, ad networks, or data brokers;
- use it to train third-party AI/ML models;
- use it for credit-scoring, lending, or insurance decisions.

---

## 4. Legal Bases for Processing

### 4.1 Under India's Digital Personal Data Protection Act, 2023

For users in India, we process personal data primarily on the basis of:

- **Consent** — given by clear affirmative action when you tap
  **Continue**, **Sign in with Google**, **Verify OTP**, or any
  equivalent button at sign-in. You may withdraw consent at any
  time via Profile → Delete Account or by emailing
  `support@trackk2save.com`.
- **Certain legitimate uses** (DPDPA § 7) — limited to: (a)
  providing or making available a service that you have specifically
  requested; (b) responding to a security incident affecting our
  systems or your data; (c) compliance with any judgement, decree,
  or order of a court or tribunal in India; (d) compliance with any
  law in force in India; (e) prevention, detection, or investigation
  of fraud relating to the Service.

We do not currently qualify as a **Significant Data Fiduciary**
under DPDPA § 10; if our classification changes, we will publish a
notice in-app and update this Policy.

### 4.2 Under the GDPR / UK GDPR (when applicable)

Where the GDPR or UK GDPR applies, we rely on the following legal bases:

- **Performance of a contract** — to deliver the Service you signed up
  for.
- **Consent** — for optional permissions (SMS, contacts, camera,
  photo library, notifications) and for any non-essential analytics.
  You may withdraw consent at any time.
- **Legitimate interests** — to keep the Service secure, prevent
  fraud, improve features. Where we rely on legitimate interests, we
  have balanced them against your rights.
- **Legal obligation** — when law requires us to retain or disclose
  data.

---

## 5. How We Share Your Information

We share personal data only with:

### 5.1 Service providers (data processors)

- **Google Firebase** — Authentication, Cloud Firestore (cloud sync),
  Cloud Functions, Cloud Messaging (FCM push tokens). Firebase
  processes data on our behalf under Google's
  [Data Processing and Security Terms](https://firebase.google.com/terms/data-processing-terms).
  Default storage region: **asia-south1 (Mumbai)**.
- **Razorpay Software Private Limited** — when you purchase a paid
  subscription on Android, the order is created server-side via our
  Firebase Cloud Function and processed by Razorpay. Razorpay
  receives the transaction amount, currency, your Trackk user ID, and
  the payment instrument details you enter on Razorpay's hosted
  page. **We do not see or store your card / UPI / bank details** —
  they go directly to Razorpay. Razorpay's privacy practices are
  governed by <https://razorpay.com/privacy/>.
- **App stores** — Google Play Billing and Apple In-App Purchase
  handle subscription purchases initiated from within the app on
  their respective platforms, and provide us with the receipt and
  subscription state.
- **Email-provider OAuth APIs (planned, see §2.2)** — once enabled,
  the optional email-scanning feature will rely on Google (Gmail
  API, Cloud Pub/Sub), Microsoft (Graph API for Outlook), and
  Yahoo (Mail API). Each acts as our data processor for the
  mailbox you connect.
- **Exchange-rate provider** — `api.frankfurter.app` is queried for
  currency rates. Only the request itself is sent; no user identifier
  is transmitted.
- **Customer-support providers** — Zoho Mail handles
  `support@trackk2save.com` correspondence when you contact us.

We sign written agreements with all providers that require them to
process your data only on our instructions and to keep it secure.

#### Google API Services User Data Policy (Limited Use)

When the optional email-scanning feature is enabled, Trackk's use
and transfer to any other app of information received from Google
APIs will adhere to the
[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy),
including the **Limited Use requirements**. Specifically:

- We will only use Google user data to provide the user-facing
  transaction-detection feature for which the user has granted
  access.
- We will not transfer this data to others except as necessary to
  provide or improve user-facing features, comply with applicable
  law, or as part of a merger, acquisition, or sale of assets with
  notice to the users.
- We will not use this data to serve advertising, including
  retargeting or interest-based advertising.
- We will not allow humans to read this data unless we have the
  user's affirmative agreement for specific messages, doing so is
  necessary for security purposes (e.g. investigating abuse), to
  comply with applicable law, or for internal operations where the
  data has been aggregated and anonymised.

### 5.1A UPI apps you choose for settlement

When you tap "Settle" on a group debt and pick a UPI app to complete
the payment, Trackk constructs a `upi://pay?...` deep-link containing
the recipient's UPI ID, name, the amount, currency, and a transaction
note (e.g. "Settling Goa Trip group"). This data is handed to the UPI
app you select (Google Pay, PhonePe, Paytm, BHIM, etc.); Trackk does
not see, store, or route the actual payment. The UPI app's own
privacy policy governs what it does with that data thereafter.

### 5.2 Other users you invite

When you add someone to a group, they will see the group's name, the
expenses you've recorded in that group, your contribution and balance
calculations, comments you post, and any display name you've chosen.
If you have added a UPI ID to your profile, it is also shared with the
members of every group you belong to so they can pay you back via their
own UPI app; you can change or remove it at any time in Profile, which
updates it across your groups. Apart from your display name and (if you
set one) your UPI ID, they will not see your other groups, your personal
transactions, your goals, your budget, your contact details (beyond what
you've shared with them outside the app), or your account information.

### 5.3 Legal disclosures

We may disclose personal data:

- to comply with applicable laws, court orders, or government requests;
- to enforce our Terms or investigate suspected violations;
- to protect the rights, property, or safety of us, our users, or the
  public;
- in connection with a corporate transaction (merger, acquisition, or
  asset sale), in which case we will require the recipient to honour
  this Privacy Policy and we will notify you in-app or by email.

### 5.4 What we never do

We **do not sell** personal data, and we **do not share** personal data
with third parties for their own marketing or advertising.

---

## 6. Where Your Data Is Stored

- **On your device** — your transaction ledger, settings, and cached
  data are stored in encrypted application storage (AsyncStorage). On
  Android, this is sandboxed to the Trackk app; on iOS, it lives in the
  app's private Data Container.
- **In the cloud** — when you sign in, personal records are
  automatically synced to your private space in Google Cloud
  Firestore in the **asia-south1 (Mumbai)** region. This enables
  seamless multi-device access and protects against data loss if
  your device is lost or replaced. Group records are stored
  similarly. Access is scoped per user via Firebase Security Rules:
  only you (and, for group
  data, members of that specific group) can read your records.

Data may be processed in any country in which Google Firebase operates
data centres or in which our service providers operate. Where transfers
are made out of the EEA / UK / India, we rely on appropriate safeguards
such as Standard Contractual Clauses or equivalent mechanisms required
by applicable data-protection law.

---

## 7. How Long We Keep Your Data

| Category | Retention |
| --- | --- |
| Account profile | Until you delete your account |
| Transactions, groups, goals (active) | Until you delete the record or your account |
| Group expenses where you participated | Retained on the group document while the group still exists, even after you leave, but your personal identifiers are removed from your splits |
| Backups | Up to 30 days after deletion, then permanently purged |
| Authentication / security logs | Up to 12 months for abuse and fraud prevention |
| Records required by law (tax, accounting, dispute) | For the period required by applicable law |

When you delete your account from **Profile → Delete Account**,
your profile, transactions, goals, budgets, subscriptions,
investments, EMIs, reimbursement trips, FCM device tokens, and
email-connection records are **permanently deleted from active
Firestore collections immediately**. Your Firebase Authentication
record is also deleted. Backup copies are purged within the
rolling-backup rotation above (up to 30 days). Group expenses on
which you participated remain on the group document so the other
members' ledgers stay intact, but your personal identifiers are
removed from your splits.

---

## 8. How We Protect Your Data

We use security measures appropriate to the sensitivity of the data,
including:

- TLS encryption in transit;
- encryption at rest, as provided by Firebase / Google Cloud;
- Firebase Security Rules that enforce per-user and per-group access
  control;
- least-privilege access for our personnel, audited via Google Cloud
  IAM logs;
- principle of on-device processing for SMS content;
- regular dependency updates and review of high-severity advisories.

No system is perfectly secure. If we learn of a personal-data breach
that is likely to result in a risk to your rights, we will notify the
relevant supervisory authority (e.g. the Indian Data Protection Board)
and, where required, you, without undue delay and in accordance with
applicable law.

---

## 9. Your Rights and Choices

Depending on where you live, you may have some or all of the rights
listed below. Trackk extends these rights to all users globally as a
matter of policy, subject to verification of identity.

- **Access** — request a copy of the personal data we hold about you.
  In-app: Profile → **Backup**, which exports a JSON of everything we
  store about you on your device. For cloud data, write to
  support@trackk2save.com.
- **Correction** — fix inaccurate data, either by editing it in-app or
  by writing to us.
- **Deletion** — delete specific records in-app, or delete your entire
  account from Profile → **Delete Account**. You may also email
  support@trackk2save.com to request deletion.
- **Portability** — download your data as JSON (Profile → Backup) and
  port it elsewhere.
- **Restriction / objection** — ask us to limit or stop certain uses of
  your data.
- **Withdraw consent** — revoke optional permissions (SMS, notifications)
  at any time in device settings. The Service will continue to work
  with reduced automation.
- **Lodge a complaint** — with your local data-protection authority.
  - In India: the **Data Protection Board of India** (when constituted
    under the DPDPA, 2023).
  - In the EU/EEA: your local supervisory authority.
  - In the UK: the **Information Commissioner's Office**.

We will respond to verifiable requests within the time required by
applicable law (typically 30 days under the Indian DPDPA and the GDPR).

---

## 10. Children

The Service is intended for users aged **18 and above**. The sign-up
flow rejects any entered age below 18, and our Terms of Service
require all Users to be 18+ as a contractual matter. We do not
knowingly collect personal data from anyone under 18. If you believe
a person under 18 has nonetheless obtained an account, please
contact `support@trackk2save.com` and we will delete the account and
all associated data without delay.

---

## 11. Cookies and Similar Technologies

The mobile app does not use browser cookies. It uses standard local
storage (AsyncStorage / Keychain / Keystore) to remember your sign-in
state, preferences, and cached data. Our website (if any) may use
strictly necessary cookies; details are shown in a banner the first
time you visit.

---

## 12. India-Specific Disclosures (DPDPA, 2023)

For users in India, Trackk Technologies, a sole proprietorship of Ms. Vandana S is the **Data Fiduciary** in
respect of the personal data described in this Policy. Our service
providers (e.g. Google Firebase) act as **Data Processors**.

- **Notice & consent.** This Policy and the in-app consent screen
  satisfy the notice requirements under the DPDPA. You may withdraw
  consent at any time.
- **Grievance Officer.** Complaints regarding the processing of your
  personal data can be addressed to:
  > **Ms. Vandana S**
  > Grievance Officer, Trackk Technologies, a sole proprietorship of Ms. Vandana S
  > 3/336, Sri Sai Nagar, 2nd Street, Hosur, Krishnagiri District, Tamil Nadu – 635126, India
  > Email: support@trackk2save.com

  We will acknowledge your complaint within **48 hours** and
  provide a substantive response within **30 days** of receipt, in
  line with the Consumer Protection Act, 2019 and the (forthcoming)
  DPDPA rules on grievance redressal. If you remain dissatisfied,
  you may escalate to the Data Protection Board of India once
  constituted, or to the relevant consumer forum.
- **Children.** As above, we do not knowingly process data of users
  under 18.
- **Cross-border transfers.** Data may be processed in regions where
  Google Firebase operates, subject to the safeguards in Section 6.

---

## 13. Region-Specific Rights

### EEA / UK (GDPR / UK GDPR)

The Service is distributed via Google Play with a **country
allowlist** scoped to India and selected South/Southeast Asian
and Gulf markets where the SMS-detection feature works against
the user's bank-sender ecosystem (e.g. India, UAE, Saudi
Arabia, Singapore, Malaysia, Sri Lanka, Bangladesh, Nepal,
Bhutan, and the Maldives). The EEA and the United Kingdom are
**not** in the v1.0 distribution allowlist. Accordingly, Trackk
is not offered, marketed, or available for download in the EEA
or the UK as of the effective date of this Policy, and we have
not appointed an Article 27 representative.

If you nonetheless reside in the EEA or UK and have obtained the
app (for example, by side-loading), you may contact us at
`support@trackk2save.com` to exercise any rights you believe you
have under the GDPR or UK GDPR; we extend the substantive rights
in Section 9 globally as a matter of policy. We will publish an
update to this Policy, appoint Article 27 representatives in the
EU and UK, and (where required) declare a Data Protection
Officer **before** we expand distribution to any EEA / UK country.
This is targeted for release v1.1, when email-based transaction
detection becomes the primary auto-detection path and the
Service becomes useful to users whose banks do not send
transactional SMS.

### California (CCPA / CPRA)

We do **not** sell or share personal information for cross-context
behavioural advertising. California residents have the right to know,
delete, correct, and request restriction of sensitive personal
information. To exercise these rights, email support@trackk2save.com with the
subject line "**California Privacy Request**".

---

## 14. Permissions Disclosure (Play Store / App Store)

For transparency, here is the complete list of sensitive permissions
the Service may request, the feature each is used for, and whether the
data leaves your device.

| Permission | Why we ask | Leaves your device? |
| --- | --- | --- |
| `READ_SMS` / `RECEIVE_SMS` (Android, optional) | Detect bank/UPI/card transactions for review | Raw SMS bodies never leave the device. The parsed fields (amount, merchant, timestamp) are synced to your private cloud space when you are signed in |
| `READ_CONTACTS` (Android, optional) | Pick people to add as group members from your contact list | Only the contact entry **you tap to select** is stored against that group; the rest of your address book is never read into our memory or transmitted |
| `POST_NOTIFICATIONS` (Android) / Notifications (iOS) | Show a tappable card for each detected transaction | No |
| `RECEIVE_BOOT_COMPLETED`, `VIBRATE`, `WAKE_LOCK` (Android) | Restart the SMS listener after a reboot and deliver notifications reliably | No |
| `INTERNET` | Authentication, cloud sync, exchange-rate refresh, payment processing | Yes — only for sign-in, sync, exchange-rate refresh, or a payment in flight |
| Document picker | Import a JSON backup, attach a receipt image | No, unless you choose to sync the attachment |
| FCM device token (Firebase Cloud Messaging) | Deliver push notifications to your device | The token is stored in Firestore against your user ID; it cannot be used to identify your device outside Firebase |
| Razorpay SDK (Android, when you purchase a subscription) | Process the payment for a paid plan | Card / UPI / bank details go directly to Razorpay; we never see them |
| `gmail.readonly` or equivalent (planned, optional) | Detect bank emails — only when you connect a mailbox in Profile | The relevant message content is read by our Cloud Functions in `asia-south1`; only parsed amount/merchant/timestamp are persisted |
| iOS Shortcuts deep-link (planned, iOS only, optional) | Receive transaction data your Shortcut chooses to send | The Shortcut runs entirely on your device; only the fields you forward are stored |

We do not request `ACCESS_FINE_LOCATION`, `CAMERA` (other than when you
tap "Attach receipt"), `RECORD_AUDIO`, `READ_CALL_LOG`,
`READ_PHONE_STATE` (beyond the auto-fill of phone OTP), or any of the
other high-risk permissions.

---

## 14A. Apple-Specific Disclosures (iOS, when available)

The current release of Trackk targets Android. The following
disclosures will apply once the iOS version is published on the
Apple App Store:

- **Sign in with Apple.** Where we offer Google Sign-In, we will
  also offer Sign in with Apple on iOS, in accordance with Apple
  Developer Program Guideline 4.8. If you sign in with Apple's
  "Hide my email" option, the relay email we receive is the only
  email address we will hold for you.
- **App Tracking Transparency (ATT).** Trackk does not engage in
  "tracking" as defined by Apple — we do not link user or device
  identifiers from this app with third-party data for advertising
  purposes, and we do not share identifiers with data brokers.
  Accordingly, the app does not present an ATT prompt.
- **In-App Purchase.** All paid subscriptions on iOS are processed
  exclusively via Apple In-App Purchase; Razorpay is not used on
  iOS. Apple receives transaction data; we receive only the
  subscription receipt and entitlement state.
- **App Privacy "nutrition" labels.** A complete mapping of the
  data categories below to Apple's App Privacy framework is
  maintained alongside this Policy and is consistent with the
  disclosures in §2.

---

## 15. Changes to This Policy

We will update this Policy whenever our practices change. The **Last
updated** date at the top will be revised. If the change is material,
we will notify you in-app or by email before it takes effect and, where
required by law, ask for your renewed consent.

---

## 16. Contact Us

For privacy questions, requests, or to exercise your rights:

> **Trackk Technologies, a sole proprietorship of Ms. Vandana S**
> 3/336, Sri Sai Nagar, 2nd Street, Hosur, Krishnagiri District, Tamil Nadu – 635126, India
> Email: support@trackk2save.com
> Grievance Officer (India): Ms. Vandana S, support@trackk2save.com
