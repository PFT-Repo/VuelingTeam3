//
//  LoginCoordinator.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
import UIKit
class LoginCoordinator: LoginCoordinatorDelegate {
    func navigateToNextScreen(sender: UIViewController) {
        let interactor = HomeInteractor()
        let presenter = HomePresenter(interactor: interactor)
        let view = HomeViewController(presenter: presenter)

        presenter.view = view

        sender.navigationController?.show(view, sender: nil)
    }
}
