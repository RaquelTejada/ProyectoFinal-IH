# ProyectoFinal-IH

Developed by Naomi Burgués and  Raquel Tejada

# ROUTES

## API

| HTTP METHOD | URI PATH | DESCRIPTION | JSON |
| --- | --- | --- | --- |
| GET |api/ | Index page |  |
| GET |api/sign-up | Create user form | |
| POST |api/sing-up | Create user handler | |
| GET |api/log-in | Init session form | |
| POST |api/log-in | Init session handler | |
| POST |api/log-out | Exit session handler | --- |
| GET |api/auth/home-page | Index logged page | |
| GET |api/profile/:id | Profile | |
| GET |api/profile/edit/:id | Edit profile | |
| POST |api/profile/edit/:id | Edit profile | |
| GET |api/:city | Itineraries city's page | |
| GET |api/:city/:id | Itineraries details | |
| GET |api/itinerary/create | Create itinerary | |
| POST |api/itinerary/create | Create itinerary | |
| GET |api/events/list | Events list | |
| GET |api/event/create | Create event | |
| POST |api/event/create | Create event | |
| GET |api/event/:id | Event page | |
| GET |api/event/comment/:id | Comment event | |
| POST |api/event/comment/:id | Comment event | |
| POST |api/profile/delete/:id | Delete user | |
| POST |api/event/delete/:id | Delete event | |
| POST |api/event/comment/delete/:id | Delete comment | |
| GET |api/location | Api locations | ✔️|

## CLIENT

### HOME

| URI PATH | DESCRIPTION | PROTECTED |
| --- | --- | --- |
| / | HomePage | NO |
| /sign-up | Create user form | NO |
| /sing-up | Create user handler | NO |
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

- Auth Home Page
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
