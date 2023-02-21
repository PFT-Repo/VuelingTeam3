//
//  RickMortyCharacterServiceAPI.swift
//  Rick&MortyApi
//
//  Created by Eric Moreno on 21/11/22.
//

import Foundation

public class RickMortyRMCharacterServiceApi: RMCharacterServiceAPIProtocol {
    private var nextPageCharacters: String?

    func getRMCharacterResult(completion: @escaping (Result<[RMCharacterAPIProtocol], Error>) -> Void) {
        let firstUrl = ConstantsAPI.apiCharacter

        var nextUrlToCall = firstUrl

        if let nextPageUrl = nextPageCharacters {
            nextUrlToCall = nextPageUrl
        }

        guard let url = URL(string: nextUrlToCall) else {
            return
        }

        let urlSession = URLSession.shared
        urlSession.dataTask(with: url) { data, _, error in
            if let error {
                completion(.failure(error))
                return
            }

            if let data {
                do {
                    let apiResults = try JSONDecoder().decode(CharacterResponseAPI.self,
                                                              from: data)
                    self.nextPageCharacters = apiResults.info.next
                    completion(.success(apiResults.results))
                } catch let decodeError {
                    completion(.failure(decodeError))
                }
            }
        }.resume()
    }
}
