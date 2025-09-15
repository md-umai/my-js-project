let userContainer = document.querySelector('.userContainer');

const arr = [
    {
        profileUrl:'https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/80221678-0539-4495-8007-0096677e1eca/image00016.jpeg?format=2500w" alt="User Image',
        name:'Mohammed Umair',
        email:'mdumair@gmail.com'
    },

    {
        profileUrl:'https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/1644529076537-44RQ7BGS0ZHA5ZC9X991/EE7A1239.jpg" alt="User Image',
        name:'Omer Sayeed Quadri',
        email:'quadrisaab@gmail.com'
    },

    {
        profileUrl:'https://www.apetogentleman.com/wp-content/uploads/2018/06/top-male-models.jpg" alt="User Image',
        name:'Ziad Shaik',
        email:'ziadshaik@gmail.com'
    }

    {
        profileUrl:'https://www.apetogentleman.com/wp-content/uploads/2018/06/top-male-models.jpg" alt="User Image',
        name:'Khaja Hamza',
        email:'hamza@gmail.com'
    }


    {
        profileUrl:'https://www.apetogentleman.com/wp-content/uploads/2018/06/top-male-models.jpg" alt="User Image',
        name:'Mohammed Mudassir Hussain Quadri',
        email:'mudassir@gmail.com'
    }
];



function renderUsers(arr){
    userContainer.innerHTML = "";
    arr.map(function(obj){
    let {profileUrl,name,email} = obj;
    let divElem = document.createElement('div');
    divElem.className = 'userItem';
    divElem.innerHTML =`<div class="userItem">
                <img src=${profileUrl} alt="User Image">
                <div class="userdetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>
            </div>`;
    
    userContainer.appendChild(divElem);
    })
}
renderUsers(arr);


function handleSearch(e){
    // console.log(searchInput.value);
    // console.log(e.target.value);
    let searchValue = e.target.value;
    let filteruser = arr.filter(obj=>{
        // console.log(obj.name.includes(searchValue));
        return (obj.name.toLowerCase().includes(searchValue.toLowerCase()));
        return obj.email.toLowerCase().includes(searchValue.toLowerCase());
    })
    renderUsers(filteruser);
    
}

searchInput.addEventListener('input',handleSearch);