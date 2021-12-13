# Capstone: Restaurant Reservation System

Deployed Website: [Periodic Tables](https://bqb-restaurant-client.herokuapp.com/dashboard)

## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5000`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.

### US-01 Create and list reservations

Create new reservations and list them on the dashboard.

![image](https://user-images.githubusercontent.com/76703615/145902142-50c6abc6-9dd3-4339-995c-d7930a86333b.png)
![image](https://user-images.githubusercontent.com/76703615/145902187-4e42c55b-c7cc-4cac-8946-1753e4191aa4.png)


### US-02 Create reservation on a future, working date

Only allow reservations to be created on days when the restuarant is open, and the reservation can only occur in the future.

![image](https://user-images.githubusercontent.com/76703615/145902333-499c7537-5530-4403-a95f-a466d88cc1dd.png)


### US-03 Create reservation within eligible timeframe

Only allow reservations during business hours, and do not allow reservations within one hour of closing.

![image](https://user-images.githubusercontent.com/76703615/145902401-111e5716-0c4e-4113-8cfc-8525b256f3b1.png)


### US-04 Seat reservation

Allow the restaurant to seat customers at specific tables, and allow tables to be created and displayed on the dashboard.

![image](https://user-images.githubusercontent.com/76703615/145902482-fb81fb7e-d0d2-4e5a-b26c-7b949e218dec.png)
![image](https://user-images.githubusercontent.com/76703615/145902559-e174eb98-3dcc-440d-b8d1-ee1d326a78c6.png)


### US-05 Finish an occupied table

If a table is occupied, allow the option to finish the table so it can seat new guests.

![image](https://user-images.githubusercontent.com/76703615/145902598-31620a75-c279-4993-bc54-6427708e4579.png)


### US-06 Reservation Status

Set the status of a reservation to booked, seated, or finished.

![image](https://user-images.githubusercontent.com/76703615/145902759-c514445b-0693-4396-942f-29ababdb11e9.png)


### US-07 Search for a reservation by phone number

Have the option to search by mobile number.

![image](https://user-images.githubusercontent.com/76703615/145902807-109558b6-7443-4991-bb6c-90bacfaa403e.png)


### US-08 Change an existing reservation

Have the option to edit an existing reservation with an edit button.

![image](https://user-images.githubusercontent.com/76703615/145902896-4f624b9d-ca1f-4189-ba12-35e90606c61b.png)


