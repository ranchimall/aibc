async function loadProjectAI() {

    try {

        const response =
            await fetch(
                './data/projectai.json?v=' +
                Date.now()
            );

        const data =
            await response.json();

        document.querySelector(
            '#projectai_contribution'
        ).innerHTML =
            'YouTube Views Valuation<br>' +
            data.currentViews.toLocaleString() +
            ' Views';

        document.querySelector(
            '#projectai_details'
        ).innerHTML =
            'Views Current Count: ' +
            data.currentViews.toLocaleString() +
            '<br>' +
            'Views Start Count: ' +
            data.startingPoint.toLocaleString();

    } catch(error) {

        console.error(error);

        document.querySelector(
            '#projectai_contribution'
        ).innerText =
            'Unable to load';
    }
}

loadProjectAI();