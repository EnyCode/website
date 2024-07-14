export function formatDate(date) {
    const options = { month: 'long', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    
    // Function to add the 'th', 'st', 'nd', or 'rd' suffix to the day
    const day = new Date(date).getDate();
    const suffix = getDaySuffix(day);
    
    return `${day}${suffix} ${formattedDate}`;
}

function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
  
  