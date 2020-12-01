<template>
<div class="container flex justify-center">
    <form id="form-component" @submit.prevent="" class="w-full max-w-2xl">
    <h2 class="my-8">
    Please fill out the Skill Shop application for system:<span></span>
    </h2>
    <div class="flex items-center border-b border-blue-600 py-2 my-6">
        <input 
        v-model="sysid" 
        id="sysid" 
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" 
        placeholder="System Id" 
        aria-label="System Id" 
        value="">
    </div>

    <div class="flex items-center border-b border-blue-600 py-2 my-6">
        <input 
        v-model="form.productName" 
        id="product-name" 
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" 
        placeholder="Product Name" 
        aria-label="Product Name">
    </div>

    <div class="flex items-center border-b border-blue-600 py-2 my-6">
        <textarea 
        v-model="form.overview"
        id="overview" 
        cols="30" 
        rows="10" 
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" 
        placeholder="Overview" 
        aria-label="Overview">
        </textarea>
    </div>
    <br>
    <!-- selected courses -->

    <div v-if="form.selectedCourses.length > 0">
        <div class="p-4 flex flex-column flex-wrap justify-center border-solid border-2 border-gray-600">
            <span 
            v-for="(course, index) in form.selectedCourses" 
            :key="course" 
            v-on:click="removeSelectedCourse($event, course, index)"
            class="bg-gray-400 px-2 py-0 m-2 rounded cursor-pointer">X <span class="ml-2">{{course}}</span>
            </span>
        </div>
    </div>






    <br>
    <label for="" class="block mb-2">Courses</label>
    <div class="container courses-container flex flex-col my-10 py-10 px-4 border-solid border-2 border-gray-600">
        <table class="border-separate table-auto">
            <thead class="mb-5">
            <tr class="text-left">
                <th>

                </th>
                <th class="pl-6 pb-10">
                    Course Name
                </th>
                <th class="pb-10">
                    Course Id
                </th>
            </tr>
            <tr>
                <th>
                </th>
                <th>
                </th>
                <th>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr 
            v-for="(course, index) in courses" 
            :key="index" 
            class="text-left">
                <td>
                    <button 
                        ref="addBtn"
                        v-on:click="handleSelectedCourse($event, course)" 
                        v-bind:id="course.courseId"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add
                    </button>
                </td>
                <td class="pl-6">
                    {{ course.courseName }} 
                </td>
                <td>
                    {{ course.courseId }}
                </td>
            </tr>
            </tbody>
        </table>

    </div>

    <!-- pagination -->
    <div v-if="pagesCount > 0" id="pagination" class="container flex">
        <nav class="relative z-0 inline-flex shadow-sm">
        <button 
        href="#" 
        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
          <!-- Heroicon name: chevron-left -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button 
        href="#" 
        v-for="(page, index) in paginationCount" 
        v-on:click="getCourses(page);"
        :key="index" 
        class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          {{ page }}
        </button>
        <button 
        href="#"
        class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
          <!-- Heroicon name: chevron-right -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </nav>
    </div>
    
    <div class="container selected-courses flex flex-col my-10"></div>
    <!-- PRICE POINTS -->
    <div class="spacer m-24"></div>

    <div id="price-point-container" class="priceContainer flex flex-col">
        <div id="price-point-wrapper1" class="container price-container flex items-center my-10">
            <div class="w-1/4 md:w-1/2 mb-6 md:mb-0">
                <label class="price-label block mb-2">Price Point 1</label>
                <input 
                v-model="form.pricePoints.pricePoint1.price"
                id="price1" 
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" 
                type="number" 
                placeholder="$ Price" 
                aria-label="Price">
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block mb-2" for="pricing-term">
                    Term
                </label>
                <div class="relative">
                    <select 
                    v-model="form.pricePoints.pricePoint1.term"
                    id="term1"
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                    
                    <option 
                    v-for="term in terms" 
                    :key="term.id"
                    v-bind:value="term"
                    >{{term.toUpperCase()}}</option>

                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            
            <div class="w-full md:w-1/3 pr-3 mb-6 md:mb-0">
                <label class="block mb-2" for="pricing-modle">
                    Pricing Model
                </label>
                <div class="relative">
                    <select 
                    v-model="form.pricePoints.pricePoint1.priceModel"
                    id="priceModel1"
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >

                    <option 
                    v-for="pricingModel in pricingModels" 
                    :key="pricingModel.id">
                    {{pricingModel.toUpperCase()}}
                    </option>
                    

                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="price-btn-container">
        <a 
        v-on:click="makePricePoint()"
        id="price-btn" 
        class="price-point bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >
            Add New Price Option
        </a>
    </div>
    <div class="spacer m-24"></div>
    <div class="flex items-center border-b border-blue-600 py-2 my-6">
        <input 
        v-model="form.sme"
        id="sme-input" 
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" 
        placeholder="Subject Matter Expert" 
        aria-label="Subject Matter Expert">
    </div>
    <div class="flex items-center border-b border-blue-600 py-2 my-6">
        <textarea
        v-model="form.bio" 
        id="sme-bio" 
        cols="30" 
        rows="10" 
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" 
        placeholder="Bio" 
        aria-label="Bio"></textarea>
    </div>
    <div class="flex items-center border-b border-blue-600 py-2 my-6">
        <input
        v-model="form.imgLink" 
        id="sme-image" 
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" 
        placeholder="Image Link" 
        aria-label="Image Link">
    </div>
     <div class="sub-btn-container my-10">
        <a 
        v-on:click="submit();"
        id="sub-btn" 
        class="submit bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >
            Submit
        </a>
    </div>
    </form>
</div>
</template>

<script>
    export default {
        
        mounted(){
            //get courses count
            this.getCoursesCount();

            //get courses list
            this.getCourses(this.pageNum);


           
        },
        props:{
            sysid: null,
            apikey: null,
            
            
        },
        data(){
            return{
                pagesCount: null,
                paginationCount: 14,
                courses: null,
                courseAdded: false,
                itemsPerPage: 30,
                pageNum: 1,
                priceIndex: 1,
                terms: [
                    'select',
                    'monthly',
                    'quarterly',
                    'yearly',
                    'one time',
                ],   
                pricingModels: [
                    'select',
                    'b2c',
                    'b2b'
                ],

                form: {
                    sysid: this.sysid,
                    productName: null,
                    overview: null,
                    selectedCourses: [],
                    pricePoints: {
                        pricePoint1: {
                            price: null,
                            term: null,
                            priceModel: null
                        }
                    },
                    sme: null,
                    bio: null,
                    imgLink: null,
                    
                },
                
            }
        },
        methods: {
            getCoursesCount: function(){
            axios.get('https://webservices.lightspeedvt.net/REST/V1/courses/count',{
                params: {
                    systemId: this.sysid,
                },
                headers: {
                    'Authorization': 'Basic '+ btoa(`${this.apikey}:lsvt`)
                }
            })
            .then( response => {
                // handle success
               
                this.pagesCount = Math.ceil(response.data / 30);
                
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            },
            getCourses: async function(pageNum){
                axios.get('https://webservices.lightspeedvt.net/REST/V1/courses',{
                    params: {
                        systemId: this.sysid,
                        itemsPerPage: this.itemsPerPage,
                        page: pageNum,
                    },
                    headers: {
                        'Authorization': 'Basic '+ btoa(`${this.apikey}:lsvt`)
                    }
                })
                .then( response => {
                    // handle success
                
                    this.courses = response.data;
                    console.log(response)
                    
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                })
            },
            handleSelectedCourse: function(event, course){
                
                //check to see if course has been added
                if(!this.form.selectedCourses.includes(event.target.id)){
                    //if course has not been added, add to selectedCourses array
                    this.form.selectedCourses.push(event.target.id);

                    //change button text and bg to green
                    this.checkBtnState();

                // if removed button clicked, remove from selected courses and change button back to original state
                }else if(this.form.selectedCourses.includes(event.target.id)){
                    let btnIndex = this.form.selectedCourses.indexOf(event.target.id);
                    this.form.selectedCourses.splice(btnIndex, 1);
                    
                    this.checkBtnState();

                }

                

            },
            checkBtnState: async function (){
                if(this.$refs.addBtn){
                    this.$refs.addBtn.forEach(btn =>{
                        if(this.form.selectedCourses.includes(btn.id)){
                            btn.textContent = "Remove";
                            btn.classList.remove('bg-blue-500')
                            btn.classList.add('bg-red-500');    
                            return            
                        }
                    
                    
                        if(!this.form.selectedCourses.includes(btn.id)){
                            btn.textContent = "Add";
                            btn.classList.remove('bg-red-500')
                            btn.classList.add('bg-blue-500');
                            return
                        }
                    }); 
                }
            },
            removeSelectedCourse: function(event, course ,index){
                this.form.selectedCourses.splice(index, 1);
                //changes button text and background color
                this.$refs.addBtn.forEach(btn => {
                    if(btn.id == course){
                        btn.innerText = "Add";
                        btn.classList.remove('bg-green-400');
                        btn.classList.add('bg-blue-500');
                        
                    }
                })

            },
            makeSelectPointer: function(){
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

            },
            //function makes a new price point container
            makePricePoint: function(){
                
                let pricePointContainer = document.querySelector('#price-point-container');
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
                    pricePointInput.setAttribute('id', 'price' + pricePointCount);
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
                    let selectPointer = this.makeSelectPointer();
                    
                    let termDiv = document.createElement('div');
                    termDiv.classList.add('w-full','md:w-1/3','px-3','mb-6','md:mb-0');

                    let relDiv = document.createElement('div');
                    relDiv.className = "relative";

                    let termLabel = document.createElement('label');
                    termLabel.classList.add('block','mb-2');
                    termLabel.setAttribute('for', 'pricing-term' + pricePointCount);
                    termLabel.textContent = "Term";

                    //select
                    let select = document.createElement('select');
                    select.id = "term" + pricePointCount;
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

                    this.terms.forEach( term => {
                        let option = document.createElement('option');
                        option.text = term.toUpperCase();
                        option.value = term;
                        select.appendChild(option);
                    });
                    
                    relDiv.appendChild(select);
                    relDiv.appendChild(this.makeSelectPointer());
                    
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
                    pmTermLabel.textContent = "pricing-model";

                    //select
                    let pmSelect = document.createElement('Select');

                    pmSelect.id = "priceModel" + pricePointCount;
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

                    this.pricingModels.forEach( term => {
                        let option = document.createElement('option');
                        option.text = term.toUpperCase();
                        option.value = term;
                        pmSelect.appendChild(option);
                    });

                    pmRelDiv.appendChild(pmSelect);
                    pmRelDiv.appendChild(selectPointer);
                    pmDiv.appendChild(pmTermLabel);
                    pmDiv.appendChild(pmRelDiv);
                    newPricePointWrapper.appendChild(pmDiv);

                pricePointContainer.appendChild(newPricePointWrapper);

                //adds new object to form.pricePoint
                let addedPrices = document.querySelectorAll('.price-container');
                addedPrices.forEach((pricePoint) => {
                    
                    this.form.pricePoints[`pricePoint${addedPrices.length}`] = {
                    price: null,
                    term: null,
                    pricingModel: null
                };
                
                });
                
                
            },
            submit() {

                Object.entries(this.form.pricePoints).forEach(([key, value]) => {
                    //loop through form.pricePoints and assign values dynamically
                    let newObj = {
                        price: value.price ? value.price: document.querySelector(`#price${this.priceIndex}`).value,
                        term: value.term ? value.term : document.querySelector(`#term${this.priceIndex}`).value,
                        priceModel: value.priceModel ? value.priceModel : document.querySelector(`#priceModel${this.priceIndex}`).value
                    };

                    this.form.pricePoints[`${key}`] = newObj;

                    //console.log(this.form.pricePoints[`${key}`])

                    //console.log(`${this.priceIndex}, ${key}: ${value.price}`);

                    this.priceIndex++;
                    });



                //console.log(this.form.pricePoints)
                this.$inertia.post('/skillshop/form/submit', this.form)
            },

        },
        updated: function(){
            this.checkBtnState();
        }


    }

</script>
