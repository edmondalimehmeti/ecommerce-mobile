//
//  CLanguageModule.swift
//  POK
//
//  Created by Maks on 9.12.21.
//

import Foundation

var bundleKey: UInt8 = 0

@objc(CLanguageModule)
class CLanguageModule: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
      return false
  }
  
  @objc
  func changeLanguage(_ lang: String) {
    if lang == "al" {
      Bundle.setLanguage("sq")
    } else {
      Bundle.setLanguage("en")
    }
  }
}

class AnyLanguageBundle: Bundle {

  override func localizedString(forKey key: String,
                              value: String?,
                              table tableName: String?) -> String {

    guard let path = objc_getAssociatedObject(self, &bundleKey) as? String,
        let bundle = Bundle(path: path) else {
        return super.localizedString(forKey: key, value: value, table: tableName)
    }

    return bundle.localizedString(forKey: key, value: value, table: tableName)
  }
}

extension Bundle {
  class func setLanguage(_ language: String) {
    defer {
        object_setClass(Bundle.main, AnyLanguageBundle.self)
    }
    objc_setAssociatedObject(Bundle.main, &bundleKey, Bundle.main.path(forResource: language, ofType: "lproj"), .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
  }
}
