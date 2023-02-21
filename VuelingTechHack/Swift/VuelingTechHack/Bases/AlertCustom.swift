//
//  AlertCustom.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
import UIKit

protocol ShowAlertProtocol {
    func showAlertView(title: String, button1Text: String, parent: UIViewController)
}

struct ShowAlert: ShowAlertProtocol {
    func showAlertView(title: String, button1Text: String, parent: UIViewController) {
        let alertController = UIAlertController(title: title, message: nil, preferredStyle: .alert)

        let btnTryAgain = UIAlertAction(title: button1Text,
                                        style: .default)

        alertController.addAction(btnTryAgain)
        parent.present(alertController, animated: true)
    }
}
