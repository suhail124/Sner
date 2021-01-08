const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const cityname = document.getElementById('cityname');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const data_hide = document.querySelector('.mid_layer');

const getInfo = () =>{
    alert('hii');
}
const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = city_name.Value;
   if(cityval === ""){
    cityname.innerText = 'please enter a city name';

    data_hide.classList.add('data_hide');

   }else{
       try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metrics&appid=2b490eb12b33b48717aa07b4695264a4`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        
        cityname.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;

        const tempmood = arrData[0].weather[0].main;

        //condition to check if the condition is sunny,cloudy or clear
        if(tempmood == "clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }else if(tempmood == "clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color :#f1f2f6;'></i>";
        }else if(tempmood == "rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
        }else{
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }

        data_hide.classList.remove('data_hide');


       }catch{
        city_name.innerText = 'please enter a city name properly';   
        data_hide.classList.add('data_hide');
       }
    
   }

}

submitBtn.addEventListener('click',getInfo);