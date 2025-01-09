package com.realpath

import android.net.Uri
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = RealPathModule.NAME)
class RealPathModule(reactContext: ReactApplicationContext) :
  NativeRealPathSpec(reactContext) {
    val context = reactContext;

  override fun getName(): String {
    return NAME
  }

  override fun getPath(path: String?): String {
   return  FileHelper.getRealPathFromURI(context,Uri.parse(path));
  }


  companion object {
    const val NAME = "RealPath"
  }
}
