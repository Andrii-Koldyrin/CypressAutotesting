# Autotesting files location:
- All auto tests can be found at 
cypress/integration path.
# Tests short description: 
- home_page_spec.js contains standard autotests like:
- input fields, column names, promotion 
button asserts etc;
- redux_state_spec.js contains different 
- set of autotests connected with the asserts 
- of local storage clean-up and manipulations 
- with it by adding different CrewMember-containers
- into different App-columns 
- with status like (Hired or Applied), 
- and putting the amount of CrewMember-containers
- into different statuses 
- and check each amount of crew-members 
- with each status(Applied,Interviewing,Hired).
# Short note about redux spec.js:
- For redux_state_spec.js were used 
- such files from support directory: 
commands.js and utils.js.

# P.S.: 
- Please note that class name: 
-'.CrewMemeber-name' contains 
- grammatical mistake Memeber = Member.
