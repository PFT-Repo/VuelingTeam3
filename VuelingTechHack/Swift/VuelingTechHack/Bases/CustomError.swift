//
//  CustomError.swift
//  VuelingTechHack
//
//  Created by Eric Moreno on 21/2/23.
//

import Foundation
protocol CustomErrorProtocol: LocalizedError {
    var title: String? { get }
    var code: Int { get }
}

struct CustomError: CustomErrorProtocol {
    var title: String?
    var code: Int
    var errorDescription: String?
    var failureReason: String?

    init(title: String?, description: String, code: Int) {
        self.title = title
        self.code = code
        errorDescription = description
        failureReason = description
    }
}
