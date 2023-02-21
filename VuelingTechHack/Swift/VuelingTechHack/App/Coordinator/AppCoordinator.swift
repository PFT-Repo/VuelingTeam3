//
//  AppCoordinator.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
import UIKit

class AppCoordinator: Coordinator {
    var childCoordinators: [Coordinator] = []
    var window: UIWindow

    lazy var tabBarController: UITabBarController = {
        getNavigation()
    }()

    init(window: UIWindow) {
        self.window = window
        self.window.rootViewController = tabBarController
        self.window.makeKeyAndVisible()
    }

    private func getNavigation() -> UITabBarController {
        let navigator = UITabBarController()

        return navigator
    }

    func start() {
        showHome()
    }

    func showHome() {
        // tab bar
        let HomeView = getHomeView()

        HomeView.title = ConstantsAPI.characterTitle

        HomeView.tabBarItem.image = ConstantsAPI.imageCharacter

        tabBarController.setViewControllers([HomeView], animated: true)
    }

    func getHomeView() -> UINavigationController {
        let navigatorController = UINavigationController()
        let coordinator = HomeCoordinator()
        let interactor = HomeInteractor()
        let presenter = HomePresenter(interactor: interactor)
        let view = HomeViewController(presenter: presenter)

        view.delegate = coordinator
        presenter.view = view

        navigatorController.setViewControllers([view], animated: true)

        return navigatorController
    }
}
