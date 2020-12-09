import 'package:flutter/material.dart';
import '../constants/constants.dart';

class bottomtile extends StatelessWidget {
  final String tilename;
  final String tilelogo;
  bottomtile(this.tilename, this.tilelogo);

  @override
  Widget build(BuildContext context) {
    return Container(
//      margin: EdgeInsets.only(left: 10, top: 20),
      padding: EdgeInsets.only(top: 10),
      height: 150,
      width: 180,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: Colors.white,
      ),
      child: Column(
        children: [
          Text(
            tilename,
            style: TextStyle(
                color: kprimarycolor,
                fontSize: 18,
                fontStyle: FontStyle.italic),
          ),
          Image.asset(
            tilelogo,
            height: 110,
          ),
        ],
      ),
    );
  }
}
