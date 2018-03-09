module.exports = (function() {
    if (typeof process !== 'undefined' && process.hrtime !== undefined && (!process.versions || process.versions.electron === undefined)) {
      return () => {
        const time = process.hrtime();
  
        // Convert [seconds, nanoseconds] to milliseconds.
        return (time[0] * 1000 + time[1] / 1000000);
      };
      // In a browser, use window.performance.now if it is available.
    } else if (
      typeof performance !== 'undefined' &&
      performance.now !== undefined
    ) {
      // This must be bound, because directly assigning this function
      // leads to an invocation exception in Chrome.
      return () => (Date.now() + performance.now())
      // Use Date.now if it is available.
    } else {
      return Date.now;
    }
  })();