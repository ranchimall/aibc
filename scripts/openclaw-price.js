const OPENCLAW_VALUE_PER_INSTALL = 100;
const OPENCLAW_CURRENT_INSTALLATIONS = 6;
const TOTAL_SUPPLY = 1_000_000_000_000;

const openClawValuation =
    OPENCLAW_CURRENT_INSTALLATIONS * OPENCLAW_VALUE_PER_INSTALL;

const openClawTokenPrice =
    openClawValuation / TOTAL_SUPPLY;

window.openClawPriceData = {
    valuePerInstall: OPENCLAW_VALUE_PER_INSTALL,
    currentInstallations: OPENCLAW_CURRENT_INSTALLATIONS,
    valuation: openClawValuation,
    tokenPrice: openClawTokenPrice
};

document.querySelector('#openclaw_valuation_display')
    .innerText =
    openClawValuation.toFixed(2) + ' USDT';

document.querySelector('#openclaw_token_price')
    .innerText =
    'Exact token price: ' +
    openClawTokenPrice.toFixed(12) +
    ' USDT';

document.querySelector('#openclaw_box_current_installations')
    .innerText =
    OPENCLAW_CURRENT_INSTALLATIONS.toLocaleString();

document.querySelector('#openclaw_value_per_install')
    .innerText =
    OPENCLAW_VALUE_PER_INSTALL.toFixed(2) + ' USDT';

document.querySelector('#openclaw_current_installations')
    .innerText =
    OPENCLAW_CURRENT_INSTALLATIONS.toLocaleString();

document.querySelector('#openclaw_contribution')
    .innerText =
    openClawValuation.toLocaleString() + ' USDT';
