const countriesData = {
    iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
    turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
    usa: ["Los Angles", "San Diego", "Chicago"],
  };

const country = document.querySelector(".Country")
const city = document.querySelector(".city")


country.addEventListener("change",()=>{
    if(country.value === "Please"){
        const optionCity = document.createElement("option")
        optionCity.textContent = "Please select a country first"
        city.append(optionCity)
    }else{
        let getCountryValue = country.value
        let countryValue = countriesData[getCountryValue]
        for(let cityOfCountry of countryValue){
            const option = document.createElement("option")
            option.textContent = cityOfCountry
            city.append(option)

        }
        
    }
})
