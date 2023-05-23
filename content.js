document.getElementById('regex_event_tab').addEventListener('click',()=>{
    document.getElementById('regex_announcement_tab').classList.remove('active')
    document.getElementById('regex_event_tab').classList.add('active')
    document.getElementById('regex_event_tab_panel').style.display = "block"
    document.getElementById('regex_annoucement_tab_panel').style.display = "none"
})
document.getElementById('regex_announcement_tab').addEventListener('click',()=>{
    document.getElementById('regex_announcement_tab').classList.add('active')
    document.getElementById('regex_event_tab').classList.remove('active')
    document.getElementById('regex_event_tab_panel').style.display = "none"
    document.getElementById('regex_annoucement_tab_panel').style.display = "block"
})
