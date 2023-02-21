//

import Foundation

internal final class DetailInteractor {
    // MARK: Variables

    var RMCharacter: RMCharacterAPIProtocol

    // MARK: Inits

    init(RMCharacter: RMCharacterAPIProtocol) {
        self.RMCharacter = RMCharacter
    }
}

extension DetailInteractor: DetailInteractorProtocol {
    func getCharacter() -> RMCharacterAPIProtocol {
        return RMCharacter
    }
}
