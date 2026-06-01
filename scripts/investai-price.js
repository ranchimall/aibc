async function loadTokenPrice() {

    try {

        const response =
            await fetch('./data/prices.json?v=' + Date.now());

        const data = await response.json();

        const MUON_INVESTED = 101.936287;

        const MUON_UNITS = 0.15248;

        const MUON_AVG_BUY_PRICE = 668.52;

        const muonProfit =
            data.currentMuonValue -
            MUON_INVESTED;

        const muonProfitShare =
            (muonProfit / data.profit) * 100;

        const muonValuationContribution =
            muonProfit * 25;

        const TSMON_INVESTED = 50.00;

        const TSMON_UNITS = 0.12711;

        const TSMON_BUY_PRICE = 392.87;

        const tsmonProfit =
            data.currentTSMonValue -
            TSMON_INVESTED;

        const tsmonProfitShare =
            (tsmonProfit / data.profit) * 100;

        const tsmonValuationContribution =
            tsmonProfit * 25;

        const GOOGLON_INVESTED = 50.00;

        const GOOGLON_UNITS = 0.13358;

        const GOOGLON_BUY_PRICE = 374.30;

        const googlonProfit =
            data.currentGOOGLonValue -
            GOOGLON_INVESTED;

        const googlonProfitShare =
            (googlonProfit / data.profit) * 100;

        const googlonValuationContribution =
            googlonProfit * 25;    


        // Big valuation number
        document.querySelector('#valuation_display')
            .innerText =
            data.valuation.toFixed(2) + ' USDT';

        // Exact token price
        document.querySelector('#token_price')
            .innerText =
            'Exact token price: ' +
            data.tokenPrice.toFixed(12) +
            ' USDT';

        // ===== Contribution Breakdown =====

        document.querySelector('#investai_contribution')
            .innerText =
            data.valuation.toFixed(2) + ' USDT';
        document.querySelector('#investai_aggregate_profit')
            .innerText =
        data.profit.toFixed(2) + ' USDT';    

        document.querySelector('#openclaw_contribution')
            .innerText =
            '0.00 USDT';

        document.querySelector('#projectai_contribution')
            .innerText =
            '0.00 USDT';


        document.querySelector('#muon_invested')
            .innerText =
            MUON_INVESTED.toFixed(2) +
            ' USDT';

        document.querySelector('#muon_units')
            .innerText =
            MUON_UNITS +
            ' MUon';

        document.querySelector('#muon_buy_price')
            .innerText =
            MUON_AVG_BUY_PRICE.toFixed(2) +
            ' USDT';

        document.querySelector('#muon_current_price')
            .innerText =
            data.muonPrice.toFixed(2) +
            ' USDT';
            
        document.querySelector('#muon_holding_buy_price')
            .innerText =
            MUON_AVG_BUY_PRICE.toFixed(2) +
            ' USDT';

        document.querySelector('#muon_current_value')
            .innerText =
            data.currentMuonValue.toFixed(2) +
            ' USDT';

        document.querySelector('#muon_profit')
            .innerText =
            muonProfit.toFixed(2) +
            ' USDT';

        document.querySelector('#muon_valuation_contribution')
            .innerText =
            muonValuationContribution.toFixed(2) +
            ' USDT';

        document.querySelector('#muon_profit_share')
            .innerText =
            muonProfitShare.toFixed(2) +
            '%';    


        document.querySelector('#muon_holding_contribution_bottom')
            .innerText =
            muonValuationContribution.toFixed(2) + ' USDT';

        document.querySelector('#muon_holding_share')
            .innerText =
            muonProfitShare.toFixed(2) + '%';

        document.querySelector('#muon_holding_invested')
            .innerText =
            MUON_INVESTED.toFixed(2) +
            ' USDT';

        document.querySelector('#muon_holding_current_value')
            .innerText =
            data.currentMuonValue.toFixed(2) +
            ' USDT';

        document.querySelector('#muon_holding_profit')
            .innerText =
            muonProfit.toFixed(2) +
            ' USDT';

        document.querySelector('#muon_holding_price')
            .innerText =
            data.muonPrice.toFixed(2) + ' USDT';     

        document.querySelector('#tsmon_invested')
            .innerText =
            TSMON_INVESTED.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_units')
            .innerText =
            TSMON_UNITS +
            ' TSMon';

        document.querySelector('#tsmon_buy_price')
            .innerText =
            TSMON_BUY_PRICE.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_current_price')
            .innerText =
            data.tsmonPrice.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_holding_buy_price')
            .innerText =
            TSMON_BUY_PRICE.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_current_value')
            .innerText =
            data.currentTSMonValue.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_profit')
            .innerText =
            tsmonProfit.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_valuation_contribution')
            .innerText =
            tsmonValuationContribution.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_profit_share')
            .innerText =
            tsmonProfitShare.toFixed(2) +
            '%';    

        document.querySelector('#tsmon_holding_contribution_bottom')
            .innerText =
            tsmonValuationContribution.toFixed(2) + ' USDT';    

        document.querySelector('#tsmon_holding_share')
            .innerText =
            tsmonProfitShare.toFixed(2) + '%';

        document.querySelector('#tsmon_holding_invested')
            .innerText =
            TSMON_INVESTED.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_holding_current_value')
            .innerText =
            data.currentTSMonValue.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_holding_profit')
            .innerText =
            tsmonProfit.toFixed(2) +
            ' USDT';

        document.querySelector('#tsmon_holding_price')
            .innerText =
            data.tsmonPrice.toFixed(2) + ' USDT';    

        document.querySelector('#googlon_invested')
            .innerText =
            GOOGLON_INVESTED.toFixed(2) +
            ' USDT';

        document.querySelector('#googlon_units')
            .innerText =
            GOOGLON_UNITS +
            ' GOOGLon';

        document.querySelector('#googlon_buy_price')
            .innerText =
            GOOGLON_BUY_PRICE.toFixed(2) +
            ' USDT';

        document.querySelector('#googlon_current_price')
            .innerText =
            data.googlonPrice.toFixed(2) +
            ' USDT';

        document.querySelector('#googlon_holding_buy_price')
            .innerText =
            GOOGLON_BUY_PRICE.toFixed(2) +
            ' USDT';

        document.querySelector('#googlon_current_value')
            .innerText =
            data.currentGOOGLonValue.toFixed(2) +
            ' USDT';

        document.querySelector('#googlon_profit')
            .innerText =
            googlonProfit.toFixed(2) +
            ' USDT';

        document.querySelector('#googlon_holding_price')
            .innerText =
            data.googlonPrice.toFixed(2) + ' USDT';     

        document.querySelector('#googlon_valuation_contribution')
            .innerText =
            googlonValuationContribution.toFixed(2) +
            ' USDT';

        document.querySelector('#googlon_profit_share')
            .innerText =
            googlonProfitShare.toFixed(2) +
            '%';

        document.querySelector('#googlon_holding_contribution_bottom')
            .innerText =
            googlonValuationContribution.toFixed(2) + ' USDT';    

        document.querySelector('#googlon_holding_share')
            .innerText =
            googlonProfitShare.toFixed(2) + '%';
        document.querySelector('#googlon_holding_invested')
            .innerText =
            GOOGLON_INVESTED.toFixed(2) +
            ' USDT';

        document.querySelector('#googlon_holding_current_value')
            .innerText =
            data.currentGOOGLonValue.toFixed(2) +
            ' USDT';

        document.querySelector('#googlon_holding_profit')
            .innerText =
            googlonProfit.toFixed(2) +
            ' USDT';



        console.log(data);

    } catch(error) {

        console.error(error);

        document.querySelector('#token_price')
            .innerText = 'Unable to load';
    }
}

loadTokenPrice();

const muonHoldingToggle =
    document.querySelector('#muon_holding_toggle');

const muonHoldingDetails =
    document.querySelector('#muon_holding_details');

muonHoldingToggle.addEventListener('click', function() {

    const isOpen =
        !muonHoldingDetails.classList.contains('hidden');

    muonHoldingDetails.classList.toggle('hidden', isOpen);

    muonHoldingToggle.setAttribute(
        'aria-expanded',
        String(!isOpen)
    );
});

const tsmonHoldingToggle =
    document.querySelector('#tsmon_holding_toggle');

const tsmonHoldingDetails =
    document.querySelector('#tsmon_holding_details');

tsmonHoldingToggle.addEventListener('click', function() {

    const isOpen =
        !tsmonHoldingDetails.classList.contains('hidden');

    tsmonHoldingDetails.classList.toggle(
        'hidden',
        isOpen
    );

});

const googlonHoldingToggle =
    document.querySelector('#googlon_holding_toggle');

const googlonHoldingDetails =
    document.querySelector('#googlon_holding_details');

googlonHoldingToggle.addEventListener('click', function() {

    const isOpen =
        !googlonHoldingDetails.classList.contains('hidden');

    googlonHoldingDetails.classList.toggle(
        'hidden',
        isOpen
    );

});
