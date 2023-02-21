//
//  DetailContract.swift
//
//

import Foundation
import UIKit

internal final class DetailPresenter {
    // MARK: Variables

    var view: DetailPresenterViewProtocol?
    var interactor: DetailInteractorProtocol

    // MARK: Init

    init(interactor: DetailInteractorProtocol) {
        self.interactor = interactor
    }
}

extension DetailPresenter: DetailPresenterProtocol {
    func viewDidLoadWasCalled() {
        let RMCharacter = interactor.getCharacter()

        view?.loadInfo(RMCharacter: RMCharacter)
    }
}
