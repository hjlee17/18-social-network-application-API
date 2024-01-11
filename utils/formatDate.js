const formatDate = (date) => {
    const createdAtDate = new Date(date);

    // getDate method returns the day of the month (numeric) for this date according to local time
    const day = createdAtDate.getDate();
    // date suffix - 1st 21st,  2nd 22nd, 3rd 23rd, 31st, 4th-20th 24th-30th
    const daySuffix = 
        (day === 1 || day === 21 || day === 31) ? 'st' :
        (day === 2 || day === 22) ? 'nd' :
        (day === 3 || day === 23) ? 'rd' : 
        'th';

    // getMonth method returns the month for this date according to local time, as an index value
    // months[getMonth value] retrieves month abbreviation from months array
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
    const month = months[createdAtDate.getMonth()];

    // getFullYear method returns the year for this date according to local time
    const year = createdAtDate.getFullYear();
  
    // getHours method returns the hours for this date according to local time (24 hr format) - 
        // will need to change to 12 hour format, but first determine am/pm
    // getMinutes method returns the minutes for this date according to local time (returns number)
        // will need to address single digit minutes to include 0
    let hours = createdAtDate.getHours();
    let minutes = createdAtDate.getMinutes();

    // if hours is greater or equal to 12, then const ampm = pm
    const ampm = hours >= 12 ? 'pm' : 'am';

    // convert from 24 to 12 hr
    hours = hours === 0 ? 12 : (hours > 12 ? hours - 12 : hours);
    // if minutes is less than 10, string will be 0 + minutes, otherwise just minutes
    minutes = (minutes < 10 ? '0' : '') + minutes;
 
    return `${month} ${day}${daySuffix}, ${year}, at ${hours}:${minutes} ${ampm}`;

};


module.exports = formatDate;
  