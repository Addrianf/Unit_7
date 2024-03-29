const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
const userInput = document.getElementById('userField');
const btnSave = document.getElementById('save')
const emailNotification = document.getElementById('email')
const profile = document.getElementById('profile')
const timezone = document.getElementById('timezone')
const btnCancel = document.getElementById('cancel')

// ----- Alert Banner ----------


alertBanner.innerHTML = `<p><strong>Alert:</strong> You Have unread message</p><p class="alert-banner-close">x</p>`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBanner.style.display = "none"
    }
});

//------- Alert Dropdown -------
const bell = document.querySelector(".bell");
const bellMenuContainer = document.querySelector(".bellMenu-container")
const bellMenu = document.querySelector('.bellMenu');
bell.addEventListener('click', () => {
    if(bellMenuContainer.style.display != 'none'){
        bellMenuContainer.style.display = 'none'
    } else {
        bellMenuContainer.style.display = 'block';
        bellMenuContainer.innerHTML = 
            `<ul class="bellMenu">
                <li>You have 6 unread messages<span class = "bellMenu-container-close">X</span></li>
                <li>You have 4 new followers<span class = "bellMenu-close">X</span></li>
                <li>Your password expires in 7 days<span class = "bellMenu-close">X</span></li>
            </ul>`
    }
    });

    bellMenuContainer.addEventListener('click', e => {
        const element = e.target;
        if (element.classList.contains('bellMenu-container-close')) {
            bellMenuContainer.style.display = "none"
        }
    });



// -------- Traffic chart --------
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
}]
};
// ***************************************************
let hourlyTraffic = {
    labels: ["1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00", 
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00"],
    datasets: [{
        data: [
            360, 
            550,
            420, 
            320, 
            200, 
            380, 
            500, 
            220, 
            175, 
            400,
            600,
            200,
            580, 
            400, 
            420, 
            550,
            780,
            120, 
            300, 
            430, 
            290, 
            600, 
            370, 
            900,
        ],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1,
    }]
};


// dont delete
let trafficOptions = {
    maintainAspectRatio: false,
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

// ********************************************
let dailyTraffic = {
    labels: ["S",
    "M",
    "T",
    "W",
    "T",
    "F",
    "S"],
    datasets: [{
        data: [700, 360, 880, 420, 560, 1150, 1300],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1,
    }]
};



//weekly line chart data 
let weeklyTraffic = {
    labels: ['16-22', 
    '23-29', 
    '30-5', 
    '6-12', 
    '13-19', 
    '20-26', 
    '27-3', 
    '4-10', 
    '11-17', 
    '18-24', 
    '25-31'],
    datasets: [{
        data: [750, 
        1250, 
        1000, 
        2000, 
        1500, 
        1750, 
        1250, 
        1850, 
        2250, 
        1500, 
        2500],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1,
    }]
};



// monthly line chart data 
let monthlyTraffic = {
    labels: ['Jan', 
    'Feb', 
    'Mar', 
    'Jun', 
    'Jul', 
    'Aug', 
    'Sep', 
    'Oct', 
    'Nov', 
    'Dec'],
    datasets: [{
        data: [440,
        820, 
        790, 
        420, 
        750, 
        950, 
        420, 
        70, 
        360, 
        650, 
        260, 
        900],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1
    }]
}


//line graph event listeners 

hourly.addEventListener('click', (e) => {
    trafficChart.data.labels = hourlyTraffic.labels;
    trafficChart.data.datasets[0].data = hourlyTraffic.datasets[0].data;
    trafficChart.update();
  });

daily.addEventListener('click', (e) => {
    trafficChart.data.labels = dailyTraffic.labels;
    trafficChart.data.datasets[0].data = dailyTraffic.datasets[0].data;
    trafficChart.update();
})

weekly.addEventListener('click', (e) => {
    trafficChart.data.labels = weeklyTraffic.labels;
    trafficChart.data.datasets[0].data = weeklyTraffic.datasets[0].data;
    trafficChart.update();
})

monthly.addEventListener('click', (e) => {
    trafficChart.data.labels = monthlyTraffic.labels;
    trafficChart.data.datasets[0].data = monthlyTraffic.datasets[0].data;
    trafficChart.update();

})

    let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: {
        labels: ["S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"],
        datasets: [{
            data: [700, 360, 880, 420, 560, 1150, 1300],
            backgroundColor: 'rgba(116, 119, 191, 0.3)',
            borderWidth: 1,
        }]
    },
    options: trafficOptions
})




// // let trafficChart = new Chart(trafficCanvas, {
//     type:'line',
//     data: trafficData,
//     options: trafficOptions
// })

// ---------- Daily chart ----------
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth:1
    }]
};

const dailyOptions = {
    maintainAspectRatio: false,
    scale: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legends: {
            display:false
        }
    }
};
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// ---------- mobile chart ----------
const mobileData = {
    labels: ["Desktop", "Tablets", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
}

const mobileOptions = {
    aspectRatio: 2,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
 };

 let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
 });


// ------------------ messaging section ------------------
send.addEventListener('submit', (e) => {
    if (user.value === '' && message.value === '') {
        e.preventDefault();
        alert("Please fill out user and message fields before sending");
    } else if (user.value === '') {
        e.preventDefault();
        alert("Please fill out user field before sending");
    } else if (message.value === '') {
        e.preventDefault();
        alert("Please fill out message field before sending");
    } else {
        e.preventDefault();
        alert(`Message successfully sent to: ${user.value}`)
        user.value= "";
        message.value = "";
        
    }
 });

 //auto-complete function
 const namesDiv = document.querySelector('.names-list')

 const namesArray = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver',
 ];

 userInput.addEventListener('keyup', (e) =>{
    namesDiv.innerHTML= "";
    namesDiv.style.display = "block";
    const ul = document.createElement("ul");
    namesDiv.append(ul);
    let search = e.target.value.toLowerCase();
    if(search !== ""){
        namesArray.forEach(name =>{
            if(name.toLowerCase().includes(search)){
                const li = document.createElement("li")
                li.textContent = name;
                ul.append(li);
                li.addEventListener('click', (e) =>{
                    userInput.value = li.textContent;
                    namesDiv.style.display = "none";
                });
            }
        })
    }else{
        namesDiv.textContent = "";
        namesDiv.style.display = "none";
    }
})

// add to local storage
btnSave.addEventListener('click', () =>{
    localStorage.removeItem('toggleOne');
    localStorage.removeItem('toggleTwo');
    localStorage.removeItem('tz');
    if(emailNotification.checked){    
        localStorage.setItem('toggleOne', emailNotification.value)
    }
    if(profile.checked){
        localStorage.setItem('toggleTwo', profile.value)
    }
    if(timezone.selectedIndex){
        localStorage.setItem('tz', timezone.value)
    }
})


//removes from local storage 
btnCancel.addEventListener('click', () =>{
    localStorage.removeItem('toggleOne');
    localStorage.removeItem('toggleTwo');
    localStorage.removeItem('tz');
})


//retrieves from local storage 
const settingsToggleOne = localStorage.getItem('toggleOne')
const settingsToggleTwo = localStorage.getItem('toggleTwo')
const settingsTZ = localStorage.getItem('tz')

//checks for local storage to display saved settings 
const display = () => {
    if(emailNotification.value === settingsToggleOne){
        emailNotification.checked = true
    }
    if(profile.value === settingsToggleTwo){
        profile.checked = true;
    }
    if(timezone.selectedIndex !== ''){
        timezone.value = settingsTZ;
    }
    return;
}
display();
