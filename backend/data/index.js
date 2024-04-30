import mongoose from "mongoose"
const userIds=[
new mongoose.TypesObjectId(),
new mongoose.TypesObjectId(),
new mongoose.TypesObjectId(),
new mongoose.TypesObjectId(),
new mongoose.TypesObjectId(),
new mongoose.TypesObjectId(),
new mongoose.TypesObjectId(),
new mongoose.TypesObjectId(),


];
export const users=[
    
        {_id:userIds[0],
          "firstName": "John",
          "lastName": "Doe",
          "email": "johndoe@example.com",
          "password": "P@ssw0rd123",
          "friends": [
        
          ],
          "location": {
            "city": "New York",
            "country": "USA"
          },
          "occupation": "Software Engineer",
          "viewedProfile": 128,
          "impressions": 2567,
          "createdAt": "2022-08-15T14:35:22.000Z",
          "updatedAt": "2023-04-25T11:25:48.000Z",
          "__v": 2
        },
        {_id:userIds[1],
          "firstName": "Alice",
          "lastName": "Brown",
          "email": "alicebrown@example.com",
          "password": "S3cur3P@ssw0rd",
          "friends": [
          ],
          "location": {
            "city": "San Francisco",
            "country": "USA"
          },
          "occupation": "Data Scientist",
          "viewedProfile": 256,
          "impressions": 3541,
          "createdAt": "2021-03-10T08:45:30.000Z",
          "updatedAt": "2023-04-20T15:35:10.000Z",
          "__v": 1
        },
        {_id:userIds[2],
          "firstName": "Carlos",
          "lastName": "Martinez",
          "email": "carlosmartinez@example.com",
          "password": "T0pS3cret!",
          "friends": [
        
          ],
          "location": {
            "city": "Mexico City",
            "country": "Mexico"
          },
          "occupation": "Architect",
          "viewedProfile": 75,
          "impressions": 1453,
          "createdAt": "2019-05-20T10:22:50.000Z",
          "updatedAt": "2023-04-21T14:30:00.000Z",
          "__v": 3
        },
        {_id:userIds[3],
          "firstName": "Emma",
          "lastName": "Johnson",
          "email": "emmajohnson@example.com",
          "password": "P@ssw0rd99",
          "friends": [
          
          ],
          "location": {
            "city": "London",
            "country": "UK"
          },
          "occupation": "Marketing Specialist",
          "viewedProfile": 185,
          "impressions": 3021,
          "createdAt": "2020-07-10T12:10:15.000Z",
          "updatedAt": "2023-04-22T09:25:30.000Z",
          "__v": 2
        },
        {_id:userIds[4],
          "firstName": "Liam",
          "lastName": "Smith",
          "email": "liamsmith@example.com",
          "password": "P@55w0rd!",
          "friends": [
           
          ],
          "location": {
            "city": "Sydney",
            "country": "Australia"
          },
          "occupation": "Civil Engineer",
          "viewedProfile": 98,
          "impressions": 1897,
          "createdAt": "2018-09-15T09:30:50.000Z",
          "updatedAt": "2023-04-23T16:15:40.000Z",
          "__v": 1
        },
        {_id:userIds[5],
          "firstName": "Mia",
          "lastName": "Anderson",
          "email": "miaanderson@example.com",
          "password": "SecureP@55",
          "friends": [
          
          ],
          "location": {
            "city": "Toronto",
            "country": "Canada"
          },
          "occupation": "Graphic Designer",
          "viewedProfile": 112,
          "impressions": 2154,
          "createdAt": "2021-01-05T14:20:45.000Z",
          "updatedAt": "2023-04-24T13:35:25.000Z",
          "__v": 1
        },
        {_id:userIds[6],
          "firstName": "Oliver",
          "lastName": "Taylor",
          "email": "olivertaylor@example.com",
          "password": "1234Secure!",
          "friends": [
         
          ],
          "location": {
            "city": "Auckland",
            "country": "New Zealand"
          },
          "occupation": "Project Manager",
          "viewedProfile": 135,
          "impressions": 2765,
          "createdAt": "2017-11-30T18:10:00.000Z",
          "updatedAt": "2023-04-25T11:10:15.000Z",
          "__v": 2
        },
        {_id:userIds[7],
          "firstName": "Luna",
          "lastName": "Wilson",
          "email": "lunawilson@example.com",
          "password": "Passw0rd!",
          "friends": [
          
          ],
          "location": {
            "city": "Berlin",
            "country": "Germany"
          },
          "occupation": "Mechanical Engineer",
          "viewedProfile": 88,
          "impressions": 1675,
          "createdAt": "2016-04-15T10:30:00.000Z",
          "updatedAt": "2023-04-26T08:55:35.000Z",
          "__v": 3
        },
        {_id:userIds[8],
          "firstName": "Benjamin",
          "lastName": "Walker",
          "email": "benjaminwalker@example.com",
          "password": "P@55w0rd!",
          "friends": [
           
          ],
          "location": {
            "city": "Paris",
            "country": "France"
          },
          "occupation": "Software Developer",
          "viewedProfile": 165,
          "impressions": 3412,
          "createdAt": "2022-02-10T15:20:25.000Z",
          "updatedAt": "2023-04-27T09:45:30.000Z",
          "__v": 1
        },
       
]
