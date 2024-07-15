export function formatDate(date: Date) {
    const formattedDate = date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    
    // Function to add the 'th', 'st', 'nd', or 'rd' suffix to the day
    const day = date.getDate();
    const suffix = getDaySuffix(day);
    
    return `${day}${suffix} ${formattedDate}`;
}

function getDaySuffix(day: number) {
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

export function dateFromString(dateString: string) {
    var split = dateString.split("-");
    return new Date(
        parseInt(split[2]),
        parseInt(split[1]),
        parseInt(split[0])
    );
}

export function yearMonthDay(date: Date) {
    return date.toISOString().split('T')[0];
}

export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
  
  