document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('شكرًا لتواصلك معنا!');
        // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});
<input type="text" id="search" placeholder="ابحث هنا...">
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display = text.includes(query) ? 'block' : 'none';
    });
})