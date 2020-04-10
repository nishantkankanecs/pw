var push = require("web-push");

let vapIDkeys = {
    publicKey: 'BJqFTPFqyGonWh7aCsko1VU6Leaa9xWtaM_E05leDeXz3xp0yhb_B2LCvq9xcQHOJjEXP7pn2H5_HKRoNjbBzdE',
    privateKey: 'SV8Jbzo2A1MwHM6kNzcnYpo-2Ve0griRDxzt0hdm8_8'
}

push.setVapidDetails("mailto:nishant.gupta.2@alight.com", vapIDkeys.publicKey, vapIDkeys.privateKey)

let sub = {}

push.sendNotification(sub, "test message")