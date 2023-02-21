//
//  HomeInteractor.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation

internal final class HomeInteractor {
    // MARK: Variables

    private let HomeService: RMCharactersServiceProtocol

    // MARK: inits

    init(HomeService: RMCharactersServiceProtocol = RMCharactersViewService()) {
        self.HomeService = HomeService
    }
}

extension HomeInteractor: HomeInteractorProtocol {
    func getHomeResult(completion: @escaping (Result<[RMCharacterAPIProtocol], Error>) -> Void) {
        let dataService = self.HomeService.getDataService()

        dataService.getRMCharacterResult { result in
            completion(result) }
    }
}
