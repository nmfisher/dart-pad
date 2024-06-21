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
  // ThermionViewer? _viewer;
  @override
  void initState() {
    // ThermionFlutterPlugin.createViewer().then((v) async {
    //   _viewer = v;
    //   setState(() {});
    //   await _viewer!.initialized;
    //   ThermionViewerJSDartBridge(_viewer!).bind();
    //   print("Bound JS<->Dart bridge");
    //   // final random = Random();
    //   // await _viewer!.setBackgroundColor(1.0, 0.9, 0.2, 1.0);
    //   await _viewer!.loadSkybox("default_env_skybox.ktx");
    //   await _viewer!.loadIbl("default_env_ibl.ktx");
      Timer.periodic(Duration(microseconds: 16667), (_) async {
        setState(() {});
      });
    // });
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  ui.Image? _img;

  Future capture() async {
    try {
      final ImageBitmap newSource = await promiseToFuture<ImageBitmap>(
          window.createImageBitmap(
              document.getElementById("canvas") as HTMLCanvasElement));
      _img = await ui_web.createImageFromImageBitmap(newSource);
    } catch (err) {
      print(err);
    }
  }

  @override
  Widget build(BuildContext context) {
    capture();
    if (_img == null) {
      return Container(color: Colors.white);
    }
    return RawImage(image: _img);
  }
}
