# Dirty Dining 💩

Dirty Dining connects Floridian foodies with their local Health Inspectors allowing them to make healthy restaurant choices. Simply put, we put in the map restaurants have committed serious health violations through a responsible rating system while giving them the opportunity to redeem themselves once they pass their next Health inspection.

---

## Tech Stack

* [React Native](https://facebook.github.io/react-native/docs/getting-started.html) uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.

* [Redux](http://redux.js.org) is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments \(client, server, and native\), and are easy to test.

* [React Native Map by Airbnb](https://github.com/airbnb/react-native-maps) is a Map component for iOS + Android

* [GraphQL](http://graphql.org) is a query language for APIs and a runtime for fulfilling those queries with your existing data.

---

## Getting Started

### Installing dependencies

You will need Node, Watchman, the React Native command line interface, and Xcode.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

### Node, Watchman

We recommend installing Node and Watchman using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

`brew install node brew install watchman`

If you have already installed Node on your system, make sure it is version 4 or newer.

[Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

### Xcode

The easiest way to install Xcode is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 8 or higher.

#### Command Line Tools

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

![](https://facebook.github.io/react-native/img/XcodeCommandLineTools.png "Xcode Command Line Tools")

### Running the React Native application

To run your app on iOS:

1. `react-native run-ios`

   * or -

2. Open ios/DirtyDining.xcodeproj in Xcode

3. Hit the Run button

To run your app on Android:

1. Have an Android emulator running \(quickest way to get started\), or a device connected 
2. `react-native run-android`

### Running on a device

The above command will automatically run your app on the iOS Simulator by default. If you want to run the app on an actual physical iOS device, please follow the instructions [here](https://facebook.github.io/react-native/docs/running-on-device.html).

### Using Developer Tools

* **Redux Developer Tool**, open [http://remotedev.io/local/](http://remotedev.io/local/) while the application is running.

---



\(in progress\)

