# Word-Quiz-Task

A React Native Quiz Tasks where user can play game and win by giving Correct Answers of Questions.
I have used Latest React Native Version (0.71.4) and I have used following packages.
 * React Navigation
 * Redux Toolkit.
 * Redux Thunk for API calling (If Present)

# Code Structure.

I have used the simple architecture of the directry structure. For common components, I have created these in Componnets folder. 
For Common Methods, I have created the seperate Utils files. and All screens are reside in screen folder.

This is basic and Simple folder structure and architecture of React Native app.

# How can You release the React Native app.

# Android Releaase:

  * You need to open the android folder in the Android Studio.
  * After successfull Build, You can see the Options under <b> Build > Generate Signed APK</b>.
  * Just create the Signed KeyStore and Select it while creating the <b>Signed APK</b>.
  * Now You can update it on the Google Play Console.

# IOS Release:

  * You need to open the ios folder in main project root directry and open the file <b> ios > projectName > projectName.xcworkspace </b> file in xcode.
  * You'll select the General Device on the Top of project in Xcode and just create <b> Archive </b>.
  * After completing Build, You can update the Test Flight on App Store.
  * You'll create the release version on App Store and add this Test flight on this release.


<b>Note:</b>
* When you'll need to update it again on the Play Store/App Store You need to change the Version code in every update on Google Play Store and App Store.  
 
