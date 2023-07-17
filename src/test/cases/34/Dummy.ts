/// <reference path="./Dummy.d.ts" />

export function sendMessage(message: Message, recipient: Recipient) {
  console.log(`Sending message to ${recipient.name} <${recipient.email}>`)
}
