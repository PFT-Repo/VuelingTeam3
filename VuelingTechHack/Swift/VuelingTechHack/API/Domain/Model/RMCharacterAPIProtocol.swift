//
//  Character.swift
//  Rick&MortyApi
//
//  Created by Eric Moreno on 19/11/22.
//

import Foundation

protocol RMCharacterAPIProtocol {
    var characterId: Int { get }
    var name: String { get }
    var status: Status { get }
    var species: String { get }
    var type: String { get }
    var gender: Gender { get }
    var origin: Origin { get }
    var image: String { get }
    var episodes: Array<URL> { get }
    var characterURL: URL { get }
    var created: String { get }
}

enum Status: String, Codable {
    case alive = "Alive"
    case dead = "Dead"
    case unknown
}

enum Gender: String, Codable {
    case male = "Male"
    case female = "Female"
    case genderless = "Genderless"
    case unknown
}

protocol Origin {
    var name: String { get }
    var url: String { get }
}

