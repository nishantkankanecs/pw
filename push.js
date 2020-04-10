var push = require("web-push");

let vapIDkeys = {
    publicKey: 'BJqFTPFqyGonWh7aCsko1VU6Leaa9xWtaM_E05leDeXz3xp0yhb_B2LCvq9xcQHOJjEXP7pn2H5_HKRoNjbBzdE',
    privateKey: 'SV8Jbzo2A1MwHM6kNzcnYpo-2Ve0griRDxzt0hdm8_8'
}

push.setVapidDetails("mailto:nishant.gupta.2@alight.com", vapIDkeys.publicKey, vapIDkeys.privateKey)

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/e3ko2Dwxtz8:APA91bGQmRSjsfGcbA42iDU2wVOIuw1XcmQTX4GvIYS6YHzkPQIdEsv4-iF_kDtpWmqoXmXrB3yKkT-h9js2cbINTC0Ckju1CO1VGFeHOgWT6yn7JEmvF5Yh8jRSHbUmboScrJANNVvO", "expirationTime": null, "keys": { "p256dh": "BDI0z8_lQV8zJpXZBNQxlGxYRpeeJJuVKb8mfmsVQnYToUEdRPgDmnPbx7mzcUpmqb9k9qHd_LSV7VdBQIpTDVA", "auth": "0-zvxd7GFbgyFNQ63zV2ig" } }

push.sendNotification(sub, "test message")