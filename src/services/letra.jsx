// Preguicinha, tudo isso foi gerado com chat GPT e modificado para atender às minhas necessidades

function getNextSaturday() {
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Calculate the number of days until the next Saturday
    const daysUntilSaturday = 6 - currentDayOfWeek;

    // Calculate the date of the next Saturday
    const nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + daysUntilSaturday);

    // Format the date as "DD/MM/YY"
    const formattedDate =
        `${nextSaturday.getDate().toString().padStart(2, '0')}/` +
        `${(nextSaturday.getMonth() + 1).toString().padStart(2, '0')}/` +
        `${nextSaturday.getFullYear().toString().slice(-2)}`;

    return formattedDate;
}

function parseDate(inputDate) {
    // Split the input date string into day, month, and year parts
    const [day, month, year] = inputDate.split('/').map(Number);

    // Create a Date object with the parsed values
    const date = new Date(`20${year}`, month - 1, day); // Subtract 1 from month since months are 0-indexed

    return date;
}

function proximaLetra() {
    const leterList = ['A','B','C','D','E','F','G','H']
    // Parse the input date strings into Date objects
    const parsedDate1 = parseDate("03/09/23");
    const parsedDate2 = parseDate(getNextSaturday());

    // Calculate the time difference in milliseconds
    const timeDifference = Math.abs(parsedDate2 - parsedDate1);

    // Calculate the number of weeks and round up
    const weeksPassed = Math.ceil(timeDifference / (1000 * 60 * 60 * 24 * 7));

    return weeksPassed<=7 ? leterList[weeksPassed] : leterList[(weeksPassed%7)-1]
}
  
export {proximaLetra, getNextSaturday}
  