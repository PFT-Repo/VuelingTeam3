//
//  RMInfoAPI.swift
//  Rick&MortyApi
//
//  Created by Eric Moreno on 20/11/22.
//

import Foundation
struct RMInfoAPI: RMInfoProtocol, Codable {
    var count: Int
    var pages: Int
    var next: String?
    var prev: String?

    enum CodingKeys: String, CodingKey {
        case count
        case pages
        case next
        case prev
    }
}
