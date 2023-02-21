//
//  RMCharacterAPI.swift
//  Rick&MortyApi
//
//  Created by Eric Moreno on 20/11/22.
//

import Foundation

struct RMCharacterAPI: RMCharacterAPIProtocol, Codable {
    private let castOrigin: RMOriginAPI

    var characterId: Int
    var name: String
    var status: Status
    var species: String
    var type: String
    var gender: Gender
    var origin: Origin { castOrigin }
    var image: String
    var episodes: Array<URL>
    var characterURL: URL
    var created: String

    enum CodingKeys: String, CodingKey {
        case characterId = "id"
        case name
        case status
        case species
        case type
        case gender
        case origin
        case image
        case episode
        case characterURL = "url"
        case created
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        characterId = try container.decode(Int.self, forKey: .characterId)
        name = try container.decode(String.self, forKey: .name)
        status = try container.decode(Status.self, forKey: .status)
        species = try container.decode(String.self, forKey: .species)
        type = try container.decode(String.self, forKey: .type)
        gender = try container.decode(Gender.self, forKey: .gender)
        castOrigin = try container.decode(RMOriginAPI.self, forKey: .origin)
        image = try container.decode(String.self, forKey: .image)
        episodes = try container.decode([URL].self, forKey: .episode)
        characterURL = try container.decode(URL.self, forKey: .characterURL)
        created = try container.decode(String.self, forKey: .created)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(characterId, forKey: .characterId)
        try container.encode(name, forKey: .name)
        try container.encode(status, forKey: .status)
        try container.encode(species, forKey: .species)
        try container.encode(type, forKey: .type)
        try container.encode(gender, forKey: .gender)
        try container.encode(castOrigin, forKey: .origin)
        try container.encode(image, forKey: .image)
        try container.encode(episodes, forKey: .episode)
        try container.encode(characterURL, forKey: .characterURL)
        try container.encode(created, forKey: .created)
    }
}
