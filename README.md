# ⛅ React Weather App 🌍

A modern, minimal, and responsive **Weather App** built with **React** that fetches real-time weather data using the **OpenWeatherMap API**. Search for any city worldwide and instantly get its temperature, weather conditions, and location details — all wrapped in a clean and stylish UI.


## 🚀 Key Features

✅ Search for the weather in any city  
✅ Real-time temperature in °C  
✅ Weather condition (e.g., Cloudy, Sunny, Rainy)  
✅ Current date & city with country  
✅ Auto styling for warm/cold weather  
✅ Responsive layout with modern design  
✅ Enter key or button click to search  
✅ Built using functional components & React Hooks

---

## 🛠️ Built With

| Technology        | Usage                          |
|------------------|---------------------------------|
| ⚛️ React         | Frontend library                |
| 🌐 OpenWeatherMap API | Weather data source       |
| 🎨 CSS3           | Styling & layout                |
| 💡 React Icons    | Beautiful search icon (FaSearch) |

---

## 🌈 UI Preview

> Uses conditional classes (`app` vs `app-warm`) based on temperature  
> (e.g., blue background for cold, orange/red for warm)

```jsx
<div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'app-warm' : 'app') : 'app'}>


📦 File Structure
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── Weather.js
│   ├── Weather.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md


✨ Features In-Depth

| Feature                | Description                                             |
| --------------------   | ------------------------------------------------------- |
| 🔎 Search Input       |  Dynamic search using city name                          |
| 🕹️ Keyboard + Click   |   Search by hitting Enter or clicking the search icon     |
| 📅 Current Date       |  Display current date in human-readable format           |
| 🌡️ Temperature        |   Fetched in °C with simple `Math.round()` for clean look |
| 🎨 Warm/Cold Theme    |  Conditional background styling based on temperature     |


🌱 Future Improvements
🌍 Add geolocation support

🌓 Dark mode toggle

📊 Show humidity, wind speed, and sunrise/sunset

🗺️ Autocomplete cities using a 3rd-party API


🔗 Connect with Me

| Platform     | Link                                                                 |
| ------------ | -------------------------------------------------------------------- |
| 💼 LinkedIn  | www.linkedin.com/in/harismunshi                                      |        
| 🌐 Portfolio | https://harismunshi.github.io/portfolio                              |


