/**
 * Utility Functions for Catering System
 */

const Logger = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',

    /**
     * Internal log handler
     */
    log: function (level, message, data = null) {
        const timestamp = new Date().toLocaleString();
        const icon = level === this.INFO ? 'ℹ️' : level === this.WARN ? '⚠️' : '❌';

        console.log(`[${timestamp}] ${icon} ${level}: ${message}`);
        if (data) {
            console.error(data);
        }
    },

    info: function (message, data = null) {
        this.log(this.INFO, message, data);
    },

    warn: function (message, data = null) {
        this.log(this.WARN, message, data);
    },

    error: function (message, data = null) {
        this.log(this.ERROR, message, data);
    }
};

/**
 * Formats numbers to Indian Rupee (INR)
 * Usage: formatCurrency(500) -> ₹500.00
 */
function formatCurrency(amount) {
    const value = parseFloat(amount);
    if (isNaN(value)) return "₹0.00";
    
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(value);
}

/**
 * Simple Date Formatter
 */
function formatDate(dateInput) {
    if (!dateInput) return "N/A";
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
    return date.toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
}

// Expose functions to the global window object
window.Logger = Logger;
window.formatCurrency = formatCurrency;
window.formatDate = formatDate;