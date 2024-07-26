const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const fullName = name || 'buddy';