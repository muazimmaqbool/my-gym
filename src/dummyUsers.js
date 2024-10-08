import femaleImg from "../assets/images/Test Images/female.png";
import maleImg from "../assets/images/Test Images/male.jpg";

const user = [
  {
    first_name: "Umar",
    last_name: "Shah",
    address: "chinkipora, sopore-bramulla",
    age: 18,
    gender: "Male",
    image: maleImg,
    joiningDate: "01/01/2024",
    isActive: true,
    currentMonthFee: "paid",
    assignedLocker: 23,
    fee: true,
    monthsPaid: [0, 1, 2, 3], // Paid for Jan, Feb, Mar, Apr
  },
  {
    first_name: "Saba",
    last_name: "Wani",
    address: "chinkipora, sopore-bramulla",
    age: 21,
    gender: "Female",
    image: femaleImg,
    joiningDate: "15/02/2024",
    isActive: true,
    assignedLocker: null,
    fee: false,
    monthsPaid: [1], // Paid for Feb
  },
  {
    first_name: "Haseeb",
    last_name: "Shabir",
    address: "chinkipora, sopore-bramulla",
    age: 40,
    gender: "Male",
    image: maleImg,
    joiningDate: "20/03/2024",
    isActive: false,
    assignedLocker: 45,
    fee: false,
    monthsPaid: [2], // Paid for Mar
  },
  {
    first_name: "Sahil",
    last_name: "Khan",
    address: "chinkipora, sopore-bramulla",
    age: 27,
    gender: "Male",
    image: maleImg,
    joiningDate: "10/04/2024",
    isActive: true,
    assignedLocker: null,
    fee: false,
    monthsPaid: [], // No fee paid yet
  },
  {
    first_name: "Zeenat",
    last_name: "Khan",
    address: "chinkipora, sopore-bramulla",
    age: 22,
    gender: "Female",
    image: femaleImg,
    joiningDate: "05/05/2024",
    isActive: true,
    assignedLocker: 32,
    fee: true,
    monthsPaid: [4, 5], // Paid for May, Jun
  },
  {
    first_name: "Rabia",
    last_name: "Mushtaq",
    address: "chinkipora, sopore-bramulla",
    age: 30,
    gender: "Female",
    image: femaleImg,
    joiningDate: "17/06/2024",
    isActive: false,
    assignedLocker: null,
    fee: false,
    monthsPaid: [5], // Paid for Jun
  },
  {
    first_name: "Bilal",
    last_name: "Baba",
    address: "chinkipora, sopore-bramulla",
    age: 15,
    gender: "Male",
    image: maleImg,
    joiningDate: "08/07/2024",
    isActive: true,
    assignedLocker: 57,
    fee: true,
    monthsPaid: [6, 7], // Paid for Jul, Aug
  },
  {
    first_name: "Aamir",
    last_name: "Dar",
    address: "chinkipora, sopore-bramulla",
    age: 19,
    gender: "Male",
    image: maleImg,
    joiningDate: "25/08/2024",
    isActive: true,
    assignedLocker: null,
    fee: false,
    monthsPaid: [7], // Paid for Aug
  },
  {
    first_name: "Amir",
    last_name: "Mushtaq",
    address: "chinkipora, sopore-bramulla",
    age: 25,
    gender: "Male",
    image: maleImg,
    joiningDate: "10/09/2024",
    isActive: false,
    assignedLocker: 68,
    fee: true,
    monthsPaid: [8], // Paid for Sep
  },
  {
    first_name: "Insha",
    last_name: "Bilal",
    address: "chinkipora, sopore-bramulla",
    age: 23,
    gender: "Female",
    image: femaleImg,
    joiningDate: "22/10/2024",
    isActive: true,
    assignedLocker: null,
    fee: false,
    monthsPaid: [9], // Paid for Oct
  },
];

export default user;
