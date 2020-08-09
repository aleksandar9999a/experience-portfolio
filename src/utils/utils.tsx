/**
 * Generate Command - 'put' or 'post'
 * 
 * @param {Object} data
 * @returns {String} 
 */
export function generateCommand(data: any): string {
    return !!data._id
        ? 'put'
        : 'post'
}

/**
 * Generate ID by date
 * 
 * @returns {String}
 */
export function generateDateID(str?: string) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const milliseconds = date.getMilliseconds();
    const customEnd = !!str
        ? str
        : '';

    return `${year}${month}${day}${hour}${minutes}${milliseconds}${customEnd}`;
}