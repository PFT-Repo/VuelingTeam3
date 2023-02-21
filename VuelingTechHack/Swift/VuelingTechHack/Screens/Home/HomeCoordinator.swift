//
//  HomeCoordinator.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
import UIKit

class HomeCoordinator: HomeCoordinatorDelegate {
    func goToDetailScreen(rmCharacter: RMCharacterAPIProtocol, sender: UIViewController) {
        let interactor = DetailInteractor(RMCharacter: rmCharacter)
        let presenter = DetailPresenter(interactor: interactor)
        let view = DetailViewController(presenter: presenter)

//        let interactor = DetailInteractor(person: person)
//        let presenter = DetailPresenter(interactor: interactor)
//        let view = DetailViewController(presenter: presenter)

        presenter.view = view
//
        sender.navigationController?.show(view, sender: nil)
    }
}
