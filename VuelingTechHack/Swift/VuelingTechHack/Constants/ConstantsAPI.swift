//
//  ConstantsAPI.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
import UIKit

struct ConstantsAPI {
    static let apiCharacter = "https://rickandmortyapi.com/api/character"
    static let apiLocations = "https://rickandmortyapi.com/api/location"
    static let apiEpisodes = "https://rickandmortyapi.com/api/episode"

    static let locationTitle = "Location"
    static let characterTitle = "Characters"
    static let episodesTitle = "Episodes"

    enum TabName: String {
        case characters
        case locations
        case episodes
    }

    static let imageCharacter = UIImage(systemName: "character")
}
