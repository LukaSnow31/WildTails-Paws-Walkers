<script>
    document.querySelectorAll('.navbar a').forEach(link =&gt; {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.classList.add('active');
            }
        });
    &rbrace;);
</script>