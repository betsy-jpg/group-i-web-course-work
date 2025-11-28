<script>
    function showForm(place) {
        document.getElementById('bookingForm').style.display = 'flex'}
        document.getElementById('credentials-form').onsubmit = function(e) {
            e.preventDefault()}
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let phone = document.getElementById('phone').value;
        alert('Booking confirmed for ${name} at ${place}.\nDetails: ${email}, ${phone}');
          hideForm();
        
    
    function hideForm() {
        document.getElementById('bookingForm').style.display = 'none'}
    
    showForm('Your Place');
</script>


