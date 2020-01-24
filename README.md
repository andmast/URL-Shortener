# Short.ly url shortener

## Yuhu Project

### Part 1 (Backend).

Add API endpoints that allow a user to submit a URL and access a shortened version.

#### Considerations:

- What pieces of data do we care about storing? What if we wanted statistics?
- Should the data be mutable?
- How long should the shortened part of the URL be? Could it be dynamically sized?

### Part 2 (Front end) .

Create a front end in React that allows for submitting a URL and displaying the shortened version.

#### Considerations:

- What is important to validate?
- How should the network requests be sent?
- How would we view statistics about a URL?

### Part 3 (Optional) .

This section can be considered a nice-to-have. Add a scoreboard to the landing page displaying the top 5 URLs.

#### Considerations:

- You can choose to rank based on number of times requested vs number of times submitted

# Setup

1. Fork and clone repo into your machine

2. ```
   npm install
   cd client
   npm install
   cd ..
   ```

3. [Create an MONGODB ATLAS Account](https://docs.atlas.mongodb.com/tutorial/create-atlas-account/)

4. [Deploy a Free Tier Cluster](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/)

5. [Whitelist Your Connection IP Address](https://docs.atlas.mongodb.com/tutorial/whitelist-connection-ip-address/)

6. [Create a MongoDB User for Your Cluster](https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/)

7. [Connect to Your Cluster using Node.js](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster/)

- ![Click Connect]("/Images/Markdown/click_connect.png")
