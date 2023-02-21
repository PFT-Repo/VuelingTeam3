//
//  HomeContract.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
import UIKit

@objc protocol HomeViewProtocol: BaseProtocol {
    func loadHome()
}

protocol HomePresenterProtocol {
    var view: HomeViewProtocol? { get set }

    func viewDidLoadWasCalled()
    func viewWillAppearWasCalled()

    func getHomeCount() -> Int
    func rmCharacterAtIndex(index: Int) -> RMCharacterAPIProtocol
}

protocol HomeInteractorProtocol {
    func getHomeResult(completion: @escaping (Result<[RMCharacterAPIProtocol], Error>) -> Void)
}

protocol RMCharactersServiceProtocol {
    func getDataService() -> RMCharacterServiceAPIProtocol
}

protocol HomeCoordinatorDelegate {
    func goToDetailScreen(rmCharacter: RMCharacterAPIProtocol, sender: UIViewController)
}

