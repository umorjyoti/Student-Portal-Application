import 'package:flutter/material.dart';
import '../constants/constants.dart';
import 'package:syncfusion_flutter_charts/charts.dart';

class SubjectCard extends StatelessWidget {
  SubjectCard(this.chartData, this.subname, this.subteacher, this.test2,
      this.test1, this.attendance);
  final String subname;
  final String subteacher;
  final List<ChartData> chartData;
  final int test2;
  final int test1;
  final int attendance;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(right: 20),
      width: 270,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Container(
            margin: EdgeInsets.only(top: 20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Text(
                  subname,
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                Text(
                  subteacher,
                  style: TextStyle(
                      fontSize: 16,
                      fontStyle: FontStyle.italic,
                      color: kprimarycolor),
                ),
              ],
            ),
          ),
          Expanded(
            child: SfCircularChart(
              series: <CircularSeries>[
                RadialBarSeries<ChartData, String>(
                  dataSource: [
                    ChartData('Test2', test2, Colors.amberAccent),
                    ChartData('Test1', test1, Colors.green),
                    ChartData('Attendance', attendance, Colors.lightBlue),
                  ],
                  xValueMapper: (ChartData data, _) => data.x,
                  yValueMapper: (ChartData data, _) => data.y,
                  pointColorMapper: (ChartData data, _) => data.pointColor,
                  strokeColor: ksecondarycolor,
                  gap: '5%',
                  trackColor: ksecondarycolor,
                  animationDuration: 1000,
                ),
              ],
              legend: Legend(
                padding: 5,
                position: LegendPosition.right,
                isVisible: true,
                itemPadding: 7,
                orientation: LegendItemOrientation.vertical,
                title: LegendTitle(
                    text: 'Analysis',
                    textStyle: TextStyle(
                        color: Colors.purpleAccent.shade200,
                        fontSize: 16,
                        fontStyle: FontStyle.italic,
                        fontWeight: FontWeight.w400)),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class ChartData {
  ChartData(this.x, this.y, this.pointColor);
  final String x;
  final int y;
  final Color pointColor;
}
