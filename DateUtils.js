
export const dateFromObjectId = function(objectId, format) {
  
      if(typeof format == 'object' && format.locale)
        return (new Date(parseInt(objectId.substring(0, 8), 16) * 1000)).toLocaleDateString(format.locale, format.options || {});
  
      if(format == 'iso')
        return (new Date(parseInt(objectId.substring(0, 8), 16) * 1000)).toISOString();
  
      if(format == 'string')
        return (new Date(parseInt(objectId.substring(0, 8), 16) * 1000)).toDateString();
  
      return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
  
};

export const timeAgo = function(time, { templates }) {
  
    const defaultTemplates = {
        prefix: "",
        suffix: " ago",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years"
    };
  
    const currentTemplates = { ...defaultTemplates, ...templates }

    const getTemplate = function (t, n) {
        return currentTemplates[t] && currentTemplates[t].replace(/%d/i, Math.abs(Math.round(n)));
    };
  
    const timer = function(time) {
  
        if(!time) return;
        if(!isNaN(Number(time))) time = new Date(time);
        if(time instanceof Date) time = String(time);
  
        time = time.replace(/\.\d+/, ""); // remove milliseconds
        time = time.replace(/-/, "/").replace(/-/, "/");
        time = time.replace(/T/, " ").replace(/Z/, " UTC");
        time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
        time = new Date(time * 1000 || time);
  
        const now = new Date();
        const seconds = ((now.getTime() - time) * .001) >> 0;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        const years = days / 365;
  
        return currentTemplates.prefix + (
            seconds < 45 && getTemplate('seconds', seconds) ||
            seconds < 90 && getTemplate('minute', 1) ||
            minutes < 45 && getTemplate('minutes', minutes) ||
            minutes < 90 && getTemplate('hour', 1) ||
            hours < 24 && getTemplate('hours', hours) ||
            hours < 42 && getTemplate('day', 1) ||
            days < 30 && getTemplate('days', days) ||
            days < 45 && getTemplate('month', 1) ||
            days < 365 && getTemplate('months', days / 30) ||
            years < 1.5 && getTemplate('year', 1) ||
            getTemplate('years', years)) + currentTemplates.suffix;
    };
    return timer(time);
};

export default {
    dateFromObjectId,
    timeAgo,
}