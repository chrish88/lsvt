const priceBtn = document.querySelector('#price-btn');

let pricePointContainer = document.querySelector('#price-point-container');

const makeSelectPointer = () => {
    let div = document.createElement('div');
    div.classList.add('pointer-events-none',
    'absolute','inset-y-0','right-0','flex','items-center','px-2','text-gray-700');

    let svg = document.createElement('svg');
    svg.classList.add('fill-current','h-4','w-4');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 20 20');

    let path = document.createElement('path');
    path.setAttribute('d','M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z');

    svg.appendChild(path);
    div.appendChild(svg);

    return div;

}


//function makes a new price point container
const makePricePoint = () => {

    let pricePointCount = document.querySelectorAll('.price-container').length+1;

    //new price point wrapper
    let newPricePointWrapper = document.createElement('div');
    newPricePointWrapper.setAttribute('id', 'price-point-wrapper' + pricePointCount)
    newPricePointWrapper.classList.add(
        'container',
        'price-container',
        'flex',
        'items-center',
        'my-10'
    );

    //new price point
        let newPricePoint = document.createElement('div');
        newPricePoint.classList.add('w-1/4', 'md:w-1/2', 'mb-6', 'md:mb-0');

        let pricePointLabel = document.createElement('label');
        pricePointLabel.classList.add('price-label', 'block', 'mb-2');
        pricePointLabel.textContent = "Price Point " + pricePointCount;

        let pricePointInput = document.createElement('input');
        pricePointInput.setAttribute('id', 'price' + pricePointCount)
        pricePointInput.setAttribute('type', 'number');
        pricePointInput.setAttribute('placeholder', '$ Price');
        pricePointInput.setAttribute('aria-label', 'Price' + pricePointCount);
        pricePointInput.classList.add(
            'appearance-none',
            'block',
            'w-full',
            'bg-gray-200',
            'text-gray-700',
            'border','rounded',
            'py-3','px-4',
            'leading-tight',
            'focus:outline-none',
            'focus:bg-white'
        )

        newPricePoint.appendChild(pricePointLabel);
        newPricePoint.appendChild(pricePointInput);
        newPricePointWrapper.appendChild(newPricePoint);

    //new term
        let selectPointer = makeSelectPointer();

        let termDiv = document.createElement('div');
        termDiv.classList.add('w-full','md:w-1/3','px-3','mb-6','md:mb-0');

        let relDiv = document.createElement('div');
        relDiv.className = "relative";

        let termLabel = document.createElement('label');
        termLabel.classList.add('block','mb-2');
        termLabel.setAttribute('for', 'pricing-term' + pricePointCount);
        termLabel.textContent = "Term";

        //select
        let terms = ['Monthly','Quarterly','Yearly','One-Time'];
        let select = document.createElement('select');

        select.id = "pricing-term" + pricePointCount;
        select.classList.add(
        'block',
        'appearance-none', 
        'w-full',
        'bg-gray-200',
        'border','border-gray-200',
        'text-gray-700', 
        'py-3', 'px-4', 'pr-8',
        'rounded',
        'leading-tight', 
        'focus:outline-none', 
        'focus:bg-white',
        'focus:border-gray-500');

        terms.forEach( term => {
            let option = document.createElement('option');
            option.text = term;
            option.value = term;
            select.appendChild(option);
        });

        relDiv.appendChild(select);
        relDiv.appendChild(selectPointer);
        termDiv.appendChild(termLabel);
        termDiv.appendChild(relDiv);
        newPricePointWrapper.appendChild(termDiv);


    //new pricing model
        let pmDiv = document.createElement('div');
        pmDiv.classList.add('w-full','md:w-1/3','px-3','mb-6','md:mb-0');

        let pmRelDiv = document.createElement('div');
        pmRelDiv.className = "relative";

        let pmTermLabel = document.createElement('label');
        pmTermLabel.classList.add('block','mb-2');
        pmTermLabel.setAttribute('for', 'pricing-model' + pricePointCount);
        pmTermLabel.textContent = "Term";

        //select
        let pmTerms = ['B2C','B2B'];
        let pmSelect = document.createElement('Select');

        pmSelect.id = "pricing-model" + pricePointCount;
        pmSelect.classList.add(
        'block',
        'appearance-none', 
        'w-full',
        'bg-gray-200',
        'border','border-gray-200',
        'text-gray-700', 
        'py-3', 'px-4', 'pr-8',
        'rounded',
        'leading-tight', 
        'focus:outline-none', 
        'focus:bg-white',
        'focus:border-gray-500');

        pmTerms.forEach( term => {
            let option = document.createElement('option');
            option.text = term;
            option.value = term;
            pmSelect.appendChild(option);
        });

        pmRelDiv.appendChild(pmSelect);
        pmRelDiv.appendChild(selectPointer);
        pmDiv.appendChild(pmTermLabel);
        pmDiv.appendChild(pmRelDiv);
        newPricePointWrapper.appendChild(pmDiv);



    
    pricePointContainer.appendChild(newPricePointWrapper);


    
}

priceBtn.addEventListener('click', (e) => {
    console.log(e);
    if(e.target.id == "price-btn"){
        makePricePoint();
    }
})
