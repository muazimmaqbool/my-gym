export default class formatDate{
    //this class returns data into this format DD/MM/YYYY
    //used in UserProfile.jsx
  static dateToDDMMYYYY(date) {
    if (!date) return ""; // returns empty string if no date is provided
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const parts = date.split("/");
    if (parts.length !== 3) return date; // returns original string if format is wrong
    const [day,month,  year] = parts;
    const formattedMonth = months[parseInt(month, 10) - 1];
    return `${day} ${formattedMonth} ${year}`;
  }
}