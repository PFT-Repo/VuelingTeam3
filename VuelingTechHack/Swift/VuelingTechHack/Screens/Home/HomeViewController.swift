//
//  HomeViewController.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
import UIKit

internal class HomeViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    // MARK: Outlets

    @IBOutlet weak var tableViewHome: UITableView!

    // MARK: Variables

    var presenter: HomePresenterProtocol?
    var delegate: HomeCoordinatorDelegate?

    // MARK: Inits

    public convenience init(presenter: HomePresenterProtocol) {
        self.init(nibName: "HomeView", bundle: nil)
        self.presenter = presenter
    }

    // MARK: Lifecycle

    override func viewDidLoad() {
        super.viewDidLoad()

        tableViewHome.dataSource = self
        tableViewHome.delegate = self

        tableViewHome.register(UINib(nibName: "HomeCustomCell",
                                     bundle: nil),
                               forCellReuseIdentifier: "CustomCell")
        presenter?.viewDidLoadWasCalled()
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.tabBarController?.tabBar.isHidden = false
    }

    // MARK: Table view Functions

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return presenter?.getHomeCount() ?? 0
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell",
                                                       for: indexPath)
            as? HomeCustomCellView else { return HomeCustomCellView() }

        guard let HomeAtIndex = presenter?.rmCharacterAtIndex(index: indexPath.row) else { return cell }

        cell.lblName.text = HomeAtIndex.created

        return cell
    }

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let HomeAtIndex = presenter?.rmCharacterAtIndex(index: indexPath.row) else {
            // MARK: TODO Alert view mostrando error

            return
        }

        delegate?.goToDetailScreen(rmCharacter: HomeAtIndex, sender: self)
    }

    // MARK: Actions
}

extension HomeViewController: HomeViewProtocol {
    func showError(message: String) {
        DispatchQueue.main.async {
            ShowAlert().showAlertView(title: "Failed to show data",
                                      button1Text: "OK",
                                      parent: self)
        }
    }

    func loadHome() {
        DispatchQueue.main.async {
            self.tableViewHome.reloadData()
        }
    }
}
