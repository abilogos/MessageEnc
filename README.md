## Intro

This extension will adds encryption decryption functionality and easy to use to the browser.

## About

This extension will help to encrypt message on the browser so you can transfer them in an non trusted messenger web app.
you & your partner should have agree on a passphrase on a truthful way before (not the chat you want to encrypt messages on).

## How to use

- install the extension on your browser.
- from the toolbar enter your passphrase for the current tab
- select your message you want to encrypt then right click, from context menu, select encrypt message
- on receiving message, select the message, rihht click, from the context menu, select decrypt message

In the future and new feature, the use case will be simpler, [with short key, then automatic]

## Development

- clone the repository on your machine
- install dependency with `yarn install`
- you can load the extension as a temporary extension from chromium :
    - navigate to the chrome://extensions
    - load unpacked
    - select the directory of the cloned repo

## Contribution

Feel free to make Issue then you can contribute.

## Planned feature
- customize short key on extension setting
- global passphrae as fallback
- disable ajax request on the input fields if extension is activated
- per tab keep password on menu and not saving though
- split tokens by space and decrypt them
- automatic tagging and decryption