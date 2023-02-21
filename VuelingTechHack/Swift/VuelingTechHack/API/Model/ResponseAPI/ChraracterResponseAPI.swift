//
//  LocationResponseAPI.swift
//  Rick&MortyApi
//
//  Created by Eric Moreno on 20/11/22.
//

import Foundation
struct CharacterResponseAPI: RMResultCharacterProtocol, Codable {
    var info: RMInfoProtocol { castInfo }
    var results: [RMCharacterAPIProtocol] { castResult }

    private let castInfo: RMInfoAPI
    private let castResult: [RMCharacterAPI]

    enum CodingKeys: String, CodingKey {
        case info
        case results
    }

    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)

        castInfo = try values.decode(RMInfoAPI.self, forKey: .info)
        castResult = try values.decode([RMCharacterAPI].self, forKey: .results)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)

        try container.encode(castInfo, forKey: .info)
        try container.encode(castResult, forKey: .results)
    }
}
