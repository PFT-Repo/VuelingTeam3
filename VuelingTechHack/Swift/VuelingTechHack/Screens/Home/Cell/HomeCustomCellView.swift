//
//  CustomCellViewController.swift
//  Rick&MortyApi
//
//  Created by Eric Moreno on 20/11/22.
//

import UIKit

class HomeCustomCellView: UITableViewCell {
    @IBOutlet var lblName: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
}
