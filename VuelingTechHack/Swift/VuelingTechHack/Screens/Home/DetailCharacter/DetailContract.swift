//
//  DetailContract.swift
//
//

import Foundation

protocol DetailPresenterViewProtocol: BaseProtocol {
    func loadInfo(RMCharacter: RMCharacterAPIProtocol)
}

protocol DetailPresenterProtocol {
    var view: DetailPresenterViewProtocol? { get set }

    func viewDidLoadWasCalled()
}

protocol DetailInteractorProtocol {
    func getCharacter() -> RMCharacterAPIProtocol
}
