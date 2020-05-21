export async function showNotification(bodytext){
    if (window.Notification) {
        let permission = await Notification.requestPermission();
        if(permission === 'granted'){
            let notification = new Notification('AskDataNotification',{
                body:bodytext,
                icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/calendar-1869127-1582026.png"
            })
            notification.onclick = function() {
                window.open('https://github.com/GhassenAskri/Qraphql_WebAPI');
               };
        }
    }
}