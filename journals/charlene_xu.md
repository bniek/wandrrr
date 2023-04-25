# Charlene Xu

## Week 17

---

---

### (Fri) 4/28/2023

-

### (Thur) 4/27/2023

-

### (Wed) 4/26/2023

-

### (Tue) 4/25/2023

-

### (Mon) 4/24/2023

-

---

## Week 16

---

---

### (Fri) 4/21/2023

- DAY OFF

### (Thur) 4/20/2023

- Successfully deployed our app (CI/CD part 3 & part 4)
- Need to debug frequent 404 errors that come up between page refreshes, navigating to other pages, trying to access the webpages through typing in the url
- Can’t submit form
- Everything is still working in localhost:3000, but nothing works in the deployed frontend

### (Wed) 4/19/2023

- Merged and pulled for individual works
- Tested pages are all working after merge
- Started on CI/CD part2

### (Tue) 4/18/2023

- Pulled changes (front-end Auth) and merged with main
- Refractored codes to be working with the merge
- Included get_all endpoint to be protected

### (Mon) 4/17/2023

- Landing page draft is done
- Modified background images to change every minute
- Completed CI/CD part 1

---

## Week 15

---

---

### (Fri) 4/7/2023

- Pair-programming with Elaine to get her detail page working

### (Thur) 4/6/2023

- Made card component clickable on get_all endpoint (FE)

### (Wed) 4/5/2023

- Bug#1 fixed by removing the trailing slash from the get_all endpoint in router.py; however, the terminal still getting back 200 OK response continuously (Bug#1.2). When I check the Network tab, the endpoint just kept fetching.
- Bug#1.2 fixed by adding an empty dependencies array to my useEffect implementation; it’s actually telling React to only run my effect if one of the values in the array changes
- Bug#2 fixed by using React.Children.toArray() method. This function prefixes each key in the returned array so that each element’s key is scoped to the input array containing it

### (Tue) 4/4/2023

- Read documentations on Tailwind CSS and daisyiu plug-in
- Started working on the front-end for get_all endpoint
- Bug#1: the terminal kept getting 200 OK redirect, but everything’s okay on the browser
- Bug#2: console error → “Each child in a list should have a unique "key" prop.”

### (Mon) 4/3/2023

- Finished get_all, update, and delete endpoints

---

## Week 14

---

---

### (Fri) 3/31/2023

- Day off

### (Thur) 3/30/2023

- As a group, we organized the file structure of the app
- Created pool.py inside of queries to store the pool connection
- Completed issue#8 on Gitlab
- Created basic endpoints for everything
- Accessed localhost:8000/docs to check that endpoints are showing

### (Wed) 3/29/2023

- As a group, we updated our docker yaml file abd requirements.txt
- Connected our database to Beekeeper
- Created our tables for accounts and wandrrrs
- Ran migrations and confirmed that the tables were properly appearing in our database
- Created and merged our first merge request

### (Tue) 3/28/2023

- Revisited the FastAPI exploration
- Created feature branch to look around the codes
- Decided to use Beekeeper instead of pgAdmin

### (Mon) 3/27/2023

- As a group, we added issues to Gitlab
- finished schema design
- finished first round of task assignment
