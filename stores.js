// Where Trackk can be downloaded, read by every page on the site (the home
// page, /get and the /join fallback in 404.html).
//
// The one switch: set iosLive to true once the App Store shows Trackk.
// Until then iPhones are told it is coming, never sent to an empty App
// Store page, and never sent to Google Play.
window.TRACKK_STORES = {
  iosLive: false,
  // App Store Connect → the app → App Information → Apple ID.
  appStoreId: '6824227179',
  // App Store Connect's provider token (App Analytics → Campaigns, the pt=
  // value). Optional: without it the link works, only the per-place
  // report on /get is missing.
  appStorePt: '',
  androidPackage: 'com.trackk.app',
};
