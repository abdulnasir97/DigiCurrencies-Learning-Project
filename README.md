Live Link: <br>
https://currencies-31i1.vercel.app/


App Overview:
The application I have built is a React-based cryptocurrency information platform. It allows users to view real-time data on the top 15 cryptocurrencies in the market, including their prices and additional information. <br>
![1](https://github.com/abdulnasir97/DigiCurrencies-Learning-Project/assets/120065583/58b7183a-a37b-4e52-b680-f508c37fc69e)


Key Features:
Real-time Cryptocurrency Data: The app provides up-to-date information on the top 15 cryptocurrencies, allowing users to track their prices and other relevant details.

React Routing: The application uses the React Router library to implement navigation between different views. 

Coin Details Page: Users can click on a specific cryptocurrency to view more detailed information about that particular coin. <br>
<br>
![2](https://github.com/abdulnasir97/DigiCurrencies-Learning-Project/assets/120065583/bba19005-f5c1-4912-86b1-424776d8ac8c)



Navigation Bar: The app includes a navigation bar component (Nav) to provide a user-friendly interface for navigating between different sections of the application.

Data Fetching:
The application fetches cryptocurrency data from the CoinGecko API using the Axios library. This is done asynchronously within a useEffect hook, ensuring that the data is retrieved when the component mounts. The API endpoint used is configured to request data for the top 15 cryptocurrencies in USD, ordered by market capitalization.

Technologies Used:

React: The core of the application is built using the React library, which provides a component-based architecture for building user interfaces.

React Router: The React Router library is utilized for client-side routing, enabling navigation between different views without a full page reload.

Axios: Axios is used to make asynchronous HTTP requests to the CoinGecko API. It simplifies the process of handling promises and interacting with the API.

CoinGecko API: The app relies on the CoinGecko API to fetch real-time cryptocurrency market data. The API provides various endpoints to retrieve information such as market prices, coin details, and more.


