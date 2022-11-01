import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Shortcut extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Shortcut({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0251 8.02513H10.0754M15.0251 8.02513V12.9749M15.0251 8.02513C15.0251 8.02513 12.1967 10.8536 11.4896 11.5607C9.01472 14.0355 11.4896 16.5104 11.4896 16.5104" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
