//
//  LoginContract.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import UIKit

protocol LoginViewProtocol: BaseProtocol {
}

protocol LoginPresenterProtocol {
    var view: LoginViewProtocol? { get set }
    func viewDidLoadWasCalled()
    func login(username: String, password: String)

}

protocol LoginInteractorProtocol {
}

protocol LoginServiceProtocol {
}

protocol LoginCoordinatorDelegate {
}
