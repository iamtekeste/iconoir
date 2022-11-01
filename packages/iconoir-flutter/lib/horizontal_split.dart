import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HorizontalSplit extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HorizontalSplit({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12H2M2 12L5.5 8.5M2 12L5.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12H22M22 12L18.5 8.5M22 12L18.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 21L10 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 21L14 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
