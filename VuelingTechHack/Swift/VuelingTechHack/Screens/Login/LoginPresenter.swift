//
//  LoginPresenter.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
import UIKit

class LoginPresenter: NSObject {
    private weak var view: LoginViewDelegate?
    private var interactor = LoginInteractor()
    private let coordinator = LoginCoordinator()

    init(interactor: LoginInteractor) {
        self.interactor = interactor
    }

    func login(username: String, password: String) {
        interactor.login(username: username, password: password) { success, _ in
            if success {
                self.view?.navigateToNextScreen()
            } else {
                self.view?.showErrorMessage("Error al iniciar sesión")
            }
        }
    }
}
