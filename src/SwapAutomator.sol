// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IUniswapRouter {
    function WETH() external pure returns (address);
    function swapExactETHForTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable returns (uint[] memory amounts);
}

contract SwapAutomator {
    address public owner;
    IUniswapRouter public uniswapRouter;
    
    struct UserStrategy {
        bool active;
        uint256 lastExecuted;
        uint256 swapAmount;
        uint256 frequency;
    }
    
    mapping(address => UserStrategy) public userStrategies;
    
    event StrategyActivated(address indexed user, uint256 swapAmount, uint256 frequency);
    event SwapExecuted(address indexed user, uint256 amountIn);
    event StrategyDeactivated(address indexed user);
    
    constructor(address _uniswapRouter) {
        owner = msg.sender;
        uniswapRouter = IUniswapRouter(_uniswapRouter);
    }
    
    function activateStrategy(uint256 _swapAmount, uint256 _frequency) external {
        require(_swapAmount > 0, "Amount must be > 0");
        require(_frequency >= 3600, "Min frequency 1 hour");
        
        userStrategies[msg.sender] = UserStrategy({
            active: true,
            lastExecuted: 0,
            swapAmount: _swapAmount,
            frequency: _frequency
        });
        
        emit StrategyActivated(msg.sender, _swapAmount, _frequency);
    }
    
    function deactivateStrategy() external {
        userStrategies[msg.sender].active = false;
        emit StrategyDeactivated(msg.sender);
    }
    
    function executeSwap(address tokenOut) external payable {
        UserStrategy storage strategy = userStrategies[msg.sender];
        require(strategy.active, "Strategy not active");
        require(msg.value == strategy.swapAmount, "Incorrect ETH amount");
        
        address[] memory path = new address[](2);
        path[0] = uniswapRouter.WETH();
        path[1] = tokenOut;
        
        uniswapRouter.swapExactETHForTokens{value: msg.value}(
            0,
            path,
            msg.sender,
            block.timestamp + 300
        );
        
        strategy.lastExecuted = block.timestamp;
        emit SwapExecuted(msg.sender, msg.value);
    }
    
    function getStrategy(address user) external view returns (UserStrategy memory) {
        return userStrategies[user];
    }
    
    receive() external payable {}
}
