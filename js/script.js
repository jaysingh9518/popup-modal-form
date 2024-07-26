function callModal() {
    const modal = new bootstrap.Modal(document.getElementById('formModal'));
    modal.show();
}

document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });

    // Close modal on form submission
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (form.checkValidity()) {
            const modal = document.getElementById('formModal');
            const bootstrapModal = bootstrap.Modal.getInstance(modal);
            bootstrapModal.hide();
            form.reset();
            form.classList.remove('was-validated');
        }
    });
});

feather.replace();

$(document).ready(function () {
    $('#datepicker').datepicker({
        format: 'dd-mm-yyyy', // Bootstrap Datepicker format
        minViewMode: 0, // Show months and years only
        maxViewMode: 2, // Allow year view
        startView: 1,   // Start with month view
        autoclose: true
    }).on('focus', function () {
        $(this).datepicker('show');
    });
});