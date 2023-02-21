//
//  HomePresenter.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
internal final class HomePresenter: HomePresenterProtocol {

    // MARK: Variables

    var view: HomeViewProtocol?
    var interactor: HomeInteractorProtocol
    var Home = [RMCharacterAPIProtocol]()

    // MARK: inits

    init(interactor: HomeInteractorProtocol) {
        self.interactor = interactor
    }

    func viewDidLoadWasCalled() {
        callHomeAPI()
    }

    fileprivate func callHomeAPI() {
        interactor.getHomeResult { result in
            switch result {
            case let .failure(error):
                self.view?.showError?(message: error.localizedDescription)

            case let .success(Homeuccess):
                self.view?.loadHome()
                self.Home.append(contentsOf: Homeuccess)
            }
        }
    }

    func viewWillAppearWasCalled() {
        callHomeAPI()
    }

    func getHomeCount() -> Int {
        return Home.count
    }

    func rmCharacterAtIndex(index: Int) -> RMCharacterAPIProtocol {
        return Home[index]
    }
}
