import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/widgets.dart';
import '../constants/constants.dart';
import '../widgets/subjectcard.dart';
import '../widgets/tile.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final List<ChartData> chartData = [
      ChartData('Test2', 34, Colors.amberAccent),
      ChartData('Test1', 38, Colors.green),
      ChartData('Attendance', 75, Colors.lightBlue),
    ];
    return Scaffold(
      backgroundColor: kprimarycolor,
      body: SafeArea(
        child: Container(
          child: Column(
            children: [
              Container(
                padding: EdgeInsets.only(top: 20, right: 20, left: 20),
                height: 400,
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          children: [
                            Text(
                              'Dashboard',
                              style: TextStyle(
                                letterSpacing: 2,
                                fontStyle: FontStyle.italic,
                                fontSize: 20,
                                fontWeight: FontWeight.w500,
                                color: Colors.white,
                              ),
                            ),
                            Text(
                              'Good afternoon',
                              style: TextStyle(
                                fontStyle: FontStyle.italic,
                                fontSize: 11,
                                fontWeight: FontWeight.w300,
                                color: Colors.grey.shade100,
                              ),
                            ),
                          ],
                        ),
                        Text(
                          'Welcome\nusername',
                          style: TextStyle(
                            fontSize: 18,
                            letterSpacing: 2,
                            fontStyle: FontStyle.italic,
                            fontWeight: FontWeight.w300,
                            color: Colors.white,
                          ),
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 40,
                      child: Divider(
                        color: Colors.white,
                      ),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          children: [
                            Text(
                              'CGPA',
                              style: klebelTextStyle,
                            ),
                            SizedBox(height: 10),
                            Text(
                              "7.89/10",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                              ),
                            )
                          ],
                        ),
                        Column(
                          children: [
                            Text(
                              'Current Backlogs',
                              style: klebelTextStyle,
                            ),
                            SizedBox(height: 10),
                            Text(
                              "2",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                              ),
                            )
                          ],
                        ),
                        Container(
                          height: 30,
                          width: 70,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
                            color: Colors.white,
                          ),
                          child: Center(
                            child: Text(
                              "Profile",
                              style:
                                  TextStyle(color: kprimarycolor, fontSize: 13),
                            ),
                          ),
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 40,
                      child: Divider(
                        color: Colors.white,
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.only(bottom: 20),
                      height: 200,
                      child: ListView(
                        scrollDirection: Axis.horizontal,
                        children: [
                          SubjectCard(
                              chartData, "Mathematics", "RK", 298, 177, 382),
                          SubjectCard(chartData, "Technical Aptitute",
                              "BR Gogoi", 448, 137, 82),
                          SubjectCard(chartData, "Data Structures",
                              "Rahul Sharma", 298, 177, 382),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                height: 360,
                decoration: BoxDecoration(
                  color: ksecondarycolor,
                  borderRadius: BorderRadius.circular(15),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        bottomtile("Feedback", "asset/images/feedback.png"),
                        bottomtile("Result", "asset/images/result.png"),
                      ],
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        bottomtile("Attendance", "asset/images/attendance.png"),
                        bottomtile(
                            "Achievement", "asset/images/achievement.png"),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
