//
//  LoginViewControllwe.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
import UIKit

class LoginViewController: UIViewController {
    var presenter: LoginPresenterProtocol?
    weak var delegate: LoginViewDelegate?

    @IBOutlet var txtUser: UITextField!
    @IBOutlet var txtPassword: UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()
        presenter?.viewDidLoadWasCalled()
    }

    @IBAction func didTapLoginButton(_ sender: Any) {
        let username = txtUser.text ?? "" // Obtener el nombre de usuario ingresado por el usuario
        let password = txtPassword.text ?? "" // Obtener la contraseña ingresada por el usuario
        presenter?.login(username: username, password: password)
    }
}

extension LoginViewController: LoginViewDelegate {
    func loginButtonTapped(username: String, password: String) {
        presenter?.login(username: username, password: password)
    }

    func navigateToNextScreen() {
        let nextViewController = HomeViewController()
        navigationController?.pushViewController(nextViewController, animated: true)
    }

    func showErrorMessage(_ message: String) {
        let alert = UIAlertController(title: "Error", message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
        present(alert, animated: true, completion: nil)
    }
}

protocol LoginViewDelegate: AnyObject {
    func loginButtonTapped(username: String, password: String)
    func navigateToNextScreen()
    func showErrorMessage(_ message: String)
}
