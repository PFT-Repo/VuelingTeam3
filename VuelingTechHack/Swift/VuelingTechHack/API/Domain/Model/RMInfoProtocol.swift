//
//  RMInfo.swift
//  Rick&MortyApi
//
//  Created by Eric Moreno on 20/11/22.
//

import Foundation

protocol RMInfoProtocol {
    var count: Int { get }
    var pages: Int { get }
    var next: String? { get }
    var prev: String? { get }
}
