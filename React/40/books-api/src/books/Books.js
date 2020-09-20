import React, { Component } from 'react';
import booksAPI from '../api/booksAPI';
import AddBook from './addBook';
import Book from './book/Book';

const books = [
    {
        "id": "1",
        "createdAt": "2020-09-16T20:19:24.934Z",
        "name": "Small Rubber Shirt",
        "image": "http://lorempixel.com/640/480/fashion",
        "autour": "Gage Lehner",
        "description": "aggregate intuitive",
        "pages": [
            {
                "id": "1",
                "bookId": "1",
                "createdAt": "2020-09-17T08:24:00.327Z",
                "number": 94,
                "content": "content 1"
            }
        ]
    },
    {
        "id": "2",
        "createdAt": "2020-09-16T17:01:14.328Z",
        "name": "Generic Frozen Hat",
        "image": "http://lorempixel.com/640/480/technics",
        "autour": "Reid Jerde",
        "description": "Research",
        "pages": [
            {
                "id": "2",
                "bookId": "2",
                "createdAt": "2020-09-17T04:34:01.924Z",
                "number": 73,
                "content": "content 2"
            }
        ]
    },
    {
        "id": "3",
        "createdAt": "2020-09-16T17:48:41.647Z",
        "name": "Licensed Frozen Keyboard",
        "image": "http://lorempixel.com/640/480/sports",
        "autour": "Emmitt Mueller",
        "description": "quantify",
        "pages": [
            {
                "id": "3",
                "bookId": "3",
                "createdAt": "2020-09-16T11:56:41.015Z",
                "number": 68,
                "content": "content 3"
            }
        ]
    },
    {
        "id": "4",
        "createdAt": "2020-09-16T21:23:16.670Z",
        "name": "Awesome Cotton Tuna",
        "image": "http://lorempixel.com/640/480/people",
        "autour": "Kaya Corkery",
        "description": "Checking Account Expanded recontextualize",
        "pages": [
            {
                "id": "4",
                "bookId": "4",
                "createdAt": "2020-09-17T07:02:23.452Z",
                "number": 55,
                "content": "content 4"
            }
        ]
    },
    {
        "id": "5",
        "createdAt": "2020-09-16T21:10:44.774Z",
        "name": "Generic Concrete Soap",
        "image": "http://lorempixel.com/640/480/city",
        "autour": "Bradly Hessel",
        "description": "Jewelery",
        "pages": [
            {
                "id": "5",
                "bookId": "5",
                "createdAt": "2020-09-17T09:49:26.606Z",
                "number": 100,
                "content": "content 5"
            }
        ]
    },
    {
        "id": "6",
        "createdAt": "2020-09-16T21:14:20.724Z",
        "name": "Refined Frozen Chair",
        "image": "http://lorempixel.com/640/480/abstract",
        "autour": "Sigrid Hane",
        "description": "modular",
        "pages": [
            {
                "id": "6",
                "bookId": "6",
                "createdAt": "2020-09-17T09:20:52.556Z",
                "number": 45,
                "content": "content 6"
            }
        ]
    },
    {
        "id": "7",
        "createdAt": "2020-09-17T03:53:43.686Z",
        "name": "Practical Fresh Chicken",
        "image": "http://lorempixel.com/640/480/animals",
        "autour": "Julianne Herman",
        "description": "microchip open-source schemas",
        "pages": [
            {
                "id": "7",
                "bookId": "7",
                "createdAt": "2020-09-16T15:37:59.667Z",
                "number": 9,
                "content": "content 7"
            }
        ]
    },
    {
        "id": "8",
        "createdAt": "2020-09-16T22:17:32.859Z",
        "name": "Handcrafted Granite Tuna",
        "image": "http://lorempixel.com/640/480/sports",
        "autour": "Leslie McDermott DDS",
        "description": "Response Home Loan Account Organic",
        "pages": [
            {
                "id": "8",
                "bookId": "8",
                "createdAt": "2020-09-16T20:00:51.214Z",
                "number": 2,
                "content": "content 8"
            }
        ]
    },
    {
        "id": "9",
        "createdAt": "2020-09-16T14:45:30.232Z",
        "name": "Licensed Concrete Chips",
        "image": "http://lorempixel.com/640/480/nature",
        "autour": "Dortha Willms III",
        "description": "Producer",
        "pages": [
            {
                "id": "9",
                "bookId": "9",
                "createdAt": "2020-09-16T22:26:29.066Z",
                "number": 70,
                "content": "content 9"
            }
        ]
    },
    {
        "id": "10",
        "createdAt": "2020-09-16T15:41:22.397Z",
        "name": "Incredible Metal Tuna",
        "image": "http://lorempixel.com/640/480/business",
        "autour": "Antonia Flatley",
        "description": "Fresh hard drive",
        "pages": [
            {
                "id": "10",
                "bookId": "10",
                "createdAt": "2020-09-17T05:02:07.344Z",
                "number": 64,
                "content": "content 10"
            }
        ]
    },
    {
        "id": "11",
        "createdAt": "2020-09-16T22:02:39.199Z",
        "name": "Intelligent Cotton Chips",
        "image": "http://lorempixel.com/640/480/nature",
        "autour": "Kathlyn Hodkiewicz",
        "description": "optical Delaware",
        "pages": [
            {
                "id": "11",
                "bookId": "11",
                "createdAt": "2020-09-17T01:15:55.170Z",
                "number": 50,
                "content": "content 11"
            }
        ]
    },
    {
        "id": "12",
        "createdAt": "2020-09-17T03:53:15.883Z",
        "name": "Incredible Plastic Car",
        "image": "http://lorempixel.com/640/480/transport",
        "autour": "Reanna Carroll",
        "description": "digital",
        "pages": [
            {
                "id": "12",
                "bookId": "12",
                "createdAt": "2020-09-16T16:33:23.796Z",
                "number": 28,
                "content": "content 12"
            }
        ]
    },
    {
        "id": "13",
        "createdAt": "2020-09-17T04:27:28.704Z",
        "name": "Rustic Steel Ball",
        "image": "http://lorempixel.com/640/480/people",
        "autour": "Brenden Nitzsche",
        "description": "Iraq convergence back-end",
        "pages": [
            {
                "id": "13",
                "bookId": "13",
                "createdAt": "2020-09-16T15:13:39.438Z",
                "number": 73,
                "content": "content 13"
            }
        ]
    },
    {
        "id": "14",
        "createdAt": "2020-09-17T09:31:24.493Z",
        "name": "Generic Soft Salad",
        "image": "http://lorempixel.com/640/480/city",
        "autour": "Lisa Schowalter",
        "description": "Trace European Unit of Account 9(E.U.A.-9)",
        "pages": [
            {
                "id": "14",
                "bookId": "14",
                "createdAt": "2020-09-17T04:30:21.436Z",
                "number": 14,
                "content": "content 14"
            }
        ]
    },
    {
        "id": "15",
        "createdAt": "2020-09-17T07:37:17.708Z",
        "name": "Rustic Wooden Towels",
        "image": "http://lorempixel.com/640/480/animals",
        "autour": "Cyril Hodkiewicz",
        "description": "Up-sized Automotive",
        "pages": [
            {
                "id": "15",
                "bookId": "15",
                "createdAt": "2020-09-17T11:21:47.098Z",
                "number": 4,
                "content": "content 15"
            }
        ]
    },
    {
        "id": "16",
        "createdAt": "2020-09-17T07:37:54.041Z",
        "name": "Handcrafted Fresh Bike",
        "image": "http://lorempixel.com/640/480/sports",
        "autour": "Isadore Gerhold",
        "description": "paradigm Cotton 24 hour",
        "pages": [
            {
                "id": "16",
                "bookId": "16",
                "createdAt": "2020-09-16T12:05:45.953Z",
                "number": 7,
                "content": "content 16"
            }
        ]
    },
    {
        "id": "17",
        "createdAt": "2020-09-16T13:57:14.202Z",
        "name": "Tasty Plastic Shirt",
        "image": "http://lorempixel.com/640/480/cats",
        "autour": "Gaetano Streich DDS",
        "description": "generating partnerships Money Market Account",
        "pages": [
            {
                "id": "17",
                "bookId": "17",
                "createdAt": "2020-09-16T21:22:34.563Z",
                "number": 24,
                "content": "content 17"
            }
        ]
    },
    {
        "id": "18",
        "createdAt": "2020-09-17T05:20:40.283Z",
        "name": "Handmade Fresh Chair",
        "image": "http://lorempixel.com/640/480/business",
        "autour": "Maryse Kiehn",
        "description": "Steel",
        "pages": [
            {
                "id": "18",
                "bookId": "18",
                "createdAt": "2020-09-16T17:35:38.007Z",
                "number": 21,
                "content": "content 18"
            }
        ]
    },
    {
        "id": "19",
        "createdAt": "2020-09-16T18:39:24.000Z",
        "name": "Incredible Plastic Pants",
        "image": "http://lorempixel.com/640/480/sports",
        "autour": "Vicente West",
        "description": "Compatible",
        "pages": [
            {
                "id": "19",
                "bookId": "19",
                "createdAt": "2020-09-16T15:31:03.296Z",
                "number": 39,
                "content": "content 19"
            }
        ]
    },
    {
        "id": "20",
        "createdAt": "2020-09-17T06:28:24.440Z",
        "name": "Unbranded Rubber Soap",
        "image": "http://lorempixel.com/640/480/business",
        "autour": "Mya Kutch",
        "description": "Synergized",
        "pages": [
            {
                "id": "20",
                "bookId": "20",
                "createdAt": "2020-09-17T10:47:37.791Z",
                "number": 0,
                "content": "content 20"
            }
        ]
    },
    {
        "id": "21",
        "createdAt": "2020-09-17T13:32:38.571Z",
        "name": "Licensed Rubber Bacon",
        "image": "http://lorempixel.com/640/480/business",
        "autour": "Leon Konopelski",
        "description": "Iowa transmitter HDD",
        "pages": [
            {
                "id": "21",
                "bookId": "21",
                "createdAt": "2020-09-16T17:49:49.026Z",
                "number": 61,
                "content": "content 21"
            }
        ]
    },
    {
        "id": "22",
        "createdAt": "2020-09-17T13:43:58.749Z",
        "name": "Handmade Soft Gloves",
        "image": "http://lorempixel.com/640/480/transport",
        "autour": "Mr. Julian Block",
        "description": "Tactics Bedfordshire",
        "pages": [
            {
                "id": "22",
                "bookId": "22",
                "createdAt": "2020-09-16T14:20:45.556Z",
                "number": 47,
                "content": "content 22"
            }
        ]
    },
    {
        "id": "23",
        "createdAt": "2020-09-16T23:33:46.931Z",
        "name": "Refined Rubber Chips",
        "image": "http://lorempixel.com/640/480/technics",
        "autour": "Archibald Yundt",
        "description": "Configuration",
        "pages": [
            {
                "id": "23",
                "bookId": "23",
                "createdAt": "2020-09-17T02:53:26.783Z",
                "number": 31,
                "content": "content 23"
            }
        ]
    },
    {
        "id": "24",
        "createdAt": "2020-09-16T21:26:45.923Z",
        "name": "Licensed Rubber Keyboard",
        "image": "http://lorempixel.com/640/480/technics",
        "autour": "Ms. Aditya Halvorson",
        "description": "Small Rubber Mouse vortals",
        "pages": [
            {
                "id": "24",
                "bookId": "24",
                "createdAt": "2020-09-17T10:49:11.192Z",
                "number": 20,
                "content": "content 24"
            }
        ]
    },
    {
        "id": "25",
        "createdAt": "2020-09-16T18:47:05.872Z",
        "name": "Rustic Granite Bike",
        "image": "http://lorempixel.com/640/480/business",
        "autour": "Abdiel Dickinson",
        "description": "azure National Kwacha",
        "pages": [
            {
                "id": "25",
                "bookId": "25",
                "createdAt": "2020-09-16T21:22:17.635Z",
                "number": 14,
                "content": "content 25"
            }
        ]
    },
    {
        "id": "26",
        "createdAt": "2020-09-17T10:56:36.095Z",
        "name": "Unbranded Soft Sausages",
        "image": "http://lorempixel.com/640/480/nightlife",
        "autour": "Yessenia Rau",
        "description": "Computers JBOD Senior",
        "pages": [
            {
                "id": "26",
                "bookId": "26",
                "createdAt": "2020-09-16T18:39:01.921Z",
                "number": 69,
                "content": "content 26"
            }
        ]
    },
    {
        "id": "27",
        "createdAt": "2020-09-17T11:03:41.952Z",
        "name": "Handmade Steel Shirt",
        "image": "http://lorempixel.com/640/480/nightlife",
        "autour": "Alene Aufderhar",
        "description": "Liaison",
        "pages": [
            {
                "id": "27",
                "bookId": "27",
                "createdAt": "2020-09-16T17:15:11.263Z",
                "number": 32,
                "content": "content 27"
            }
        ]
    },
    {
        "id": "28",
        "createdAt": "2020-09-17T09:43:02.828Z",
        "name": "Gorgeous Metal Cheese",
        "image": "http://lorempixel.com/640/480/fashion",
        "autour": "Ms. Twila Hoeger",
        "description": "payment",
        "pages": [
            {
                "id": "28",
                "bookId": "28",
                "createdAt": "2020-09-16T14:14:20.517Z",
                "number": 55,
                "content": "content 28"
            }
        ]
    },
    {
        "id": "29",
        "createdAt": "2020-09-16T19:00:01.920Z",
        "name": "Small Soft Sausages",
        "image": "http://lorempixel.com/640/480/nightlife",
        "autour": "Dax Little DVM",
        "description": "Spain cyan",
        "pages": [
            {
                "id": "29",
                "bookId": "29",
                "createdAt": "2020-09-16T21:53:56.124Z",
                "number": 49,
                "content": "content 29"
            }
        ]
    },
    {
        "id": "30",
        "createdAt": "2020-09-17T08:43:56.516Z",
        "name": "Practical Wooden Table",
        "image": "http://lorempixel.com/640/480/business",
        "autour": "Marianna Kuphal",
        "description": "Adaptive sensor",
        "pages": [
            {
                "id": "30",
                "bookId": "30",
                "createdAt": "2020-09-17T10:52:47.823Z",
                "number": 58,
                "content": "content 30"
            }
        ]
    },
    {
        "id": "31",
        "createdAt": "2020-09-17T09:07:17.271Z",
        "name": "Gorgeous Wooden Bike",
        "image": "http://lorempixel.com/640/480/abstract",
        "autour": "Schuyler Langosh",
        "description": "eco-centric Producer French Southern Territories",
        "pages": [
            {
                "id": "31",
                "bookId": "31",
                "createdAt": "2020-09-17T00:42:58.219Z",
                "number": 47,
                "content": "content 31"
            }
        ]
    },
    {
        "id": "32",
        "createdAt": "2020-09-16T14:16:54.982Z",
        "name": "Fantastic Steel Ball",
        "image": "http://lorempixel.com/640/480/food",
        "autour": "Abigale Mraz",
        "description": "Borders channels",
        "pages": [
            {
                "id": "32",
                "bookId": "32",
                "createdAt": "2020-09-16T17:07:29.022Z",
                "number": 1,
                "content": "content 32"
            }
        ]
    },
    {
        "id": "33",
        "createdAt": "2020-09-17T08:27:30.441Z",
        "name": "Practical Metal Chicken",
        "image": "http://lorempixel.com/640/480/cats",
        "autour": "Alexandro Dickens",
        "description": "Credit Card Account Rand Loti synthesize",
        "pages": [
            {
                "id": "33",
                "bookId": "33",
                "createdAt": "2020-09-17T10:20:02.891Z",
                "number": 2,
                "content": "content 33"
            }
        ]
    },
    {
        "id": "34",
        "createdAt": "2020-09-16T20:40:47.134Z",
        "name": "Tasty Granite Computer",
        "image": "http://lorempixel.com/640/480/abstract",
        "autour": "Albertha Hudson",
        "description": "Functionality deposit Sharable",
        "pages": [
            {
                "id": "34",
                "bookId": "34",
                "createdAt": "2020-09-17T06:14:44.216Z",
                "number": 95,
                "content": "content 34"
            }
        ]
    },
    {
        "id": "35",
        "createdAt": "2020-09-17T06:09:37.692Z",
        "name": "Generic Metal Gloves",
        "image": "http://lorempixel.com/640/480/sports",
        "autour": "Margie Stokes",
        "description": "asymmetric transmitting synthesizing",
        "pages": [
            {
                "id": "35",
                "bookId": "35",
                "createdAt": "2020-09-16T19:17:03.850Z",
                "number": 21,
                "content": "content 35"
            }
        ]
    },
    {
        "id": "36",
        "createdAt": "2020-09-16T19:56:40.476Z",
        "name": "Incredible Frozen Shirt",
        "image": "http://lorempixel.com/640/480/nightlife",
        "autour": "Barry Buckridge",
        "description": "Intelligent Plastic Shoes Officer Washington",
        "pages": [
            {
                "id": "36",
                "bookId": "36",
                "createdAt": "2020-09-16T21:14:17.260Z",
                "number": 63,
                "content": "content 36"
            }
        ]
    },
    {
        "id": "37",
        "createdAt": "2020-09-17T04:24:29.551Z",
        "name": "Practical Frozen Cheese",
        "image": "http://lorempixel.com/640/480/people",
        "autour": "Delia Veum",
        "description": "interface solid state",
        "pages": [
            {
                "id": "37",
                "bookId": "37",
                "createdAt": "2020-09-16T18:02:40.922Z",
                "number": 17,
                "content": "content 37"
            }
        ]
    },
    {
        "id": "38",
        "createdAt": "2020-09-17T06:35:53.738Z",
        "name": "Handcrafted Concrete Cheese",
        "image": "http://lorempixel.com/640/480/nature",
        "autour": "Jack Murray",
        "description": "index Avon",
        "pages": [
            {
                "id": "38",
                "bookId": "38",
                "createdAt": "2020-09-17T07:44:34.261Z",
                "number": 73,
                "content": "content 38"
            }
        ]
    },
    {
        "id": "39",
        "createdAt": "2020-09-17T00:19:23.379Z",
        "name": "Small Plastic Table",
        "image": "http://lorempixel.com/640/480/city",
        "autour": "Cleveland Metz",
        "description": "Trail TCP",
        "pages": [
            {
                "id": "39",
                "bookId": "39",
                "createdAt": "2020-09-16T16:39:29.858Z",
                "number": 63,
                "content": "content 39"
            }
        ]
    },
    {
        "id": "40",
        "createdAt": "2020-09-17T01:20:19.302Z",
        "name": "Practical Concrete Bacon",
        "image": "http://lorempixel.com/640/480/nightlife",
        "autour": "Jevon Durgan",
        "description": "European Monetary Unit (E.M.U.-6)",
        "pages": [
            {
                "id": "40",
                "bookId": "40",
                "createdAt": "2020-09-16T22:19:39.033Z",
                "number": 1,
                "content": "content 40"
            }
        ]
    },
    {
        "id": "41",
        "createdAt": "2020-09-17T01:44:45.196Z",
        "name": "Licensed Rubber Fish",
        "image": "http://lorempixel.com/640/480/animals",
        "autour": "Jaquelin Brown",
        "description": "withdrawal",
        "pages": [
            {
                "id": "41",
                "bookId": "41",
                "createdAt": "2020-09-16T23:00:22.322Z",
                "number": 11,
                "content": "content 41"
            }
        ]
    },
    {
        "id": "42",
        "createdAt": "2020-09-17T03:52:28.442Z",
        "name": "Gorgeous Rubber Ball",
        "image": "http://lorempixel.com/640/480/food",
        "autour": "Cooper Brown",
        "description": "invoice",
        "pages": [
            {
                "id": "42",
                "bookId": "42",
                "createdAt": "2020-09-17T06:39:27.860Z",
                "number": 95,
                "content": "content 42"
            }
        ]
    },
    {
        "id": "43",
        "createdAt": "2020-09-17T06:29:40.615Z",
        "name": "Handmade Frozen Salad",
        "image": "http://lorempixel.com/640/480/fashion",
        "autour": "Lauretta King",
        "description": "deposit Facilitator",
        "pages": [
            {
                "id": "43",
                "bookId": "43",
                "createdAt": "2020-09-17T06:55:43.539Z",
                "number": 29,
                "content": "content 43"
            }
        ]
    },
    {
        "id": "44",
        "createdAt": "2020-09-17T04:24:13.071Z",
        "name": "Handcrafted Frozen Shirt",
        "image": "http://lorempixel.com/640/480/city",
        "autour": "Jerrod Baumbach",
        "description": "cross-platform",
        "pages": [
            {
                "id": "44",
                "bookId": "44",
                "createdAt": "2020-09-17T05:41:03.083Z",
                "number": 2,
                "content": "content 44"
            }
        ]
    },
    {
        "id": "45",
        "createdAt": "2020-09-16T15:14:10.405Z",
        "name": "Practical Plastic Mouse",
        "image": "http://lorempixel.com/640/480/people",
        "autour": "Jayda Schamberger",
        "description": "Berkshire",
        "pages": [
            {
                "id": "45",
                "bookId": "45",
                "createdAt": "2020-09-16T22:14:51.426Z",
                "number": 66,
                "content": "content 45"
            }
        ]
    },
    {
        "id": "46",
        "createdAt": "2020-09-17T06:51:54.162Z",
        "name": "Tasty Metal Shirt",
        "image": "http://lorempixel.com/640/480/nightlife",
        "autour": "Morris Glover",
        "description": "SMS Handmade Fresh Chicken Pennsylvania",
        "pages": [
            {
                "id": "46",
                "bookId": "46",
                "createdAt": "2020-09-17T06:43:47.658Z",
                "number": 38,
                "content": "content 46"
            }
        ]
    },
    {
        "id": "47",
        "createdAt": "2020-09-17T13:49:35.995Z",
        "name": "Tasty Rubber Bacon",
        "image": "http://lorempixel.com/640/480/people",
        "autour": "Carey Ruecker",
        "description": "Radial",
        "pages": [
            {
                "id": "47",
                "bookId": "47",
                "createdAt": "2020-09-16T22:20:06.354Z",
                "number": 16,
                "content": "content 47"
            }
        ]
    },
    {
        "id": "48",
        "createdAt": "2020-09-17T02:54:29.580Z",
        "name": "Small Steel Shoes",
        "image": "http://lorempixel.com/640/480/sports",
        "autour": "Lauriane Collier",
        "description": "Cotton New Zealand",
        "pages": [
            {
                "id": "48",
                "bookId": "48",
                "createdAt": "2020-09-16T12:11:14.548Z",
                "number": 5,
                "content": "content 48"
            }
        ]
    },
    {
        "id": "49",
        "createdAt": "2020-09-17T11:36:09.240Z",
        "name": "Handmade Concrete Shirt",
        "image": "http://lorempixel.com/640/480/city",
        "autour": "Cesar Mitchell",
        "description": "Refined Personal Loan Account",
        "pages": [
            {
                "id": "49",
                "bookId": "49",
                "createdAt": "2020-09-16T13:21:35.193Z",
                "number": 79,
                "content": "content 49"
            }
        ]
    },
    {
        "id": "50",
        "createdAt": "2020-09-17T10:54:28.181Z",
        "name": "Incredible Concrete Sausages",
        "image": "http://lorempixel.com/640/480/transport",
        "autour": "Miss Gregoria Cartwright",
        "description": "Assistant Automotive Antigua and Barbuda",
        "pages": [
            {
                "id": "50",
                "bookId": "50",
                "createdAt": "2020-09-17T03:59:23.014Z",
                "number": 71,
                "content": "content 50"
            }
        ]
    }
];

const local = false;
class Books extends Component {

    state = {
        books: [],
        loading: true
    }

    componentDidMount = () => {
        if (!local) {
            this.getAllBooks();

        } else {
            this.setState({ books: books });

        }

    }

    //loading methods
    showLoading = () => {
        this.setState({ loading: true });
    }

    hideLoading = () => {
        this.setState({ loading: false });
    }
    //events
    onChangeInputHandler = (e, id) => {
        const books = this.state.books.slice();
        const toUpdate = books.findIndex((b) => b.id === id);
        if (toUpdate < 0)
            return;

        books[toUpdate][e.target.dataset.state] = e.target.value;

        this.setState({ books: books });
    }

    //async axious methods
    updateBookById = async (id) => {
        try {
            this.showLoading();
            const data = this.state.books.find(b => b.id === id);
            if (!data) { return; }

            const res = await booksAPI.put(`books/${id}`, data);
            if (res.status == 200) {
                console.log("updated");
            }
        } catch (e) {
            console.log(e);
        } finally {
            this.hideLoading();

        }
    }
    deleteBookById = async (e, id) => {
        try {
            this.showLoading();

            const res = await booksAPI.delete(`books/${id}`);

            if (res.status == 200) {
                const newBooks = this.state.books.filter(b => b.id !== id);
                this.setState({ books: newBooks });
            }
        } catch (e) {
            console.log(e);
        } finally {
            this.hideLoading();

        }
    }
    addNewBook = async (e) => {
        try {
            this.showLoading();

            e.preventDefault();
            const url = e.target.url.value;
            const name = e.target.name.value;
            const description = e.target.description.value;
            const author = e.target.author.value;

            const data = {
                name: name,
                image: url,
                autour: author,
                description: description
            }
            const res = await booksAPI.post(`books/`, data);
            console.log(res);
            if (res.status == 201) {
                const newBooks = this.state.books.slice();
                newBooks.push(res.data);
                this.setState({ books: newBooks });
            }

        } catch (e) {
            console.log(e);
        } finally {
            this.hideLoading();

        }
    }

    getAllBooks = async () => {

        try {
            this.showLoading();

            const data = await booksAPI.get('books');
            this.setState({ books: data.data });

        } catch (e) {
            console.log(e);
        } finally {
            this.hideLoading();

        }

    }


    render() {
        const methods = {
            delete: this.deleteBookById,
            change: this.onChangeInputHandler,
            update: this.updateBookById
        }
        let content = (
            <div className="ui segment " style={{height:'100vh'}}>
            <div className="ui active dimmer">
              <div className="ui big text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        );
        if (!this.state.loading) {
            const books = this.state.books.map(book => <Book key={book.id} data={book} methods={methods} />)
            content = (
                <div className='Books ui items ' style={{padding:'20px'}}>
                    <AddBook addFunction={this.addNewBook} />
                    <h1>Books</h1>
                    {books}
                </div>
            )
        }
        return (
            <>
                {content}
            </>
        )
    }
}
export default Books;