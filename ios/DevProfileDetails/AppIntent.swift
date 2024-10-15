//
//  AppIntent.swift
//  DevProfileDetails
//
//  Created by Gaspar Dolcemascolo on 12/10/2024.
//

import WidgetKit
import AppIntents

struct ConfigurationAppIntent: WidgetConfigurationIntent {
    static var title: LocalizedStringResource = "Dev Cafe"
    static var description = IntentDescription("")

    // An example configurable parameter.
    @Parameter(title: "User Name", default: "Linus")
    var favoriteEmoji: String
}
