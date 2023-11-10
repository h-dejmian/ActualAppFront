class TimeComparator {
    getTimeInMillisecondsFromString(time) {
        time.split(':');
        return time[0] * 3600000 + time[1] * 60000;
    }

    compareTime(a, b) {
        const aTime = this.getTimeInMillisecondsFromString(a);
        const bTime = this.getTimeInMillisecondsFromString(b)
        return aTime - bTime;
    }
}

export default TimeComparator;