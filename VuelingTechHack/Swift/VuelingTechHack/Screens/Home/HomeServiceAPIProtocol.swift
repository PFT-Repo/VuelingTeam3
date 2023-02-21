//
//  HomeServiceAPIProtocol.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation

internal final class RMCharactersViewService: RMCharactersServiceProtocol {
    private let dataService: RMCharacterServiceAPIProtocol

    init(dataService: RMCharacterServiceAPIProtocol = RickMortyRMCharacterServiceApi()) {
        self.dataService = dataService
    }

    func getDataService() -> RMCharacterServiceAPIProtocol {
        return dataService
    }
}

