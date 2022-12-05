# ProyectoFinal-IH

Developed by Naomi Burgués and  Raquel Tejada

# ROUTES

## API

| HTTP METHOD | URI PATH | DESCRIPTION | JSON |
| --- | --- | --- | --- |
| POST |api/auth/sing-up | Create user handler | |
| POST |api/auth/log-in | Init session handler | |
| GET |api/itineraries/getAllItineraries | Info All Itineraries | |
| GET |api/itineraries/getOneItinerary/:itinerary_id' | Details itinerary | |
| POST |api/itineraries//saveItinerary | Create itinerary | |
| GET |api/events/getAllEvents | Info All Events | |
| GET |api/events/getOneEvent/:event_id | Details event | |
| POST |api/events//saveEvent | Create event | |
| GET |api/location | Api locations | ✔️|

## CLIENT

### HOME

| URI PATH | DESCRIPTION | PROTECTED |
| --- | --- | --- |
| / | HomePage | NO |
| /sign-up | Create user form | NO |
| /log-in | Init session form | NO |

### USER

| URI PATH | DESCRIPTION | PROTECTED |
| --- | --- | --- |
| /auth/home-page | Index logged page | YES |
| /profile/:id | Profile | YES |
| /profile/edit/:id | Edit profile | YES |
| /:city | Itineraries city's page | YES |
| /itinerary/create | Create itinerary  | YES |
| /events/list | Events list | YES |
| /event/create | Create event | YES |
| /event/:id | Event page | YES |
| /event/comment/:id | Comment event | YES |
| /event/create | Create event | YES |

### ADMIN

| URI PATH | DESCRIPTION | PROTECTED |
| --- | --- | --- |
| /profile/delete/:id | Delete user | YES |
| /event/delete/:id | Delete event | YES |
| /event/comment/delete/:id | Delete comment | YES |
| /admin/itineraries | Itinerarie's list | YES |


# SRC
<hr>

## PAGES

### UNPROTECTED

- Home Page
- Signup
- Login

### PROTECTED

- Home Page Pro
- Itineraries create
- Itineraries details
- Itinerarires list (admin)
- Events create
- Events details
- Events list
- Profile
- Admin duties

## COMPONENTS

### GENERAL

- Navigation
- Footer
- Signup form
- Loggin form
- Toast

### ITINERARIES

- Itinerary card
- Itinerary list
- New itinerary form
- Itinerary event

### USER SETTING

- Profile

## CONTEXT
- Auth
- Toast
- Itineraries
