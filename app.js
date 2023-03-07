$(document).ready(function(){





    $("#profile-ripples").ripples({
        
            resolution:512,
            dropradius:10
        });
        const bars = document.querySelectorAll('.progress_bar');
     bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innertext = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);
            
        })
});
  