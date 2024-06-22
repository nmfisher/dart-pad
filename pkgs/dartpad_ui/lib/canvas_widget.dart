// Copyright (c) 2023, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:thermion_flutter/thermion_flutter.dart';
import 'package:thermion_dart/thermion_dart.dart';
import 'package:web/web.dart';
import 'dart:js_util';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:ui' as ui;
import 'dart:ui_web' as ui_web;
import 'theme.dart';
import 'widgets.dart';

class CanvasWidget extends StatefulWidget {
  const CanvasWidget({
    super.key,
  });

  @override
  State<CanvasWidget> createState() => _CanvasWidgetState();
}

class _CanvasWidgetState extends State<CanvasWidget> {
  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(children:[
      Positioned.fill(child:Container(color:Colors.white)),
      Positioned.fill(child:HtmlElementView.fromTagName(
        tagName: 'canvas',
        onElementCreated: (Object? element) {
          final canvas = element! as HTMLCanvasElement;
          canvas.id = 'canvas';
          
        })) ]);
  }
}
