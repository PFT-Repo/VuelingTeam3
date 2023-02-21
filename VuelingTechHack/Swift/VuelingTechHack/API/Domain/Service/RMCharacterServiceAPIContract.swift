//
//  CharacterService.swift
//  Rick&MortyApi
//
//  Created by Eric Moreno on 20/11/22.
//

import Foundation

protocol RMCharacterServiceAPIProtocol {
    func getRMCharacterResult(completion: @escaping (Result<[RMCharacterAPIProtocol], Error>) -> Void)
}
