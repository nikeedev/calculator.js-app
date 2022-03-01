const NOTIFICATION_TITLE = "Calculator.js"
const NOTIFICATION_BODY = "You opened Calculator.js App! Click here to get info."
const CLICK_MESSAGE = "You clicked!"

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => alert(CLICK_MESSAGE)
