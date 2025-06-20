// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract HGDToken is ERC20, ERC20Burnable {
    constructor() ERC20("HONGGILDONG", "HGD") {
        _mint(msg.sender, 1_000_000_000_000_000 * (10 ** 18));
    }
}