
const states = ['Maharashtra', 'Delhi', 'Gujarat'];
const cities = {
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
    'Delhi': ['New Delhi'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara']
};
const localities = {
    'Mumbai': ['Andheri', 'Bandra', 'Colaba'],
    'Pune': ['Kothrud', 'Aundh', 'Baner'],
    'Nagpur': ['Dharampeth', 'Civil Lines', 'Ramdaspeth'],
    'New Delhi': ['Connaught Place', 'Karol Bagh', 'Chanakyapuri'],
    'Ahmedabad': ['Navrangpura', 'Maninagar', 'Ghatlodiya'],
    'Surat': ['Adajan', 'Piplod', 'Varachha'],
    'Vadodara': ['Alkapuri', 'Fatehganj', 'Manjalpur']
};


function populateStates() {
    const stateDropdown = document.getElementById('state');
    states.forEach(state => {
        const option = document.createElement('option');
        option.text = state;
        option.value = state;
        stateDropdown.add(option);
    });
}


function getCities() {
    const state = document.getElementById('state').value;
    const cityDropdown = document.getElementById('city');
    cityDropdown.innerHTML = '<option value="">Select City</option>';
    if (state !== '') {
        cities[state].forEach(city => {
            const option = document.createElement('option');
            option.text = city;
            option.value = city;
            cityDropdown.add(option);
        });
    }
}


function getLocalities() {
    const city = document.getElementById('city').value;
    const localityDropdown = document.getElementById('locality');
    localityDropdown.innerHTML = '<option value="">Select Locality</option>';
    if (city !== '') {
        localities[city].forEach(locality => {
            const option = document.createElement('option');
            option.text = locality;
            option.value = locality;
            localityDropdown.add(option);
        });
    }
}


function handleSubmit(event) {
    event.preventDefault();
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const locality = document.getElementById('locality').value;
    console.log('State:', state);
    console.log('City:', city);
    console.log('Locality:', locality);
    
}

populateStates();

document.getElementById('state').addEventListener('change', getCities);
document.getElementById('city').addEventListener('change', getLocalities);

document.getElementById('restaurantForm').addEventListener('search', handleSubmit);
