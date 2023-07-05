const fCurrency = document.getElementById('fCurrency');
const sCurrency = document.getElementById('sCurrency');
const amount = document.getElementById('amount');
const output = document.getElementById('output');
const btn = document.getElementById('convertBtn');

const getCurrency = async () => {
    const response = await fetch('https://v6.exchangerate-api.com/v6/1ef3bcf79e4cf51580d699fa/codes');
    if (response.ok) {
        const currencyData = await response.json();
        const supportedCurrency = currencyData.supported_codes;
        const selectCurrency = supportedCurrency.map(element => element[0]);
        selectCurrency.forEach(element => {
            const option = document.createElement('option');
            option.textContent = element;
            fCurrency.appendChild(option);
            sCurrency.appendChild(option.cloneNode(true));
        });

        btn.addEventListener('click', async (event) => {
            event.preventDefault();
            output.innerHTML = '';
            const response = await fetch(`https://v6.exchangerate-api.com/v6/1ef3bcf79e4cf51580d699fa/pair/${fCurrency.value}/${sCurrency.value}/${amount.value}`);
            if (response.ok) {
                const resultData = await response.json();
                const result = resultData.conversion_result;
                const pNode = document.createElement('p');
                pNode.textContent = result;
                output.appendChild(pNode);
            }
        });
    }
}

getCurrency()