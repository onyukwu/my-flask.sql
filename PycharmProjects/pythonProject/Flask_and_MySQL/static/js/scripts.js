// scripts.js

// Confirm before deleting a user
document.addEventListener('DOMContentLoaded', function() {
    const deleteLinks = document.querySelectorAll('a.delete');

    deleteLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (!confirm('Are you sure you want to delete this user?')) {
                event.preventDefault();
            }
        });
    });
});
