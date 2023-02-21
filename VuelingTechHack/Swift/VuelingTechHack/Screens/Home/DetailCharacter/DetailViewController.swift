//
//  DetailContract.swift
//
//

import Foundation
import UIKit

internal final class DetailViewController: UIViewController {
    // MARK: Outlets

    @IBOutlet weak var lblHour: UILabel!
    @IBOutlet var lblNameCharacter: UILabel!
    @IBOutlet var lblExtraInfoCharacter: UILabel!
    @IBOutlet var lblSecondInfo: UILabel!
    @IBOutlet var lblTotalCost: UILabel!

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
        tabBarController?.tabBar.isHidden = true
        presenter?.viewDidLoadWasCalled()
    }
}

extension DetailViewController: DetailPresenterViewProtocol {
    func loadInfo(RMCharacter: RMCharacterAPIProtocol) {
        lblHour.text = String(RMCharacter.characterId)
        lblExtraInfoCharacter.text = String(RMCharacter.characterId * 2)
        lblTotalCost.text = "1200"
    }
}
