//
//  DetailContract.swift
//
//

import Foundation
import UIKit

internal final class DetailViewController: UIViewController {
    // MARK: Outlets

    @IBOutlet weak var lblNameCharacter: UILabel!
    @IBOutlet weak var lblExtraInfoCharacter: UILabel!
    @IBOutlet var lblSecondInfo: UILabel!

    // MARK: Variables

    var presenter: DetailPresenterProtocol?

    // MARK: Inits

    public convenience init(presenter: DetailPresenterProtocol) {
        self.init(nibName: "DetailViewController", bundle: nil)
        self.presenter = presenter
    }

    // MARK: LifeCycle

    override func viewDidLoad() {
        super.viewDidLoad()

        presenter?.viewDidLoadWasCalled()
    }
}

extension DetailViewController: DetailPresenterViewProtocol {
    func loadInfo(RMCharacter: RMCharacterAPIProtocol) {
        lblNameCharacter.text = RMCharacter.species

        lblExtraInfoCharacter.text = RMCharacter.type

        lblSecondInfo.text = RMCharacter.created
    }
}
