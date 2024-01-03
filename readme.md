# What is Intelbuntu?
Intelbuntu is a open-source camera viewer base in RTSP, for Intelbras devices.

You can now see your Intelbras cameras at your Linux device.

Intelbuntu has created by a comun linux user, that have some security cameras in your house. Your securitys cameras are installed by Intelbras company, that provides a Windows software for the live preview.

Windows softwares are not avalaible for linux users... :(

So, this user get a idea, he thinks: "Hey, i'm a linux user and i know make code. I have the power of code creations, so i'll make my own app for resolve this problem!"

And there born the Intelbuntu (ah, the linux user use Ubuntu xD)

## How to install

You can copy this repository in your computer, open the vscode or terminal at the app directory root and run the command:

```
npm start
```

or create a dir with the app content and .appImage initializable, runing this command:
```
npx electron-packager . intelbuntu --linux --asar
```
For this two methods, make sure install the NPM and NodeJs in your computer, and dont forget install all the npm dependencies:
```
npm install --dev
```
## How to use

For use Intelbuntu, you just need know somethings at your DVR (cameras server):
- The user name
- The password
- The IP
- The PORT

The app will be a connection with your cameras stream througth RTSP protocol.

By default, the app will open the four first available camera streams.