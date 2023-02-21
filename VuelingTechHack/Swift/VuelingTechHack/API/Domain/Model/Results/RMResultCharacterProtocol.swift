//
//  RMResultLocationProtocol.swift
//  Rick&MortyApi
//
//  Created by Eric Moreno on 21/11/22.
//

import Foundation
protocol RMResultCharacterProtocol {
    var info: RMInfoProtocol { get }
    var results: [RMCharacterAPIProtocol] { get }
}
