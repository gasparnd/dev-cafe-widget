//
//  WidgetKitHelper.swift
//  rndevwidget
//
//  Created by Gaspar Dolcemascolo on 12/10/2024.
//

import WidgetKit

@available(iOS 14.0, *)
@objcMembers final class WidgetKitHelper: NSObject {
  class func reloadAllTimelines() {
    WidgetCenter.shared.reloadAllTimelines()
  }
}
