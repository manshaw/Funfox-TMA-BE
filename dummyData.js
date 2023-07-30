const users = [
    {
        userId: 1234,
        name: "Muhammad",
        password: "tma1234",
        pictureUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        group:"Fullstack Development Group"
    },
    {
        userId: 2345,
        name: "Ali",
        password: "tma2345",
        pictureUrl: "https://images.pexels.com/photos/997489/pexels-photo-997489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        group:"Fullstack Development Group"
    },
    {
        userId: 3456,
        name: "Fatima",
        password: "tma3456",
        pictureUrl: "https://images.pexels.com/photos/5211517/pexels-photo-5211517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        group:"Fullstack Development Group"
    },
    {
        userId: 4567,
        name: "Hassan",
        password: "tma4567",
        pictureUrl: "https://images.pexels.com/photos/8217880/pexels-photo-8217880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        group:"Fullstack Development Group"
    },
    {
        userId: 5678,
        name: "Hussain",
        password: "tma5678",
        pictureUrl: "https://images.pexels.com/photos/11866012/pexels-photo-11866012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        group:"Fullstack Development Group"
    }
];


const tasks = [
    {
        id: 1,
        assigneeId: 1234,
        assignee: "Muhammad",
        title: "Create Login",
        description: "You need to create a login page and use some beautiful UI",
        status: "Completed",
        dated: "29-07-2023"
    },
    {
        id: 2,
        assigneeId: 1234,
        assignee: "Muhammad",
        title: "Rest API",
        description: "Please give me access to login page backend APIs",
        status: "Pending",
        dated: "10-08-2023"
    },
    {
        id: 3,
        assigneeId: 1234,
        assignee: "Muhammad",
        title: "CI/CD Crash",
        description: "Fix production piple ASAP",
        status: "Pending",
        dated: "24-08-2023"
    },
    {
        id: 4,
        assigneeId: 1234,
        assignee: "Muhammad",
        title: "Charts UIUX",
        description: "Bubble chart is not loading data correctly",
        status: "Pending",
        dated: "01-09-2023"
    },
    {
        id: 5,
        assigneeId: 3456,
        assignee: "Fatima",
        title: "Tooltip Typo",
        description: "There is a minor typo error in side menu",
        status: "Pending",
        dated: "09-09-2023"
    },
    {
        id: 6,
        assigneeId: 3456,
        assignee: "Fatima",
        title: "Wrong Link",
        description: "Privacy Policy link is broken. Please fix",
        status: "Pending",
        dated: "05-10-2023"
    }
];

module.exports = {
    users, tasks
};