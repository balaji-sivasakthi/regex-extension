import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
chrome.browserAction.setBadgeText({ text: '1' });
chrome.notifications.create("12344", {
  type: "basic",
  title: "Hello",
  message: "This is a notification!",
  iconUrl: "https://media.istockphoto.com/id/1266949430/vector/alert-notification-on-the-smartphone-screen-flat-vector.jpg?s=612x612&w=0&k=20&c=bbX8CtgY0wp0cVsaIupeJ-0W8icRavGm95cio7cEj0s="
});
