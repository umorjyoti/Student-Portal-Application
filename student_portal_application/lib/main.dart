import 'package:flutter/material.dart';
import 'screens/home.dart';
import 'widgets/splash/animatedSplash.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: AnimatedSplash(
        imagePath: "asset/images/logo.png",
        home: Home(),
        duration: 2000,
        type: AnimatedSplashType.StaticDuration,
      ),
    );
  }
}
