function getyear(){
    let myDate = new Date();
    
    document.getElementById('current_year').textContent = myDate.getFullYear();
    document.getElementById('last_updated').textContent = document.lastModified;
    }