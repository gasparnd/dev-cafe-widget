//
//  DevProfileDetails.swift
//  DevProfileDetails
//
//  Created by Gaspar Dolcemascolo on 12/10/2024.
//

import WidgetKit
import SwiftUI

struct Provider: AppIntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        let valueData = ValuesData(name: "gasparnd", followers: 0, following: 0, reposCount: 0)
        return SimpleEntry(date: Date(), configuration: ConfigurationAppIntent(), data: valueData)
    }

    func snapshot(for configuration: ConfigurationAppIntent, in context: Context) async -> SimpleEntry {
        let valueData = ValuesData(name: "gasparnd", followers: 0, following: 0, reposCount: 0)
        return SimpleEntry(date: Date(), configuration: configuration, data: valueData)
    }
    
    func timeline(for configuration: ConfigurationAppIntent, in context: Context) async -> Timeline<SimpleEntry> {
        var entries: [SimpleEntry] = []
        let userDefaults = UserDefaults.init(suiteName: "group.devcafe")
        let jsonText = userDefaults!.value(forKey: "ghUser") as? String
        let jsonData = Data(jsonText?.utf8 ?? "".utf8)
        let valueData = try! JSONDecoder().decode(ValuesData.self, from: jsonData)
      
        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
            let entry = SimpleEntry(date: entryDate, configuration: configuration, data: valueData)
            entries.append(entry)
        }

        return Timeline(entries: entries, policy: .atEnd)
    }
}

struct ValuesData: Codable {
  let name: String
  let followers: Int
  let following: Int
  let reposCount: Int
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let configuration: ConfigurationAppIntent
    let data: ValuesData
}

struct DevProfileDetailsEntryView : View {
    var entry: Provider.Entry

    var body: some View {
      VStack(alignment: .leading, spacing: 5) {
          Text("GitHub:").font(.title2)
          Text("@\(entry.data.name)")
          Spacer()
          HStack {
            Text("Folowers:").foregroundStyle(.blue)
            Text("\(entry.data.followers)")
          }
          HStack {
            Text("Following:").foregroundStyle(.blue)
            Text("\(entry.data.following)")
          }
          HStack {
            Text("Repositories:").foregroundStyle(.blue)
            Text("\(entry.data.reposCount)")
          }
        }
    }
}

struct DevProfileDetails: Widget {
    let kind: String = "DevProfileDetails"

    var body: some WidgetConfiguration {
        AppIntentConfiguration(kind: kind, intent: ConfigurationAppIntent.self, provider: Provider()) { entry in
            DevProfileDetailsEntryView(entry: entry)
                .containerBackground(.fill.tertiary, for: .widget)
        }
    }
}

extension ConfigurationAppIntent {
    fileprivate static var smiley: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.favoriteEmoji = "😀"
        return intent
    }
    
    fileprivate static var starEyes: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.favoriteEmoji = "🤩"
        return intent
    }
}

#Preview(as: .systemSmall) {
    DevProfileDetails()
} timeline: {
    let valueData = ValuesData(name: "gasparnd", followers: 0, following: 0, reposCount: 0)
    SimpleEntry(date: .now, configuration: .smiley, data: valueData)
    SimpleEntry(date: .now, configuration: .starEyes, data: valueData)
}
