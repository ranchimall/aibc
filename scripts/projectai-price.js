async function loadProjectAI() {

    try {

        const response =
            await fetch(
                './data/projectai.json?v=' +
                Date.now()
            );

        const data =
            await response.json();

        const VALUE_PER_VIEW = 1;

        const valuationContribution =
            data.currentViews * VALUE_PER_VIEW;

        document.querySelector(
            '#projectai_percent'
        ).innerText =
            '0.00%';

        document.querySelector(
            '#projectai_value_per_view'
        ).innerText =
            VALUE_PER_VIEW.toFixed(2) +
            ' USDT';

        document.querySelector(
            '#projectai_current_views'
        ).innerText =
            data.currentViews.toLocaleString();

        document.querySelector(
            '#projectai_start_count'
        ).innerText =
            data.startingPoint.toLocaleString();

        document.querySelector(
            '#projectai_lifetime_views'
        ).innerText =
            data.lifetimeViews.toLocaleString();

        document.querySelector(
            '#projectai_contribution'
        ).innerText =
            valuationContribution.toLocaleString() +
            ' USDT';

    } catch(error) {

        console.error(error);

        document.querySelector(
            '#projectai_contribution'
        ).innerText =
            'Unable to load';
    }
}

loadProjectAI();