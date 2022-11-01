import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Divide extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Divide({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21V12C12 9.23862 9.76142 7 7 7H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V12C12 9.23862 14.2386 7 17 7H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 3C5.4379 4.5621 4.5621 5.4379 3 7C4.5621 8.5621 5.4379 9.4379 7 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 3C18.5621 4.5621 19.4379 5.4379 21 7C19.4379 8.5621 18.5621 9.4379 17 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
